import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./mobile-menu";
import { scrollToSection } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToSection(id);
    // Update URL without reload
    window.history.pushState({}, "", `#${id}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 theme-transition ${
        isScrolled 
          ? `bg-background/90 dark:bg-background/95 backdrop-blur-md shadow-sm ${
              resolvedTheme === 'dark' ? 'border-b border-white/5' : 'border-b border-black/5'
            }` 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <motion.div 
              className="text-2xl font-bold font-poppins relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="gradient-text">HRITIK</span>
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"
                layoutId="nav-underline"
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8 mr-6">
              {["about", "skills", "projects", "contact"].map((item) => (
                <motion.a 
                  key={item}
                  href={`#${item}`}
                  className="font-medium hover:text-primary transition-colors capitalize relative py-1"
                  onClick={(e) => handleNavigation(e, item)}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item}
                  <motion.div 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
          
          {/* Mobile Section (Menu Toggle + Theme Toggle) */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <motion.button 
              onClick={toggleMobileMenu}
              className={`p-1.5 rounded-md focus:outline-none ${
                isScrolled 
                  ? 'bg-card/80 hover:bg-card border border-border' 
                  : 'bg-background/60 hover:bg-background/80 border border-border'
              }`}
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: isMobileMenuOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isMobileMenuOpen ? 90 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavItemClick={handleNavigation}
      />
    </header>
  );
}
