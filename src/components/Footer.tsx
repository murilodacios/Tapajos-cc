import { Card, CardBody, Text, Grid, GridItem, Stack, Box, Button, HStack, List, ListItem, Icon, SimpleGrid, Input, Checkbox } from '@chakra-ui/react'
import Image from 'next/image'
import { RiArrowRightUpLine, RiBehanceLine, RiBlurOffLine, RiBuilding3Line, RiCloudOffLine, RiInstagramLine, RiPenNibLine, RiRocket2Line, RiWhatsappLine, RiYoutubeLine } from "react-icons/ri"



export function Footer() {
    return (
        <>
            <Box bg="#fff" id="footer" fontFamily="Inter" maxW={1400} margin="0 auto">
                
                <Stack direction={{base: "column", md: "row"}} my="4" justify="space-between" p="6">
                    <Image src="/logo-escura.svg" width={150} height={80} alt="Logotipo Tapajós" />

                    <Text fontSize="sm">Desenvolvido por <strong>Nouvy</strong></Text>
                </Stack>
              

            </Box>
        </>
    )
}