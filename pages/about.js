import { Container, Heading, Box, Text, Image, Badge, IconButton, Link } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/article"
import { TriangleUpIcon } from "@chakra-ui/icons"
import NextLink from "next/link"

const About = () => {
    return (
        <Layout>
            <Container mt = "15%" id = "start">
                <Section>
                    <Heading variant = "section-title">
                        About
                    </Heading>
                    <Text>
                        Hi! I'm an electrical engineering student, biostatistics researcher,
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
                            <Box>
                                <Text fontSize = {18} display = "inline" fontWeight = "bold">Relevant Coursework: </Text>
                                Honors Engineering Computation, Intro to Program Design & Concepts,
                                Calculus I, Calculus II
                            </Box>
                        </Box>
                    </Box>
                    
                    <Text>
                        Some of my hobbies include lifting weights, chugging doubleshot coffees at hackathons,
                        and building cool software engineering and data science projects
                    </Text>

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