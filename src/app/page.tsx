"use client"

import { Button } from '@/components/button/Button'
import Card from '@/components/card/Card'
import Icon from '@/components/icon/Icon'
import ResumeSection from '@/components/resume-section/ResumeSection'
import Image from 'next/image'
import { Resume } from '@/models/Resume'
import EmploymentCard from '@/components/card/employment/EmploymentCard'
import EducationCard from '@/components/card/education/EducationCard'
import CourseCard from '@/components/card/course/CourseCard'
import ProjectCard from '@/components/card/project/ProjectCard'
import ResumeList from '@/components/resume-section/list/ResumeList'
import HackathonCard from '@/components/card/hackathon/HackathonCard'

const getData = () => require("../resume.json")
export default function Home() {
  const data: Resume = getData();

  return (
    <main className="pt-[4.0625rem] bg-b1 flex flex-col grow">

      <div className='flex space-x-4 justify-center py-12 px-[15%] bg-bg1 max-h-80'>
        
        {/* J */}
        <div className='border-r border-solid border-border1 flex flex-col justify-center px-6'>
          <div className='text-9xl rounded-full w-36 h-36 text-center flex flex-col justify-center'>{data.name.at(0)}</div>
        </div>
        <div className='flex'>
          <article className='flex flex-col my-auto px-8'>

            {/* Name */}
            <h1 className='text-2xl py-5'>{data.name}</h1>

            {/* Current position/titles */}
            <div className='flex space-x-2'>
              <div className='flex space-x-2 border-t border-solid border-border1  py-5'>
                <div className='w-6 h-6 hover:animate-spin-fast'><Icon name='user'></Icon></div>
                <p>{data.titles.join(', ')}</p>
              </div>
            </div>

            {/* Programming skills */}
            <p className='py-5'>
              <span className='font-bold'>Skills: </span>
              {data.skills.join(', ')}
            </p>
          </article>

          <div className='text-icon1 justify-center flex flex-col gap-1'>
            <form title={data.contact.email} action={`mailto:${data.contact.email}`} method="GET" className='h-6'>
              <Button intent="clickable" size="icon">
                <Icon name='envelope' />
              </Button>
            </form>
            {data.contact.links.map((link) => {
              return (
                <Button key={link.name} onClick={() => window.open(link.url)} intent="clickable" size="icon">
                  <Icon name={link.name.toLowerCase()} />
                </Button>
              )
            })}
          </div>
        </div>
      </div>
      <ResumeSection>
        <ResumeList title='Employment History'>
          {data.employment.map(((employment, index) => {
            return (
              <EmploymentCard key={index} employment={employment} />
            )
          }))}
        </ResumeList>
        <ResumeList title='Education'>
          {data.education.map(((education, index) => {
            return (
              <EducationCard key={index} education={education} />
            )
          }))}
        </ResumeList>
        <ResumeList title='Courses'>
          {data.courses.map(((course, index) => {
            return (
              <CourseCard key={index} course={course} />
            )
          }))}
        </ResumeList>
        <ResumeList title='Projects'>
          {data.projects.map(((project, index) => {
            return (
              <ProjectCard key={index} project={project} />
            )
          }))}
        </ResumeList>
        <ResumeList title='Hackathons'>
          {data.hackathons.map(((hackathon, index) => {
            return (
              <HackathonCard key={index} hackathon={hackathon} />
            )
          }))}
        </ResumeList>
      </ResumeSection>
    </main>
  )
}
