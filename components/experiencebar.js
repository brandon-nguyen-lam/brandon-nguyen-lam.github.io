import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'

const ExperienceBar = () => {
  return (
    <Box>
      <VerticalTimeline
        lineColor="#5F967C"
        layout={'1-column-left'}
        animate={true}
      >
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#5F967C', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
            date="May 2024 - August 2024"
            iconStyle={{
              background: '#fff',
              color: '#fff',
              width: '48px',
              height: '48px'
            }}
            icon={
              <Box>
                <Image
                    padding="1px"
                    paddingLeft="1px"
                    background="white"
                    borderRadius="50%"
                    src={'images/meta.jpeg'}
                />
              </Box>
            }
        >
          <Heading as="h3" size="md" mb={2}>
            Meta
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            Software Engineer Intern
          </Heading>
          <Text>
            😎 My mom uses Facebook a lot so I had to get this offer for her
          </Text>
          <Text>
            I don't know my team yet
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#5F967C', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
            date="January 2024 - April 2024"
            iconStyle={{
              background: '#fff',
              color: '#fff',
              width: '48px',
              height: '48px'
            }}
            icon={
              <Box>
                <Image
                    padding="1px"
                    paddingLeft="1px"
                    background="white"
                    borderRadius="50%"
                    src={'images/tesla.jpeg'}
                />
              </Box>
            }
        >
          <Heading as="h3" size="md" mb={2}>
            Tesla
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            Software Engineer Intern
          </Heading>
          <Text>
            🚗 Applications Engineering
          </Text>
          <Text>
            Gonna do cool stuff in C#
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5F967C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
          date="June 2023 - August 2023"
          iconStyle={{
            background: '#fff',
            color: '#fff',
            width: '48px',
            height: '48px'
          }}
          icon={
            <Box>
              <Image
                padding="1px"
                paddingLeft="1px"
                background="white"
                borderRadius="50%"
                src={'images/nasa.jpeg'}
              />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            NASA
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            Software Engineer Intern
          </Heading>
          <Text>
            🚀 Inventory Management Program for the ISS
          </Text>
          <Text>
            I helped develop NASA's Inventory Management Program.
            This site helped manage the inventory of the International Space Station.
            I also mentored two high school students (Shoutout to Trinity and Alaina)
            to redesign the frontend of the site.
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5F967C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5F967C' }}
          date="January 2023 - June 2023"
          iconStyle={{
            background: '#5F967C',
            color: '#fff',
            width: '48px',
            height: '48px'
          }}
          icon={
            <Box>
              <Image borderRadius="50%" src={'images/uhg.jpeg'} />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            UnitedHealth Group
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            Software Engineer Intern
          </Heading>
          <Text>
            🤖 Member Portal and Chatbot
          </Text>
          <Text>
            I helped in developing and fine-tuning a chatbot utilizing AI to
            help customers with information related to their HSA account that
            was used by over 1,000 users daily. I also moved some boxes around
            on the frontend to make the site prettier.
          </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  )
}

export default ExperienceBar
