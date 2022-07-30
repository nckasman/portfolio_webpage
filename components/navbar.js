import Logo from "./logo"
import Toggle from "./toggle"
import NextLink from "next/link"
import {
    Container,
    Box,
    Spacer,
    Button,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react"
import DropdownMenu from "./dropdown-menu"
import theme from "../styles/theme"
import { motion } from "framer-motion"

const LinkItem = ({ href, children }) => {
    // const active = path === href (add path to object props when you use this)

    return (
        <NextLink href = {href} passHref>
            <Link
            p = {2}
            _hover = {{textDecoration: "none"}}
            >
                <Button variant = "custom">
                    {children}
                </Button>
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
        as = "nav"
        w = "100%"
        zIndex = {1}
        bg = {useColorModeValue(theme.colors.light, theme.colors.dark)}
        {...props}
        >
            <Container
            display = "flex"
            p = "2%"
            maxW = "container.xl"
            wrap = "wrap"
            align = "center"
            justify = "space-between"
            >
                <Flex align = "center" mr = {5}>
                    <Heading as = "h1" size = "lg">
                        <Logo />
                    </Heading>
                    <Toggle />
                </Flex>

                <Spacer />

                <Stack
                direction = {{base: 'column', md: 'row'}}
                display = {{base: 'none', md: 'flex'}}
                width = {{base: 'full', md: 'auto'}}
                alignItems = 'center'
                flexGrow =  {1}
                mt = {{base: 4, nmd: 0}}
                justifyContent = 'right'
                >   
                    <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
                        <LinkItem href = "/about/#start" path = {path}>about</LinkItem>
                    </motion.div>
                    <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
                        <LinkItem href = "/projects/#start" path = {path}>projects</LinkItem>
                    </motion.div>
                </Stack>

                <Box align = "right">
                    <Box ml = {2} display = {{base: 'inline-block', md: 'none'}}>
                       <DropdownMenu />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar