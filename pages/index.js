import {
  Container,
  Box,
  Heading,
  Image,
  ListItem,
  List,
  Button,
  Link,
} from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from "../components/layouts/article";
import {IoLogoGithub, IoMail, IoLogoLinkedin, IoDocumentText, IoCall} from 'react-icons/io5'
import ExperienceBar from '../components/experiencebar'

const Page = () => {
  return (
    <Layout>
    <Container bg="white"
    paddingTop="15px">
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading
              as="h2"
              variant="page-title"
              color={"black"}
              textDecoration={"underline"}
              textUnderlineOffset={"4px"}
              textDecorationColor={"#5F967C"}
              textDecorationThickness={"4px"}
          >
            Brandon Lam
          </Heading>
          <Box color={"black"}>Aspiring Software Engineer. Currently a Junior at the University of Minnesota - Twin Cities
            double majoring in Computer Science and Data Science.</Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base:4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
          paddingTop={"10px"}
          >
          <Image
            src={"images/blamPhoto.png"}
            borderColor="black"
            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            maxWidth="119px"
            display="inline-block"
            alt={"Brandon Lam"}
            />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" color={"black"}>
          About Me
        </Heading>
        <Paragraph>
          Growing up, I always knew that engineering was my passion,
          so I participated in a variety of extracurriculars like
          Robotics, Science Olympiad, Model Rocketry, and volunteering at
          the Science Museum of Minnesota. After taking my first CS class,
          I fell in love with it and that's led me to where I am today.
          Outside of school, I enjoy playing strategy games like TFT and
          Hearthstone, where I've been top 100 in North America for both games.

        </Paragraph>
        </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" color={"black"}>
          Work Experience
        </Heading>
        <ExperienceBar/>
      </Section>
      <Box>
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title" color={"black"}>
        Contact
      </Heading>
      <List>
        <ListItem>
          <Link href="https://github.com/brandon-nguyen-lam" target="_blank" _hover={{textDecoration: "none"}}>
            <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoGithub/>}
            >
              brandon-nguyen-lam
            </Button>
            </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.linkedin.com/in/brandon-nguyen-lam/" target="_blank" _hover={{textDecoration: "none"}}>
                <Button
                    variant="ghost"
                    colorScheme="green"
                    leftIcon={<IoLogoLinkedin/>}
                >
                    brandon-nguyen-lam
                </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="mailto:brandonnguyenlam@gmail.com" target="_blank" _hover={{textDecoration: "none"}}>
                <Button
                    variant="ghost"
                    colorScheme="green"
                    leftIcon={<IoMail/>}
                >
                    brandonnguyenlam@gmail.com
                </Button>
          </Link>
        </ListItem>
          <ListItem>
            <Link href="tel:+16128608208" target="_blank" _hover={{textDecoration: "none"}}>
              <Button
                  variant="ghost"
                  colorScheme="green"
                  leftIcon={<IoCall/>}
              >
                  (612)-860-8208
              </Button>
            </Link>
          </ListItem>
        <ListItem>
          <Link href="https://drive.google.com/file/d/1A6jiZotU6p0mUwXf1SZb_kcmsmSKAk5e/view" target="_blank" _hover={{textDecoration: "none"}}>
            <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoDocumentText />}
            >
              Resume
            </Button>
          </Link>
        </ListItem>
        </List>

    </Section>
        </Box>
    </Container>
      </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
