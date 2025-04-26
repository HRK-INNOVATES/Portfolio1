import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavItemClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavItemClick }: MobileMenuProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden pb-4 bg-background/95 backdrop-blur-md border-t border-border dark:border-white/5 shadow-sm overflow-hidden theme-transition"
        >
          <nav className="flex flex-col space-y-1 px-4 sm:px-6 lg:px-8 py-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="font-medium hover:text-primary transition-colors py-3 px-3 rounded-md hover:bg-primary/5 relative overflow-hidden"
                onClick={(e) => onNavItemClick(e, item.id)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-70"></span>
                  {item.label}
                </span>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
