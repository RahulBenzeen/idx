import { Suspense } from 'react'
import ProjectList from './ProjectLIst'

export default function Projects() {
  console.log("i am called from projects!")
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectList />
      </Suspense>
    </div>
  )
}