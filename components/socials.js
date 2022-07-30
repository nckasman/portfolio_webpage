import { Box, Stack, HStack, Icon, Text, LinkBox, LinkOverlay, Button, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"
import { FcAddressBook } from "react-icons/fc"
import { SiDevpost } from "react-icons/si"
import { motion } from "framer-motion"


const Socials = () => {
    return (
        <Box>
            <Stack direction = {["column", "column", "row"]} gap = {2} align = "center">
                <motion.div whileHover = {{scale: 1.05}} whileTap = {{scale: 0.95}}>
                    <LinkBox m = {0} px = {{base: "36vw", md: 2}} py = {{base: "2vw", md: 2}} as = {Button} variant = "custom" _hover = {useColorModeValue({color: "#ee3255", transitionDuration: "180ms"}, {bg: "#ee3255", transitionDuration: "180ms"})}>
                        <HStack>
                            <Icon w = {5} h = {5} as = {IoLogoGithub}/>
                            <NextLink href = "https://github.com/nckasman" passHref>
                                <LinkOverlay target = "_blank" rel = "noopener noreferrer">
                                    <Text textTransform = "lowercase">Github</Text>
                                </LinkOverlay>
                            </NextLink>
                        </HStack>
                    </LinkBox>
                </motion.div>

                <motion.div whileHover = {{scale: 1.05}} whileTap = {{scale: 0.95}}>
                    <LinkBox m = {0} px = {{base: "36vw", md: 2}} py = {{base: "2vw", md: 2}} as = {Button} variant = "custom" _hover = {useColorModeValue({color: "#003E54", transitionDuration: "180ms"}, {bg: "#003E54", transitionDuration: "180ms"})}>
                        <HStack>
                            <Icon w = {5} h = {5} as = {SiDevpost}/>
                            <NextLink href = "https://devpost.com/nckasman" passHref>
                                <LinkOverlay target = "_blank" rel = "noopener noreferrer">
                                    <Text textTransform = "lowercase">Devpost</Text>
                                </LinkOverlay>
                            </NextLink>
                        </HStack>
                    </LinkBox>
                </motion.div>

                <motion.div whileHover = {{scale: 1.05}} whileTap = {{scale: 0.95}}>
                    <LinkBox m = {0} px = {{base: "36vw", md: 2}} py = {{base: "2vw", md: 2}} as = {Button} variant = "custom" _hover = {useColorModeValue({color: "#0077B5", transitionDuration: "180ms"}, {bg: "#0077B5", transitionDuration: "180ms"})}>
                        <HStack>
                            <Icon w = {5} h = {5} as = {IoLogoLinkedin}/>
                            <NextLink href = "https://www.linkedin.com/in/nckasman/" passHref>
                                <LinkOverlay target = "_blank" rel = "noopener noreferrer">
                                    <Text textTransform = "lowercase">LinkedIn</Text>
                                </LinkOverlay>
                            </NextLink>
                        </HStack>
                    </LinkBox>
                </motion.div>

                <motion.div whileHover = {{scale: 1.05}} whileTap = {{scale: 0.95}}>
                    <LinkBox m = {0} px = {{base: "36vw", md: 2}} py = {{base: "2vw", md: 2}} as = {Button} variant = "custom" _hover = {useColorModeValue({color: "#6e5494", transitionDuration: "180ms"}, {bg: "#6e5494", transitionDuration: "180ms"})}>
                        <HStack>
                            <Icon w = {5} h = {5} as = {FcAddressBook} />
                            <NextLink href = "mailto:nck.kasman@gmail.com" passHref>
                                <LinkOverlay target = "_blank" rel = "noopener noreferrer">
                                    <Text textTransform = "lowercase">Email</Text>
                                </LinkOverlay>
                            </NextLink>
                        </HStack>
                    </LinkBox>
                </motion.div>
            </Stack>
        </Box>
    )
}

export default Socials