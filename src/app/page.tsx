'use client'
import { Button } from '@/components/button/Button'
import Card from '@/components/card/Card'
import Icon from '@/components/icon/Icon'
import ScrollOver from '@/components/scroll-over/ScrollOver'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-[4.0625rem] bg-b1 flex flex-col grow">

      <div className='flex space-x-4 justify-center p-12 px-[15%]'>
        <div className='border-r border-solid border-border1'>

          <div className='text-9xl py-1 px-24'>J</div>
          {/* <div className='border-r border-solid border-border1'></div> */}
        </div>
        <div className='flex'>

          <div className='flex flex-col my-auto px-8'>

            <div className='text-2xl py-5'>Jaagup Tomingas</div>

            {/* Current occupation */}
            <div className='flex space-x-2'>
              <div className='flex space-x-2 border-t border-solid border-border1  py-5'>
                <div>Icon</div>
                <div>Web developer</div>
              </div>
              <div className=' py-5 mt-[0.0625rem]'>MindSee OÜ</div>
            </div>
            <div className=' py-5'>
              I am an positive, ambitious and cheerful individual who would love to work for you!
            </div>

          </div>
          <div className='text-icon1 justify-center flex flex-col'>

            <form action="mailto:jaagup.tomingas@gmail.com" method="GET" className='h-6'>
              <Button intent="icon">
                <Icon name='envelope' />
              </Button>
            </form>
            <Button onClick={() => window.open('https://github.com/Zav141DJacob')} intent="icon">
              <Icon name='github' />
            </Button>
            <Button onClick={() => window.open('https://www.linkedin.com/in/jaagup-tomingas-460aa9224/')} intent="icon">
                <Icon name='linkedin' />
            </Button>
          </div>
        </div>
      </div>
      <ScrollOver>
        <div className='text-3xl font-semibold'>
          Experience
        </div>
        <div>
          <Card>
            <div className=''>
              Student
            </div>
            <div className='flex justify-between'>
              <div className='flex space-x-2'>
                <div>
                  school name
                </div>
                <div>
                  dot
                </div>
                <div>
                  City location
                </div>
              </div>
              <div>
                time
              </div>
            </div>
            <div className=''>
              certificate, degree
            </div>
          </Card>
        </div>
      </ScrollOver>
    </main>
  )
}
