import { Text, Box, Button, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
    return (
        <>
            <Box bg="#001F10" fontFamily="Inter" borderBottom="1px solid #00532C" color="white">

                <HStack maxW={1400} margin="0 auto" p="6" spacing="12" justify="space-between" align="center">
                    <Image src="/logo.png" width={150} height={80} alt="Logotipo Tapajós" />

                    <HStack spacing="6" display={{base: "none", lg: "flex"}}>
                        <Link href="/#how">
                            <Text fontSize="md">Soluções</Text>
                        </Link>

                        <Link href="/#what">
                            <Text fontSize="md">O que é</Text>
                        </Link>

                        <Link href="/#expert">
                            <Text fontSize="md">A Tapajós</Text>
                        </Link>

                        <Link href="/#contact">
                            <Text fontSize="md">Contato</Text>
                        </Link>
                    </HStack>

                    <Button variant="outline" px="12" display={{base: "none", md: "inline-block"}}>
                        Fale conosco
                    </Button>

                </HStack>

            </Box>
        </>
    )
}