import { Link } from "wouter";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble,
  Globe,
  Heart,
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  const { name, title } = portfolioData;
  const { socialLinks } = portfolioData.contact;
  const currentYear = new Date().getFullYear();
  
  // Helper function to render the correct icon based on the icon name
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5" };
    
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
  
  return (
    <footer className="bg-background py-12 border-t border-border theme-transition relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30 dark:opacity-10">
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <motion.span 
                className="text-2xl font-bold font-poppins gradient-text inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                HRITIK
              </motion.span>
            </Link>
            <p className="text-muted-foreground mt-3 max-w-md">{title}</p>
            
            <div className="flex flex-wrap gap-3 mt-6 items-center">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors border border-border"
                  aria-label={link.name}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {renderIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Navigation</h4>
                <ul className="space-y-2">
                  {["home", "about", "skills", "projects", "contact"].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item === 'home' ? '' : item}`} 
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center animated-underline"
                      >
                        <span className="capitalize">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href={portfolioData.contact.contactInfo[0].linkHref}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center animated-underline"
                    >
                      <span>Email</span>
                      <ArrowUpRight className="ml-1 w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href={portfolioData.contact.contactInfo[1].linkHref}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center animated-underline"
                    >
                      <span>Phone</span>
                      <ArrowUpRight className="ml-1 w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href={socialLinks.find(link => link.name === "LinkedIn")?.url || "#"} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center animated-underline"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="ml-1 w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-3 sm:mb-0 flex items-center">
            © {currentYear} HRITIK SINGH. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="w-3.5 h-3.5 mx-1 text-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
