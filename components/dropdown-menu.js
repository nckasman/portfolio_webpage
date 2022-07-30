import {
    Menu,
    MenuButton,
    IconButton,
    MenuItem,
    MenuList,
    Link,
    useDisclosure,
    useColorModeValue
} from "@chakra-ui/react"
import NextLink from "next/link"
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons"
import theme from "../styles/theme"

const DropdownMenu = () => {
    const { isOpen, onToggle, onClose } = useDisclosure()

    return (
        <Menu isOpen = {isOpen} onClose = {onClose} isLazy = "true" autoSelect = "false">
            <MenuButton
            as = {IconButton}
            icon = {isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
            variant = 'custom'
            onClick = {onToggle}
            />
            <MenuList 
            bg = {useColorModeValue(theme.colors.light_active, theme.colors.dark_active)}
            borderRadius = {2}
            border = "none"
            boxShadow = {useColorModeValue("4px 6px 0 0 #171923", "4px 6px 0 0 #ede9e3")}
            _active = {{
                boxShadow: useColorModeValue("3px 3px 0 0 #171923", "3px 3px 0 0 #ede9e3"),
                transitionDuration: "180ms"
            }}
            >
                <NextLink href = "/about/#start" passHref>
                    <MenuItem
                    as = {Link}
                    _focus = "none"
                    _hover = {{
                        bg: useColorModeValue(theme.colors.light_hover, theme.colors.dark_hover)
                    }}
                    >
                    about
                    </MenuItem>
                </NextLink>

                <NextLink href = "/projects/#start" passHref>
                    <MenuItem
                    as = {Link}
                    _hover = {{
                        bg: useColorModeValue(theme.colors.light_hover, theme.colors.dark_hover)
                    }}
                    >
                    projects
                    </MenuItem>
                </NextLink>
            </MenuList>
        </Menu>
    )
}

export default DropdownMenu