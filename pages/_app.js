import { ChakraProvider } from "@chakra-ui/react"
import Main from "../components/layouts/main"
import theme from "../styles/theme"
import { AnimatePresence } from "framer-motion"

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme = {theme}>
            <Main router = {router}>
                <AnimatePresence exitBeforeEnter initial = {true}>
                    <Component {...pageProps} key = {router.route}/>
                </AnimatePresence>
            </Main>
        </ChakraProvider>
    )
}

export default Website