'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce platform built with microservices architecture.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Next.js', 'Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
    category: 'web',
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'A real-time analytics dashboard for monitoring system performance.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Vue.js', 'WebSockets', 'Node.js', 'InfluxDB', 'Grafana'],
    category: 'web',
  },

  {
    id: 6,
    title: 'Video chat app',
    description: 'A cross-platform video chat application designed for seamless communication across iOS and Android devices, featuring real-time video and messaging.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React Native', 'WebRTC', 'Firebase', 'Node.js'],
    category: 'mobile',
  },
  {
    id: 7,
    title: 'Browser-based IDE',
    description: 'A web-based integrated development environment (IDE) supporting coding, terminal usage, file management, and collaboration tools, optimized for web development.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'Node.js', 'Monaco Editor', 'Docker'],
    category: 'devops',
  },
  {
    id: 8,
    title: 'PDF Viewer',
    description: 'A PDF viewer with editing capabilities, built for displaying and interacting with PDF files directly in the browser.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'PDF.js', 'Node.js'],
    category: 'tools',
  },
];


export default function ProjectList() {
  const searchParams = useSearchParams()
  const [category, setCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const initialCategory = searchParams.get('category') || 'all'
    setCategory(initialCategory)
  }, [searchParams])

  const filteredProjects = projects.filter(project => 
    (category === 'all' || project.category === category) &&
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  )

  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {['all'].map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Button>
          ))}
        </div>
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
      </div>
      <AnimatePresence>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  )
}