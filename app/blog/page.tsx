"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 13',
    description: 'Learn how to build modern web applications with Next.js 13 and its new App Router.',
    date: '2023-06-15',
    tags: ['Next.js', 'React', 'Web Development'],
    url: 'https://blog.coffeeinc.in/how-to-create-a-next-js-13-project-without-using-create-next-app-c73ba6849916'
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Advanced Techniques',
    description: 'Dive deep into TypeScript and learn advanced techniques to improve your code quality.',
    date: '2023-05-22',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    url: 'https://dev.to/cliff123tech/mastering-typescript-a-comprehensive-guide-part1-191k'
  },
  {
    id: 3,
    title: 'Building Scalable Microservices with Node.js',
    description: 'Explore the world of microservices and learn how to build scalable applications with Node.js.',
    date: '2023-04-10',
    tags: ['Node.js', 'Microservices', 'Backend'],
    url: 'https://medium.com/@amandubey_6607/building-scalable-microservices-with-node-js-frameworks-and-features-66abe283b255'
  },
  {
    id: 4,
    title: 'Optimizing React Performance',
    description: 'Learn techniques and best practices to optimize the performance of your React applications.',
    date: '2023-03-05',
    tags: ['React', 'Performance', 'Optimization'],
    url: 'https://www.freecodecamp.org/news/react-performance-optimization-techniques/'
  },
]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="mb-8 flex justify-center">
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        
        initial="hidden"
        animate="show"
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={post.url} target="_blank">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}