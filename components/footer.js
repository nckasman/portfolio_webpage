import { Container, Text, Icon, HStack } from "@chakra-ui/react"
import Layout from "./layouts/article"
import { ImHeart } from "react-icons/im"

const Footer = () => {
    return(
        <Layout>
            <Container>
                <HStack flexGrow = {1}>
                    <Text fontSize = {12}>made with</Text>
                    <Icon as = {ImHeart} color = "#ee3255"/>
                    <Text fontSize = {12}>by nicholas kasman © 2022</Text>
                </HStack>
            </Container>
        </Layout>
    )
}

export default Footer