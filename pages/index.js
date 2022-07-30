import { Container, Box, Button, Show, Link, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Socials from "../components/socials"
import { motion } from "framer-motion"
import theme from "../styles/theme"
import NextLink from "next/link"
import Section from "../components/section"

const Page = () => {
    return (
        <Layout>
            <Container mt = "4%">
                <Section delay = {0.1}>
                    <Box display = {{md: 'flex'}}>
                        <Socials />
                    </Box>
                </Section>

                <Section delay = {0.2}>
                    <Show below = "md">
                        <Box mt = "8%" display = {{md: "flex"}} align = "center">
                            <motion.div whileHover = {{scale: 1.05}} whileTap = {{scale: 0.95}}>
                                <NextLink href = "/about/#start" passHref>
                                    <Button as = {Link} variant = "custom" width = "100%" bg = {useColorModeValue(theme.colors.light_hover, theme.colors.dark_hover)}>about</Button>
                                </NextLink>
                            </motion.div>
                            <motion.div whileHover = {{scale: 1.05}} whileTap = {{scale: 0.95}}>
                                <NextLink href = "/projects/#start" passHref>
                                    <Button mt = "2%" as = {Link} variant = "custom" width = "100%" bg = {useColorModeValue(theme.colors.light_hover, theme.colors.dark_hover)}>projects</Button>
                                </NextLink>
                            </motion.div>
                        </Box>
                    </Show>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page