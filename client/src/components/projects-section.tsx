import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import { Link2, Code, ArrowRight } from "lucide-react";

// Import project SVG images
import aiChatbotImage from "../assets/images/projects/ai-chatbot.svg";
import phoneTrackerImage from "../assets/images/projects/phone-tracker.svg";
import faceDetectionImage from "../assets/images/projects/face-detection.svg";
import expressionDetectionImage from "../assets/images/projects/expression-detection.svg";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  
  // Helper function to get the correct project image
  const getProjectImage = (imageName: string | undefined): string => {
    if (!imageName) return '';
    
    switch (imageName) {
      case 'ai-chatbot.svg':
        return aiChatbotImage;
      case 'phone-tracker.svg':
        return phoneTrackerImage;
      case 'face-detection.svg':
        return faceDetectionImage;
      case 'expression-detection.svg':
        return expressionDetectionImage;
      default:
        return '';
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl opacity-60 dark:opacity-40"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl opacity-60 dark:opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A collection of projects that showcase my technical skills, creativity, and problem-solving abilities.
            Each project represents a unique challenge I've tackled with passion.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              variants={item}
              className="group h-full"
            >
              <Card className="h-full bg-card border border-border overflow-hidden hover-card">
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative flex items-center justify-center overflow-hidden group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-500">
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-primary/90 hover:bg-primary text-white border-none transition-all duration-300">
                      {index === 0 ? "Latest" : index === 1 ? "Featured" : "Project"}
                    </Badge>
                  </div>
                  
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {project.image && (
                      <img 
                        src={getProjectImage(project.image)} 
                        alt={project.title}
                        className="w-16 h-16 text-primary object-contain" 
                      />
                    )}
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-6 relative z-10">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground mb-5 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <motion.div key={tech}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 text-primary hover:text-primary border-primary/10 hover:border-primary/20 px-2.5 py-1 transition-all duration-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="flex gap-3 mt-auto pt-2 border-t border-border"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {project.demoUrl && (
                      <motion.div whileHover={{ y: -2 }} whileTap={{ y: 1 }}>
                        <Button 
                          variant="link" 
                          className="text-primary hover:text-primary font-medium p-0 h-auto animated-underline"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Link2 className="w-4 h-4 mr-1.5" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    
                    {project.repoUrl && (
                      <motion.div whileHover={{ y: -2 }} whileTap={{ y: 1 }}>
                        <Button 
                          variant="link" 
                          className="text-primary hover:text-primary font-medium p-0 h-auto animated-underline"
                          asChild
                        >
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Code className="w-4 h-4 mr-1.5" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/5 font-medium px-6 py-2 h-auto shadow-sm group"
          >
            <span>View All Projects</span>
            <motion.span 
              className="inline-block ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
