import Image from "next/image"
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from "@chakra-ui/react"
import theme from "../styles/theme"
import NextLink from "next/link"
import { motion } from "framer-motion"

export const ProjectItem = ({ children, title, src, href }) => (
    <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
        <Box 
        pb = {5}
        width = "100%" 
        align = "center"
        borderRadius = {2}
        overflow = "hidden"
        _hover = {{
            bg: useColorModeValue(theme.colors.light_hover, theme.colors.dark_hover),
            boxShadow: "7px 10px 0 0 #ee3255",
            transitionDuration: "180ms",
        }}
        _active = {{
            bg: useColorModeValue(theme.colors.light_active, theme.colors.dark_active),
            boxShadow: "4px 6px 0 0 #ee3255",
        }}
        >
            <LinkBox cursor = "pointer">
                <Image
                src = {src}
                alt = {title}
                className = "grid-item-thumbnail"
                />
                <NextLink href = {href} passHref>
                    <LinkOverlay target = "_blank" rel = "noopener noreferrer">
                        <Text mt = {4} fontSize = {24} color = {theme.colors.highlight} fontFamily = {theme.fonts.project}>{title}</Text>
                    </LinkOverlay>
                </NextLink>
                <Text p = {2} fontSize = {14}>{children}</Text>
            </LinkBox>
        </Box>
    </motion.div>
)