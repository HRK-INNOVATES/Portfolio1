import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";
import { 
  Users, 
  Lightbulb, 
  MessageSquare, 
  ClipboardList, 
  Clock, 
  BookOpen, 
  LineChart, 
  Move,
  Code,
  Layout,
  Server,
  Database
} from "lucide-react";

export default function SkillsSection() {
  const { technicalSkills, professionalSkills } = portfolioData.skills;

  // Helper function to render the correct icon based on the icon name
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" };
    
    switch (iconName) {
      case "users":
        return <Users {...iconProps} />;
      case "lightbulb":
        return <Lightbulb {...iconProps} />;
      case "message-square":
        return <MessageSquare {...iconProps} />;
      case "clipboard-list":
        return <ClipboardList {...iconProps} />;
      case "clock":
        return <Clock {...iconProps} />;
      case "book-open":
        return <BookOpen {...iconProps} />;
      case "line-chart":
        return <LineChart {...iconProps} />;
      case "user-plus":
        return <Users {...iconProps} />;
      case "code":
        return <Code {...iconProps} />;
      default:
        return null;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl opacity-60 dark:opacity-30"></div>
        <div className="absolute -bottom-[30%] right-[5%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl opacity-70 dark:opacity-30"></div>
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive set of technical and professional skills I've developed through education, projects, and real-world experiences.
          </p>
        </motion.div>
        
        {/* Technical Skills */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h3 
            className="text-2xl font-semibold font-poppins mb-8 text-center"
            variants={item}
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {technicalSkills.map((category, index) => (
              <motion.div 
                key={category.title} 
                className="relative" 
                variants={item}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-5 flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
                    {index === 0 ? (
                      <Code className="w-6 h-6 text-primary" />
                    ) : index === 1 ? (
                      <Layout className="w-6 h-6 text-primary" />
                    ) : index === 2 ? (
                      <Server className="w-6 h-6 text-primary" />
                    ) : (
                      <Database className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-3 ml-16">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (skillIndex * 0.05) }}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.03,
                        transition: { 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10
                        }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="inline-block px-4 py-2 rounded-full bg-card dark:bg-card border border-border shadow-sm font-medium text-foreground dark:hover:text-primary hover:text-primary hover:border-primary/30 transition-all duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-semibold font-poppins mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Professional Skills
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            {professionalSkills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10
                }}
              >
                <Card className="bg-card hover:bg-card/80 border border-border h-full hover:border-primary/20 hover:shadow-md transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {renderIcon(skill.icon)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm">
                        {getSkillDescription(skill.name)}
                      </p>
                    </div>
                  </CardContent>
                  <div 
                    className="h-1 w-full bg-gradient-to-r" 
                    style={{
                      backgroundImage: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))`
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to get descriptions for professional skills
function getSkillDescription(skillName: string): string {
  switch (skillName) {
    case "Leadership":
      return "Experienced in leading teams and organizing group efforts to achieve project objectives efficiently.";
    case "Team Player":
      return "Strong collaborator who contributes effectively in group settings and supports teammates to achieve common goals.";
    case "Problem Solving":
      return "Proven ability to analyze complex challenges and develop effective, innovative solutions.";
    case "Analytical Thinking":
      return "Skilled in breaking down problems, interpreting data, and making informed decisions based on evidence.";
    case "Innovation":
      return "Continuously seeking creative approaches and new technologies to improve processes and products.";
    case "Continuous Learning":
      return "Committed to ongoing growth through self-study, coursework, and staying current with industry developments.";
    default:
      return "Professional skill developed through education, projects, and real-world experiences.";
  }
}
