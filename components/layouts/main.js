import Head from "next/head"
import Navbar from '../navbar.js'
import { Box, Container } from "@chakra-ui/react"
import Header from "../header"
import Footer from "../footer"

const Main = ({ children, router }) => {
    return (
        <Box as = "main">
            <Head>
                <meta name = "viewport" content = "width=device-width, initial-scale=1" />
                <title>Nicholas Kasman - Homepage</title>
            </Head>

            <Navbar path = {router.asPath} />
    
            <Container maxW = "container.lg" pt = {15}>
                <Header />
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main