"use client"

import { FC, useRef } from 'react'
import { Download, Globe, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
    github: string;
    linkedin: string;
  };
  experience: {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
  }[];
  projects: {
    name: string;
    technologies: string;
    date: string;
    description: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string;
  }[];
  skills: string[];
  achievements: { description: string; year: string }[];
  participation: { description: string; year: string }[];
  certifications: string[];
}

const resumeData: ResumeData = {
  name: "RAHUL BHARDWAJ",
  title: "FULLSTACK DEVELOPER",
  contact: {
    email: "rahul018987@gmail.com",
    phone: "(+91) 8454983083",
    location: "UP, India",
    website: "Website",
    github: "rahul-bhardwaj",
    linkedin: "rahul-bhardwaj"
  },
  experience: [
    {
      title: "Node.js Backend Developer",
      company: "BENZEEN AUTO PARTS",
      period: "Oct 2020 - Dec 2022",
      responsibilities: [
        "Worked on the admin panel backend and a gaming application. I gained knowledge of Web Socket, Payment Gateway Integration, and gaming laws through this experience.",
        "Developed new and maintained existing applications. We primarily used PERN and MERN Stack",
        "Train, manage, and provide guidance to junior software development staff."
      ]
    }
  ],
  projects: [
    {
      name: "E-Commerce Website",
      technologies: "HTML5, CSS3, Node.Js, MongoDB, Twilio",
      date: "February 2023",
      description: [
        "This website is designed to boost the productivity and efficiency of engineers.",
        "This platform enables users to practice augmented reality meditation, play stress-buster games, track task completion, and engage in motivational exercises to cope with stress and anxiety at work."
      ]
    },
    {
      name: "Web Based IDE",
      technologies: "React.js, Node.js, MongoDB Atlas, Twilio",
      date: "December 2022",
      description: [
        "Split your bills with your friends without any hassle.",
        "Manage Group Expenses, Track your expenses, and much more."
      ]
    },
    {
      name: "Video Chat App",
      technologies: "HTML5, CSS3, Python, Spotify API",
      date: "November 2022",
      description: [
        "An app that plays music according to your mood.",
        "Created a playlist management UI and used Spotify API to control players based on mood detection using the ML model."
      ]
    },
    {
      name: "PDF Viewer",
      technologies: "Flutter, Node.Js, MongoDB, Twilio, Hedera, IPFS (Filecoin), Redis",
      date: "September 2022",
      description: [
        "An app for helping people have a healthy life.",
        "Yog4Life Has a feed feature that helps to get information from the folks, Yog4Life has an anonymous chatroom to get connected with the world."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Gateway Insitute of Engineering and Technology (DCRUST)",
      period: "2018 - 2022",
      details: "Learning the core and fundamentals of software engineering."
    },
    {
      degree: "Secondary Education",
      institution: "Gyanpeethika Sr. Sec. School",
      period: "2018 - 2021",
      details: "71.2%"
    }
  ],
  skills: ["Node.js", "Express.js","Angular", "Graphql","Next js", "React.js", "MongoDB","Docker", "Git", "HTML / CSS"],
  achievements: [
    { description: "1st Place in a Hackathon showcasing innovative web solutions", year: "2023" },
    { description: "4 Hackathons won, focusing on collaborative problem-solving", year: "2022" },
    { description: "Mentored students as a Cross Winter Of Code Mentor, fostering skills in web development", year: "2021" },

  ],
  
  participation: [
    { description: "Google Crowdsource Influencer", year: "2020" },
    { description: "Google Local Guides", year: "2018" },
    { description: "Environmentalist Foundation of India (E.F.I)", year: "2017" }
  ],
  certifications: ["MongoDB Atlas Security", "MongoDB Basics"]
};

export default function Component() {
  const resumeRef = useRef<HTMLDivElement>(null)

  // const handleDownload = async () => {
  //   if (resumeRef.current) {
  //     const canvas = await html2canvas(resumeRef.current, {
  //       scale: 2,
  //       useCORS: true,
  //       logging: false,
  //     })
  //     const imgData = canvas.toDataURL('image/png')
  //     const pdf = new jsPDF({
  //       format: 'a4',
  //       unit: 'mm'
  //     })
  //     const pdfWidth = pdf.internal.pageSize.getWidth()
  //     const pdfHeight = pdf.internal.pageSize.getHeight()
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  //     pdf.save('rahul_bhardwaj.pdf')
  //   }
  // }

  const handleDownload = async () => {
    if (resumeRef.current) {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 3, // Increased scale for better resolution
        useCORS: true,
        logging: false,
        backgroundColor: null, // Ensures the background is not distorted
      });
      const imgData = canvas.toDataURL('image/png');
  
      // Create a new jsPDF instance
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        hotfixes: [] // Add hotfixes for better handling
      });
  
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
  
      // Calculate image dimensions to maintain aspect ratio
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const newWidth = imgWidth * ratio;
      const newHeight = imgHeight * ratio;
  
      // Add image to PDF with proper dimensions
      pdf.addImage(imgData, 'PNG', 0, 0, newWidth, newHeight);
      pdf.save('rahul_bhardwaj.pdf');
    }
  };
  

  return (
    <div className="w-[210mm] min-h-[297mm] mx-auto bg-white text-black font-sans p-8 text-sm relative">
      <button
        onClick={handleDownload}
        className="absolute top-4 right-4 flex items-center bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
      >
        <Download className="w-4 h-4 mr-1" />
        Download PDF
      </button>
      <div ref={resumeRef} className="w-full">
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-1">{resumeData.name}</h1>
          <h2 className="text-xl font-bold text-blue-900 mb-2">{resumeData.title}</h2>
          <div className="flex flex-wrap text-xs space-x-4">
            <span className="flex items-center"><Mail className="w-4 h-4 mr-1" />{resumeData.contact.email}</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-1" />{resumeData.contact.phone}</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{resumeData.contact.location}</span>
            <span className="flex items-center"><Globe className="w-4 h-4 mr-1" />{resumeData.contact.website}</span>
            <span className="flex items-center"><Github className="w-4 h-4 mr-1" />{resumeData.contact.github}</span>
            <span className="flex items-center"><Linkedin className="w-4 h-4 mr-1" />{resumeData.contact.linkedin}</span>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <section className="mb-6">
              <h3 className="text-lg font-bold text-blue-900 border-b border-blue-900 pb-1 mb-3">EXPERIENCE</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-3">
                  <h4 className="font-bold">{exp.title}</h4>
                  <p className="text-blue-900">{exp.company}</p>
                  <p className="text-xs mb-2">{exp.period}</p>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-bold text-blue-900 border-b border-blue-900 pb-1 mb-3">PROJECTS</h3>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-bold">{project.name}</h4>
                  <p className="text-blue-900 text-xs">{project.technologies}</p>
                  <p className="text-xs mb-1">{project.date}</p>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    {project.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          <div>
            <section className="mb-6">
              <h3 className="text-lg font-bold text-blue-900 border-b border-blue-900 pb-1 mb-3">EDUCATION</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <h4 className="font-bold">{edu.degree}</h4>
                  <p className="text-blue-900">{edu.institution}</p>
                  <p className="text-xs">{edu.period}</p>
                  <p className="text-xs">{edu.details}</p>
                </div>
              ))}
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-bold text-blue-900 border-b border-blue-900 pb-1 mb-3">SKILLS</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded">{skill}</span>
                ))}
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-bold text-blue-900 border-b border-blue-900 pb-1 mb-3">ACHIEVEMENTS</h3>
              <ul className="list-disc pl-5 text-xs space-y-1">
                {resumeData.achievements.map((achievement, index) => (
                  <li key={index}>
                    {achievement.description} <span className="float-right">{achievement.year}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-bold text-blue-900 border-b border-blue-900 pb-1 mb-3">PARTICIPATION</h3>
              <ul className="list-disc pl-5 text-xs space-y-1">
                {resumeData.participation.map((participation, index) => (
                  <li key={index}>
                    {participation.description} <span className="float-right">{participation.year}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-blue-900 border-b border-blue-900 pb-1 mb-3">CERTIFICATION</h3>
              <ul className="list-disc pl-5 text-xs space-y-1">
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