"use client"

import { useRef } from 'react'
import { Globe, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'


const resumeData = {
  name: "RAHUL BHARDWAJ",
  title: "FULLSTACK DEVELOPER",
  contact: {
    email: "rahul018987@gmail.com",
    phone: "(+91) 8454983083",
    location: "UP, India",
    website: "rahulbhardwaj.com",
    github: "github.com/rahul-bhardwaj",
    linkedin: "linkedin.com/in/rahul-bhardwaj"
  },
  experience: [
    {
      title: "Angular Developer",
      company: "BENZEEN AUTO PARTS",
      period: "March 2022 - Present",
      responsibilities: [
        "Developed websites using Node.js and Handlebars, and built dynamic applications with Angular.",
        "Managed website performance, security, and deployment while troubleshooting issues.",
        "Integrated APIs, optimized web performance, and ensured responsive, cross-browser compatibility.",
        "Provide guidance to junior software development staff."
      ]
    }
  ],
  projects: [
    {
      name: "Ecommerce website",
      technologies: "HTML5, CSS3, Node.Js, MongoDB, Twilio",
      date: "February 2023",
      description: [
        "Built a full-featured e-commerce platform with user authentication, product management, and secure payment integration.",
        "Implemented shopping cart, wishlist, product search, and filtering features with a dynamic, responsive front-end using React.",
        "Used Node.js and Express for backend APIs, integrating JWT for secure user sessions and MongoDB for database management."
      ]
    },
    {
      name: "Browser Based IDE",
      technologies: "React.js, Node.js, MongoDB Atlas, Twilio",
      date: "February 2024",
      description: [
        "Created an in-browser IDE for HTML, CSS, and JavaScript with real-time preview.",
        "Used Node.js for backend and React for a responsive interface.",
        "Added project saving, sharing, and live editing features to boost productivity."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Gateway Institute of Engineering and Technology (DCRUST)",
      period: "2021 - 2022",
      details: "Learning the core and fundamentals of software engineering."
    },
    {
      degree: "Secondary Education",
      institution: "Gyanpeethika Sr. Sec. School, BALLIA",
      period: "2015 - 2017",
      details: "Secured 71.2%"
    }
  ],
  skills: [
    "HTML", "CSS", "Javascript", "Node.js", "React", "Angular", "MongoDB", "Github", "Docker", "Redux", "GraphQL"
  ],
  certifications: ["MongoDB Atlas Security", "MongoDB"]
}

export default function Component() {
  const resumeRef = useRef<HTMLDivElement>(null)


  return (
    <div className="w-full max-w-[210mm] mx-auto bg-white text-gray-800 font-sans p-8 text-sm relative shadow-2xl">

      <div ref={resumeRef} className="w-full">
        <header className="mb-8 border-b-2 border-gray-300 pb-4">
          <h1 className="text-4xl font-bold mb-1 text-gray-900">{resumeData.name}</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{resumeData.title}</h2>
          <div className="flex flex-wrap text-sm space-x-4">
            <span className="flex items-center"><Mail className="w-4 h-4 mr-1 text-gray-600" />{resumeData.contact.email}</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-1 text-gray-600" />{resumeData.contact.phone}</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-gray-600" />{resumeData.contact.location}</span>
            <span className="flex items-center"><Globe className="w-4 h-4 mr-1 text-gray-600" />{resumeData.contact.website}</span>
            <span className="flex items-center"><Github className="w-4 h-4 mr-1 text-gray-600" />{resumeData.contact.github}</span>
            <span className="flex items-center"><Linkedin className="w-4 h-4 mr-1 text-gray-600" />{resumeData.contact.linkedin}</span>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">EXPERIENCE</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-bold text-lg text-gray-800">{exp.title}</h4>
                  <p className="text-gray-700 font-semibold">{exp.company}</p>
                  <p className="text-gray-600 mb-2">{exp.period}</p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">PROJECTS</h3>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-bold text-lg text-gray-800">{project.name}</h4>
                  <p className="text-gray-700 text-sm mb-1">{project.technologies}</p>
                  <p className="text-gray-600 text-sm mb-2">{project.date}</p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                    {project.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          <div>
            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">EDUCATION</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.period}</p>
                  <p className="text-gray-600 text-sm">{edu.details}</p>
                </div>
              ))}
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">CERTIFICATIONS</h3>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}