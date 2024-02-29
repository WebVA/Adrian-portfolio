import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { MapPin } from 'react-feather'

import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { Map } from '~/components/Map'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  )
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />
}

interface TableRowProps {
  href: string
  title: string
  date: string
  subtitle?: string
}

function TableRow({ href, title, subtitle, date }: TableRowProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-4 group"
    >
      <strong className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
        {title}
      </strong>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary">{subtitle}</span>}
      {date && (
        <span className="flex-none font-mono text-quaternary">{date}</span>
      )}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
      {...props}
    />
  )
}

const workHistory = [
  {
    href: 'https://www.linkedin.com/company/74477921/',
    title: 'WebVA LTD',
    subtitle: 'Self-employed - CTO, Lead Developer',
    date: '2022—present',
  },
  {
    href: 'https://tcg.world/',
    title: 'TCG World',
    subtitle: 'Senior Blockchain Developer',
    date: '2022—23',
  },
  {
    href: 'https://sonsofmars.io/',
    title: 'Sons Of Mars LTD',
    subtitle: 'Senior Full Stack Blockchain Developer',
    date: '2021—22',
  },
  {
    href: 'https://notebooktherapy.com/',
    title: 'NotebookTherapy LTD',
    subtitle: 'Full Stack Developer',
    date: '2017—20',
  },
  {
    href: 'https://lexarglobal.com/',
    title: 'Lexarglobal LTD',
    subtitle: 'Junior Web Developer',
    date: '2013—16',
  },
]

export function Intro() {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)

  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
        title="Home"
      />

      {/* Keep this div to trigger the magic scroll */}
      <div className="p-4" ref={titleRef} />

      <Detail.ContentContainer>
        <div className="pb-24 space-y-8 md:space-y-16">
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="prose text-primary">
                <p>
                  Hey, I&apos;m Adrian. I&apos;m a solutions architect,{' '}
                  <Link href="/writing" passHref>
                    blog writer
                  </Link>
                  ,{' '}
                  <Link href="/ama" passHref>
                    software tinkerer
                  </Link>
                  , and{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/webva"
                  >
                    software engineer
                  </a>
                  . I&apos;m building an app, currently it's a secret 🤫, that
                  introduces AI solutions to the blockchain space with Go and
                  React during my personal free time.
                </p>

                <p>
                  As an experienced Full Stack Developer with over 10 years of
                  expertise in multiple programming languages including Java/JS,
                  Angular, Vue, React, Node, Python, PHP, Ruby, Golang, .NET,
                  and C/C++/C#.
                </p>
                <p>
                  I have successfully led the development of Notebooktherapy, a
                  top-performing Shopify website ranked 9th in the world in
                  terms of revenue.
                </p>
                <p>
                  Throughout my career, I have also led and contributed to
                  several other successful projects, taking on various roles
                  including lead developer, DevOps, and project manager within
                  globally dispersed teams.
                </p>
                <p>
                  My technical proficiency is matched by my strong
                  problem-solving skills, excellent communication, and a
                  collaborative approach to work.
                </p>
                <p>
                  I am committed to delivering high-quality solutions, ensuring
                  adherence to industry best practices, and continuously
                  improving my skillset to stay up-to-date with the latest
                  technologies and trends.
                </p>
                <p>
                  I look forward to leveraging my expertise and experience to
                  contribute to your organization's success.
                </p>
                {/* 
                <p>
                  I have played several roles with some cutting-edge programming
                  technologies including{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://go.dev/"
                    className="!text-orange-500"
                  >
                    Go
                  </a>
                  ,{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://react.dev/"
                    className="!text-orange-500"
                  >
                    React
                  </a>
                  , and{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nodejs.org/"
                    className="!text-orange-500"
                  >
                    Node.js
                  </a>
                  .
                </p>

                <p>
                  I spent 3 years as a senior software engineer (Go, React and
                  Node.js) at{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://posit.co/"
                  >
                    RStudio (now Posit)
                  </a>{' '}
                  in Boston.
                </p>
                <p>
                  Before RStudio, I worked as a senior Go and React developer at{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.wunderkind.co/"
                  >
                    BounceX (now Wunderkind)
                  </a>{' '}
                  in NYC. BounceX is a data-driven marketing platform that helps
                  businesses acquire and retain customers.
                </p>
                <p>
                  Before BounceX, I was a remote Go and Node.js backend engineer
                  at{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/"
                  >
                    Google
                  </a>{' '}
                  for 2 years.
                </p>
                <p>
                  You'll most likely find myself relaxing watching TV shows 📺,
                  listening classical musics 🎶, playing pingpong 🏓, or walking
                  a park 🏞️ with a family of my dogs 🐶 whether alone or with my
                  family or my friends.
                </p> */}
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={'/linkedin'}
                  title={'LinkedIn'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'/github'}
                  title={'GitHub'}
                  subtitle={'Follow'}
                  date={''}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>My Location</SectionTitle>
            <SectionContent>
              <div style={{ height: '360px' }}>
                <Map lat={52.63422} lng={-1.13852} zoom={9} />
              </div>
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin size={12} />
                <span>Leicester, England</span>
              </p>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Work Experience</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {workHistory.map((job) => (
                  <TableRow
                    href={job.href}
                    title={job.title}
                    subtitle={job.subtitle}
                    date={job.date}
                    key={job.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
