"use client"

import Image from 'next/image'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, Code, Server, Book, Download } from "lucide-react"
import Link from 'next/link'
import { useState } from 'react'
import image from '../public/image/image.png'
import './globals.css'

export default function Component() {
  const [isDownloading, setIsDownloading] = useState(false);

  const skills = [
    { name: 'Angular', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Next.js', level: 'Beginner' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'GraphQL', level: 'Advanced' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Github', level: 'Advanced' },
    { name: 'CI/CD', level: 'Advanced' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isDownloading) return
  
    setIsDownloading(true)
  
    try {
      const response = await fetch('/document/resume.pdf')
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
  
      const contentType = response.headers.get('Content-Type')
      if (contentType !== 'application/pdf') {
        throw new Error('File is not a PDF')
      }
  
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
  
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'resume.pdf')
      document.body.appendChild(link)
      link.click()
  
      link.parentNode?.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }
  
  return (
    <motion.div
      className="flex flex-col items-center px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">Rahul Bhardwaj</h1>
        <h2 className="text-xl sm:text-2xl mb-4">Full Stack Developer</h2>
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6" > 
          <Image
            src={image}
            alt="Rahul"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
          With over 3 years of experience in web development, I specialize in building scalable,
          high-performance applications using cutting-edge technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            size="lg"
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Download CV
              </>
            )}
          </Button>

          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href='/projects'> View Projects</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl"
        variants={containerVariants}
      >
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center text-center">
                      <Badge variant="outline" className="mb-2">{skill.level}</Badge>
                      <span className="text-sm sm:text-base">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">Frontend Developer At Benzeenautoparts.com</h3>
                    <p className="text-sm text-muted-foreground">07/04/2022 - Present</p>
                    <p className="text-sm sm:text-base">Development of products for the company, like insight dashboard, customer management tool</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">Bachelor in Computer Science</h3>
                    <p className="text-sm text-muted-foreground">Gateway Institute of Engineering and Technology (DCRUST), 2022</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex items-center">
                    <Book className="mr-2 flex-shrink-0" /> Completed online course in Full-Stack Development
                  </li>
                  <li className="flex items-center">
                    <Code className="mr-2 flex-shrink-0" /> Built and deployed an Ecommerce website using React
                  </li>
                  <li className="flex items-center">
                    <Terminal className="mr-2 flex-shrink-0" /> Self-taught in backend development with Node.js and Express
                  </li>
                  <li className="flex items-center">
                    <Server className="mr-2 flex-shrink-0" /> Set up a cloud-hosted database for a personal project
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}