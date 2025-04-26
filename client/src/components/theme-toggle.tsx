import { Moon, Sun, Laptop, Check } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full border-primary/20 hover:border-primary bg-background/80 backdrop-blur-sm hover:bg-primary/5 transition-colors duration-300"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: theme === 'dark' ? 360 : 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute text-yellow-500 dark:-rotate-90 dark:scale-0" />
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all absolute text-primary dark:rotate-0 dark:scale-100" />
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px] p-2 border-primary/10">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 relative"
        >
          <Sun className="h-4 w-4 text-yellow-500" />
          <span>Light</span>
          {theme === 'light' && (
            <Check className="h-4 w-4 ml-auto text-primary" />
          )}
          {theme === 'light' && (
            <motion.div
              className="absolute inset-0 rounded-md bg-primary/5 -z-10"
              layoutId="theme-selection"
              transition={{ duration: 0.2, type: "spring" }}
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 relative"
        >
          <Moon className="h-4 w-4 text-primary" />
          <span>Dark</span>
          {theme === 'dark' && (
            <Check className="h-4 w-4 ml-auto text-primary" />
          )}
          {theme === 'dark' && (
            <motion.div
              className="absolute inset-0 rounded-md bg-primary/5 -z-10"
              layoutId="theme-selection"
              transition={{ duration: 0.2, type: "spring" }}
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 relative"
        >
          <Laptop className="h-4 w-4 text-blue-500" />
          <span>System</span>
          {theme === 'system' && (
            <Check className="h-4 w-4 ml-auto text-primary" />
          )}
          {theme === 'system' && (
            <motion.div
              className="absolute inset-0 rounded-md bg-primary/5 -z-10"
              layoutId="theme-selection"
              transition={{ duration: 0.2, type: "spring" }}
            />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}