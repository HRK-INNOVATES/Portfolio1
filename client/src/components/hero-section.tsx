import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import profileImage from "../assets/images/profile.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute top-[30%] right-[20%] w-48 h-48 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Hi, I'm <span className="gradient-text font-extrabold">HRITIK</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Full Stack Developer & CS Engineering Student
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 leading-relaxed text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I'm a Computer Science Engineering student with expertise in C/C++, Python, and Java. I have a strong foundation in Data Structures & Algorithms and experience in building full-stack applications. I enjoy solving complex problems and creating innovative solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-white font-medium shadow-md btn-hover-effect group"
              >
                View My Work
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >→</motion.span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary/5 shadow-sm"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="HRITIK" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
