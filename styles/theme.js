import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"
import '@fontsource/sora'
import "@fontsource/fira-code/700.css"

const colors = {
    light: "#ede9e3",
    light_hover: "#f2efeb",
    light_active: "#f6f4f1",
    dark: "gray.900",
    dark_hover: "gray.800",
    dark_active: "gray.700",
    highlight: "#ee3255",
}

const styles = {
    global: props => ({
        body: {
            bg: mode(colors.light, colors.dark)(props),
            color: mode(colors.dark, colors.light)(props),
            letterSpacing: 1.2,
        },
    }),
}

const fonts = {
    heading: `'Sora', sans-serif`,
    body: `'Sora', sans-serif`,
    project: `'Fira Code', monospace`,
}

const components = {
    Heading: {
        variants: {
            'section-title': props => ({
                fontSize: 20,
                marginTop: 3,
                marginBottom: 4,
                textTransform: "lowercase",
            })
        }
    },
    Button: {
        variants: {
            'custom': props => ({
                margin: 1,
                borderRadius: 2,
                _hover: {
                    bg: mode(colors.light_hover, colors.dark_hover)(props),
                    boxShadow: mode("4px 6px 0 0 #171923", "4px 6px 0 0 #ede9e3")(props),
                    transitionDuration: "200ms",
                    textDecoration: "none",
                },
                _active: {
                    bg: mode(colors.light_active, colors.dark_active)(props),
                    boxShadow: mode("3px 3px 0 0 #171923", "3px 3px 0 0 #ede9e3")(props),
                }
            })
        }
    },
    Badge: {
        variants: {
            'custom': props => ({
                borderRadius: 2,
                bg: mode(colors.dark, colors.light)(props),
                color: mode(colors.light, colors.dark)(props),
                textTransform: "lowercase",
                fontSize: "lg",
                m: "1%"
            }),
            'am': {
                bg: "#5c0125",
                color: colors.light,
            },
        }
    },
    Link: {
        variants: {
            'custom': {
                _hover: {textDecoration: "none"}
            },
        },
    },
}



const config = {
    initialColorMode: 'light',
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme