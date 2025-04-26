import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "dark" | "light"
}

const initialState: ThemeProviderState = {
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )
  
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light")

  useEffect(() => {
    // Create a transition on theme change
    document.documentElement.style.setProperty("--transition-theme", "all 0.3s ease-in-out")
    
    // Add transition to color-scheme
    const style = document.createElement("style")
    style.appendChild(
      document.createTextNode(
        `* {
          transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }`
      )
    )
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      const systemTheme = prefersDark.matches ? "dark" : "light"

      root.classList.add(systemTheme)
      setResolvedTheme(systemTheme as "dark" | "light")
      
      // Listen for changes in system theme
      const onChange = () => {
        const newTheme = prefersDark.matches ? "dark" : "light"
        root.classList.remove("light", "dark")
        root.classList.add(newTheme)
        setResolvedTheme(newTheme as "dark" | "light")
      }
      
      prefersDark.addEventListener("change", onChange)
      return () => prefersDark.removeEventListener("change", onChange)
    } else {
      root.classList.add(theme)
      setResolvedTheme(theme as "dark" | "light")
    }
  }, [theme])

  const value = {
    theme,
    resolvedTheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// This named export ensures consistent exports for HMR
export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}