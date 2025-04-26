import { useState, useRef, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { portfolioData } from "@/data/portfolio-data";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble,
  Globe,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const { contactInfo, socialLinks } = portfolioData.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Helper function to render the correct icon based on the icon name
  const renderContactIcon = (iconName: string) => {
    const iconProps = { className: "h-5 w-5" };
    
    switch (iconName) {
      case "mail":
        return <Mail {...iconProps} />;
      case "phone":
        return <Phone {...iconProps} />;
      case "map-pin":
        return <MapPin {...iconProps} />;
      default:
        return null;
    }
  };
  
  // Helper function to render the correct social icon based on the icon name
  const renderSocialIcon = (iconName: string) => {
    const iconProps = { className: "h-4 w-4" };
    
    switch (iconName) {
      case "github":
        return <Github {...iconProps} />;
      case "linkedin":
        return <Linkedin {...iconProps} />;
      case "twitter":
        return <Twitter {...iconProps} />;
      case "dribbble":
        return <Dribbble {...iconProps} />;
      case "globe":
        return <Globe {...iconProps} />;
      default:
        return null;
    }
  };

  // Initialize EmailJS once when component loads
  useEffect(() => {
    try {
      // Using environment variables for EmailJS credentials
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!publicKey) {
        console.error("EmailJS public key is missing");
        return;
      }
      
      emailjs.init(publicKey);
      console.log("EmailJS initialized with public key from environment variable");
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('submitting');
    setErrorMessage(null);
    
    try {
      if (!formRef.current) {
        throw new Error("Form reference is not available");
      }
      
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Validate credentials are present
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is incomplete. Please check your environment variables.");
      }
      
      // Get form data directly
      const formData = new FormData(formRef.current);
      const from_name = formData.get('from_name') as string;
      const reply_to = formData.get('reply_to') as string;
      const subject = formData.get('subject') as string;
      const message = formData.get('message') as string;
      
      // Additional validation
      if (!from_name || !reply_to || !message) {
        throw new Error("Please fill out all required fields");
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(reply_to)) {
        throw new Error("Please enter a valid email address");
      }
      
      // EmailJS parameters - make sure these match EXACTLY the template parameters in EmailJS
      const templateParams = {
        from_name,
        reply_to,
        subject: subject || 'New message from portfolio contact form',
        message,
        to_name: 'HRITIK SINGH',
        // The "to" recipient must be handled by the EmailJS template directly
        // We don't pass recipient email here as most EmailJS templates handle this server-side
      };
      
      // Debug EmailJS configuration (without exposing sensitive info)
      console.log("Sending email with EmailJS...");
      
      // Use the send method instead of sendForm
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      
      // Update UI state
      setFormStatus('success');
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form after 3 seconds to allow the user to see the success message
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.reset();
          setFormStatus('idle');
        }
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // More detailed error message
      let errorMsg = "There was a problem sending your message. Please try again later.";
      
      if (error instanceof Error) {
        // Use user-friendly error messages for common issues
        if (error.message.includes("Network Error")) {
          errorMsg = "Network error. Please check your internet connection and try again.";
        } else if (error.message.includes("timeout")) {
          errorMsg = "The request timed out. Please try again later.";
        } else if (error.message.includes("valid email") || error.message.includes("fill out all required")) {
          // Use the exact error message for validation errors
          errorMsg = error.message;
        } else if (typeof error === 'object' && 'text' in error && error.text === "The recipients address is empty") {
          // Handle the specific EmailJS recipient error
          errorMsg = "There's an issue with the email configuration. The administrator has been notified.";
          console.error("EmailJS Template Error: The recipient address is not configured in the EmailJS template. This must be set up in the EmailJS dashboard.");
        }
      }
      
      // Update UI state
      setFormStatus('error');
      setErrorMessage(errorMsg);
      
      toast({
        title: "Message not sent",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background theme-transition relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl opacity-30 dark:opacity-10"></div>
        <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl opacity-40 dark:opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message and I'll get back to you soon.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg mb-8 text-foreground dark:text-foreground/90">
              I'm a Computer Science Engineering student at IET Khandari, Agra with a strong foundation in programming languages and web development. I'm open to collaboration on projects, internships, and learning opportunities. If you have a project idea or opportunity, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 flex items-center justify-center rounded-full text-primary mr-4 shadow-sm">
                    {renderContactIcon(info.icon)}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{info.title}</h3>
                    {info.isLink ? (
                      <a 
                        href={info.linkHref} 
                        className="text-primary hover:underline animated-underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="font-medium mb-4 text-foreground dark:text-foreground/90">Connect with me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border hover:border-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm dark:shadow-primary/5"
                    aria-label={link.name}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {renderSocialIcon(link.icon)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-card border border-border hover-card overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Send me a message</h3>
                
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <AlertTitle className="text-green-800 dark:text-green-400 ml-2">Message sent successfully!</AlertTitle>
                      <AlertDescription className="text-green-700 dark:text-green-300 ml-6">
                        Thank you for your message. I'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}
                
                {formStatus === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <Alert className="bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800">
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <AlertTitle className="text-red-800 dark:text-red-400 ml-2">Error sending message</AlertTitle>
                      <AlertDescription className="text-red-700 dark:text-red-300 ml-6">
                        {errorMessage}
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* 
                    Note: To fix the "recipients address is empty" error, 
                    you need to configure the recipient email address directly in the EmailJS template,
                    not through form fields.
                  */}
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">Name</Label>
                    <Input
                      id="name"
                      name="from_name"
                      placeholder="Your name"
                      required
                      className="bg-background w-full border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">Email</Label>
                    <Input
                      id="email"
                      name="reply_to"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-background w-full border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-foreground mb-2 block">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="bg-background w-full border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      className="bg-background w-full border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 h-auto rounded-lg shadow-md transition-all duration-300 btn-hover-effect"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
