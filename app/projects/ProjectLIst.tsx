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
    id: 2,
    title: 'AI-Powered Task Manager',
    description: 'A task management app with AI-driven prioritization and scheduling.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    category: 'ml',
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
    id: 4,
    title: 'Cross-Platform Mobile App',
    description: 'A cross-platform mobile app for tracking fitness and nutrition.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React Native', 'Redux', 'Firebase', 'HealthKit', 'Google Fit'],
    category: 'mobile',
  },
  {
    id: 5,
    title: 'CI/CD Pipeline Automation',
    description: 'Automated CI/CD pipeline for streamlining software delivery.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Jenkins', 'Docker', 'Ansible', 'Terraform', 'AWS'],
    category: 'devops',
  },
  {
    id: 6,
    title: '3D Visualization Tool',
    description: 'A web-based 3D visualization tool for architectural designs.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Three.js', 'WebGL', 'React', 'Node.js', 'MongoDB'],
    category: 'web',
  },
]

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
          {['all', 'web', 'mobile', 'devops', 'ml'].map((cat) => (
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