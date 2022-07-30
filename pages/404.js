import NextLink from "next/link"
import { Box, Heading, Text, Container, Divider, Button, Icon } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import { motion } from "framer-motion"
import { GrReturn } from "react-icons/gr"

const NotFound = () => {
    return (
        <Layout>
            <Container my = "10%">
                <Heading>Error 404 Page Not Found</Heading>
                <Text>This is not the page you&apos;re looking for...</Text>

                <Divider my = {6}/>

                <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
                    <Box my = {6} align = "center">
                        <NextLink href = "/">
                            <Button variant = "custom">
                                return <Icon ml = {1} w = {5} h = {5} as = {GrReturn} />
                            </Button>
                        </NextLink>
                    </Box>
                </motion.div>
            </Container>
        </Layout>
    )
}

export default NotFound