import Link from 'next/link'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { NavigationMenuDemo } from "@/components/navigation-menu"
import { Linkedin, Github, Twitter, Youtube   } from 'lucide-react';
import './globals.css'
import InteractiveBackground from '@/components/ThreeBackground'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <InteractiveBackground/>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-10 border-b bg-background">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                  Rb.
                </Link>
                <NavigationMenuDemo />
                <ModeToggle />
              </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="sticky bottom-0 z-10 border-t bg-background">
              <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <p>© 2024 Rahul Bhardwaj. All rights reserved.</p>
                <div className="flex space-x-4">
                  <Link href="https://www.linkedin.com" target="_blank" className="hover:underline">
                    {/* <Linkedin size={24} className="hover:text-blue-500" /> */}
                    LinkedIn
                  </Link>
                  <Link href="https://www.github.com" target="_blank" className="hover:underline">
                    {/* <Github size={24} className="hover:text-gray-700" /> */}
                    Github
                  </Link>
                  <Link href="https://www.twitter.com" target="_blank" className="hover:underline">
                    {/* <Twitter size={24} className="hover:text-blue-400" /> */}
                    Twitter
                  </Link>
                  <Link href="https://www.youtube.com" target="_blank" className="hover:underline">
                    {/* <Youtube  size={24} className="hover:text-red-400" /> */}
                    Youtube
                  </Link>
                </div>
              </div>
            </footer>
          </div>
          {/* <Toaster /> */}           
        </ThemeProvider>
      </body>
    </html>
  )
}