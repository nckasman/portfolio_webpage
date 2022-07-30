import { AnimatePresence, motion } from "framer-motion"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const Toggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial = {false}>
            <motion.div
            style = {{display: 'inline-block'}}
            key = {useColorModeValue('light', 'dark')}
            initial = {{y: 20, opacity: 0}}
            animate = {{y: 0, opacity: 1}}
            exit = {{y: 20, opacity: 0}}
            transition = {{duration: 0.25}}
            >
                <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
                    <IconButton
                    variant = "custom"
                    onClick = {toggleColorMode}
                    icon = {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Toggle