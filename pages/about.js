import { Container, Heading, Box, Text, Image, Badge, IconButton, Link, HStack } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/article"
import { TriangleUpIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { motion } from "framer-motion"

const About = () => {
    return (
        <Layout>
            <Container mt = "15%" id = "start">
                <Section>
                    <Heading variant = "section-title">
                        About
                    </Heading>
                    <Text>
                        Hi! I&apos;m an electrical engineering student, biostatistics researcher,
                        and software engineer attending <Badge variant = "am">Texas A&M University</Badge>
                    </Text>

                    <Box
                    mt = {8}
                    mb = {10}
                    flexGrow = {1}
                    display = {{base: "block", md: "flex"}}
                    >
                        <Box>
                            <Image
                            src = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5817.png"
                            width = {{base: "40%", md: "100%"}}
                            //height = {{base: "40%", md: "100%"}}
                            />
                        </Box>
                        <Box ml = {2} lineHeight = 'taller'>
                            <Text fontSize = {22} fontWeight = "bold">Texas A&M University</Text>
                            <Text fontSize = {20} fontWeight = "bold">Class of 2025</Text>
                            <Box mt = {2}>
                                <Text fontSize = {18} display = "inline" fontWeight = "bold">Degree: </Text>
                                B.S. Electrical Engineering
                            </Box>
                            <Box mt = {2}>
                                <Text fontSize = {18} display = "inline" fontWeight = "bold">Minors: </Text>
                                Computer Science, Mathematics
                            </Box>
                            <Box>
                                <Text fontSize = {18} display = "inline" fontWeight = "bold">Relevant Coursework: </Text>
                                Data Structures & Algorithms, Discrete Structures for Computing,
                                Object-Oriented Programming, Programming Languages, Computer Organization & Design
                            </Box>
                        </Box>
                    </Box>
                    
                    <Text>
                        Some of my hobbies include lifting weights, chugging doubleshot coffees at hackathons,
                        and building cool software engineering and data science projects
                    </Text>

                    <HStack mt = {5}>
                        <motion.div whileHover = {{scale: 1.05}} whileTap = {{scale: 0.95}}><NextLink href = "/projects" passHref><Link as = {Text} fontWeight = "bold">Click here</Link></NextLink></motion.div> 
                        <Text>to view my portfolio!</Text>
                    </HStack>

                    <Box align = "right" mt = "10%">
                        <NextLink href = "#top" passHref>
                            <Link>
                                <IconButton variant = "custom" icon = {<TriangleUpIcon />} />
                            </Link>
                        </NextLink>
                    </Box>
                </Section> 
            </Container>
        </Layout>
    )
}

export default About