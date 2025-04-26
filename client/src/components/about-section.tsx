import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio-data";

export default function AboutSection() {
  const infoCards = [
    {
      title: "Education",
      primary: "B.E. Computer Science",
      secondary: "IET Khandari, Agra (2021-2025)",
    },
    {
      title: "Experience",
      primary: "Programming & Projects",
      secondary: "DSA, Web Dev, AI/ML",
    },
    {
      title: "Location",
      primary: "Agra, India",
      secondary: "Available Remotely",
    },
  ];

  const certifications = [
    "Cybersecurity Analyst Job Simulation by TATA",
    "Data Analytics and Visualizations Job Simulation by Accenture",
    "Blockchain Basics by Great Learning",
    "Certificate of Accomplishment by HackerRank",
    "Databases for Developers: Foundations by ORACLE",
    "AWS Cloud Practitioner Essentials",
  ];

  return (
    <section id="about" className="py-20 bg-background theme-transition relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl opacity-30 dark:opacity-20"></div>
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and achievements
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {portfolioData.about.bio.map((paragraph, index) => (
            <motion.p 
              key={index} 
              className="text-lg mb-6 leading-relaxed text-foreground dark:text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="w-full sm:w-auto"
            >
              <Card className="bg-card border border-border hover-card h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-primary">{card.title}</h3>
                  <p className="font-medium text-foreground">{card.primary}</p>
                  <p className="text-muted-foreground">{card.secondary}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Badge 
                  className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-sm py-1.5 px-3 rounded-full border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Detail Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Education Details</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div 
              className="border-l-4 border-primary pl-4 py-3 bg-card/50 dark:bg-card/20 rounded-r-lg hover:bg-card/80 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h4 className="font-medium text-foreground">2021-2025</h4>
              <p className="font-semibold text-foreground">B.E. in Computer Science and Engineering</p>
              <p className="text-sm text-muted-foreground mt-1">Institute of Engineering & Technology, Khandari, Agra</p>
              <p className="text-sm text-primary mt-1">CGPA: 6.98</p>
            </motion.div>
            
            <motion.div 
              className="border-l-4 border-primary pl-4 py-3 bg-card/50 dark:bg-card/20 rounded-r-lg hover:bg-card/80 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h4 className="font-medium text-foreground">2019-2020</h4>
              <p className="font-semibold text-foreground">Intermediate</p>
              <p className="text-sm text-muted-foreground mt-1">Lucknow Public SCH Sec B Priyadarshini NGR Unnao</p>
              <p className="text-sm text-primary mt-1">Percentage: 76.4%</p>
            </motion.div>
            
            <motion.div 
              className="border-l-4 border-primary pl-4 py-3 bg-card/50 dark:bg-card/20 rounded-r-lg hover:bg-card/80 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h4 className="font-medium text-foreground">2018</h4>
              <p className="font-semibold text-foreground">High School</p>
              <p className="text-sm text-muted-foreground mt-1">Lucknow Public SCH Sec B Priyadarshini NGR Unnao</p>
              <p className="text-sm text-primary mt-1">Percentage: 80.83%</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Hackathon Experience */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Hackathon Experience</h3>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Card className="bg-card hover-card border border-border">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-foreground">Hack for Impact – IIIT Delhi</h4>
                <p className="text-sm text-primary mb-4">March/2025 | Rounds Cleared: 3 out of 5</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Collaborated with a team to develop innovative solutions for real-world challenges.</li>
                  <li>Demonstrating strong problem-solving and teamwork skills.</li>
                  <li>Gained hands-on experience in building scalable, impactful solutions under time constraints.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
