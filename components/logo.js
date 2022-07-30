import Link from "next/link"
import { Button } from "@chakra-ui/react"
import { motion } from "framer-motion"

const Logo = () => {
    return (
        <motion.div whileHover = {{scale: 1.1}} whileTap = {{scale: 0.9}}>
            <Link href = "/">
                <Button
                    variant = "custom" 
                >
                    {`<nckasman />`}
                </Button>
            </Link>
        </motion.div>
    )
}

export default Logo