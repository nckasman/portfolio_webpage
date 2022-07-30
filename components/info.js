import { Drawer, DrawerOverlay, DrawerContent, Button, Box, useDisclosure, useColorModeValue, Link, Text, DrawerCloseButton } from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"
import React from "react"
import theme from "../styles/theme"
import { motion } from "framer-motion"

const Info = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box>
            <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
                <Button ref = {btnRef} variant = 'custom' onClick = {onOpen}><InfoIcon /></Button>
            </motion.div>
            <Drawer placement = "bottom" isOpen = {isOpen} onClose = {onClose} finalFocusRef = {btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box
                    p = "2%"
                    color = {useColorModeValue(theme.colors.dark, theme.colors.light)}
                    bg = {useColorModeValue(theme.colors.light_active, theme.colors.dark_active)}
                    align = "center"
                    >
                        <Text pb = "1%">this website was made with <b><i>next.js</i></b>, <b><i>chakra-ui</i></b>, <b><i>framer-motion</i></b>, & <i><b>bun</b></i></Text>
                        <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
                            <Link target = "_blank" rel = "noopener noreferrer" href = "https://github.com/nckasman">
                                <Button variant = 'custom' fontSize = "sm" height = {7} p = {3}>
                                    view source code
                                </Button>
                            </Link>
                        </motion.div>
                    </Box>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Info