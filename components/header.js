import { Container, Box, Heading, Badge } from "@chakra-ui/react"
import Info from "./info"
import Layout from "./layouts/article"

const Header = () => {
    return (
        <Layout>
            <Container>
                <Box display = {{md: 'flex'}}>
                    <Box flexGrow = {1} mt = "20%" height = "100%">
                        <Box
                            direction = {{base: 'column', md: 'row'}}
                            display = {{base: 'flex', md: 'flex'}}
                        >
                            <Heading size = "3xl">
                                nicholas kasman
                            </Heading>
                            <Info />
                        </Box>

                        <Box mt = "2%" width = {{base: "105%"}}>
                            <Badge variant = 'custom'>Software Engineer</Badge>
                            <Badge variant = 'custom'>Undergraduate Researcher</Badge>
                            <Badge variant = 'custom'>Electrical Engineering Student</Badge>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default Header