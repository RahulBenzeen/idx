import Link from 'next/link'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { NavigationMenuDemo } from "@/components/navigation-menu"
import { Linkedin, Github, Twitter, Youtube, Menu } from 'lucide-react'
import InteractiveBackground from '@/components/ThreeBackground'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Script from 'next/script'
import './globals.css';
import {metadata, viewport} from './metadata'

const inter = Inter({ subsets: ['latin'] })

export { metadata, viewport }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <InteractiveBackground />
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-2 sm:py-4 flex justify-between items-center">
                <Link href="/" className="text-xl sm:text-2xl font-bold">
                  Rb.
                </Link>
                <div className="hidden sm:block">
                  <NavigationMenuDemo />
                </div>
                <div className="flex items-center space-x-2">
                  <ModeToggle />
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="sm:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <nav className="flex flex-col space-y-4">
                        <Link href="/" className="text-lg font-semibold">Home</Link>
                        <Link href="/projects" className="text-lg font-semibold">Projects</Link>
                        <Link href="/blog" className="text-lg font-semibold">Blog</Link>
                        <Link href="/contact" className="text-lg font-semibold">Contact</Link>
                        <Link href="/resume" className="text-lg font-semibold">Resume</Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
              {children}
            </main>
            <footer className="border-t bg-background/80 backdrop-blur-sm sticky bottom-0">
              <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-sm sm:text-base text-center sm:text-left">© {new Date().getFullYear()} Rahul Bhardwaj. All rights reserved.</p>
                <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
                  <Link href="https://www.linkedin.com/in/rahul-bhardwaj-314058225/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Linkedin size={20} className="inline mr-1" />
                    <span className="sr-only sm:not-sr-only sm:inline">LinkedIn</span>
                  </Link>
                  <Link href="https://www.github.com/RahulBenzeen" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github size={20} className="inline mr-1" />
                    <span className="sr-only sm:not-sr-only sm:inline">Github</span>
                  </Link>
                  <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Twitter size={20} className="inline mr-1" />
                    <span className="sr-only sm:not-sr-only sm:inline">Twitter</span>
                  </Link>
                  <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Youtube size={20} className="inline mr-1" />
                    <span className="sr-only sm:not-sr-only sm:inline">Youtube</span>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rahul Bhardwaj",
              "url": "https://rahulbhardwaj.tech",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://www.linkedin.com/in/rahul-bhardwaj-314058225/",
                "https://www.github.com/RahulBenzeen",
                // "https://www.twitter.com/rahulbhardwaj"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}