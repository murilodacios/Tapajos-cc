import { Card, CardBody, Text, Grid, Image, GridItem, Stack, Box, Button, HStack, List, ListItem, Icon, SimpleGrid, Input, Checkbox } from '@chakra-ui/react'
import { RiArrowRightUpLine, RiBehanceLine, RiBlurOffLine, RiBuilding3Line, RiCloudOffLine, RiInstagramLine, RiPenNibLine, RiRocket2Line, RiWhatsappLine, RiYoutubeLine } from "react-icons/ri"

export function Contact() {
    return (
        <>
            <Box bg="#001F10" id="contact">
                <Grid templateColumns={{base: "1fr", md: "1fr 1fr"}} bg="#001F10" py="12" fontFamily="Inter" maxW={1400} margin="0 auto" borderBottom="1px solid #eee">
                    <Stack spacing="8" p="6" my="8" color="white">
                        <Image src="/logo-pequena.png" h="40px" w="40px"/>
                        <Text fontSize={{ base: "3xl", md: "5xl" }} lineHeight={{base: "2.5rem", md: "4rem"}}>
                            Vamos conversar sobre como podemos ajudar sua empresa e seu projeto?</Text>
                        <Text fontSize="md" color="#AAFFDB">
                            Sustentabilidade e inovação andam de mãos dadas em nossos projetos. Vamos agendar uma conversa para entender como podemos impulsionar o seu negócio na geração de créditos de carbono.
                        </Text>
                        <HStack>
                            <Text>Entraremos em contato com você</Text>
                            <Icon as={RiArrowRightUpLine} />
                        </HStack>
                    </Stack>

                    <Stack bg="white" p={{base: "8", md:"12"}} my="8" mx='4' spacing="4" maxW="500px" justify="flex-start" borderRadius="4">
                        <Input type="text" placeholder='Seu nome' fontSize="sm" variant="filled" borderRadius="2"/>

                        <Input type="text" placeholder='Empresa' fontSize="sm" variant="filled" borderRadius="2"/>

                        <Input type="text" placeholder='E-mail' fontSize="sm" variant="filled" borderRadius="2"/>

                        <Input type="text" placeholder='Telefone' fontSize="sm" variant="filled" borderRadius="2"/>

                        <HStack>
                            <Checkbox></Checkbox>
                            <Text fontSize="sm">Aceito receber mensagens e e-mails da Tapajós</Text>
                        </HStack>

                        <Box>
                            <Button>Enviar meus dados</Button>
                        </Box>

                        <Text fontSize="xs">Acesse nossa política de privacidade para entender como utilizamos os seus dados em nossa base. Garantimos que coletamos informações apenas para fins de contato e primeira abordagem.</Text>
                    </Stack>
                </Grid>
            </Box>


            <Box bg="#002B17" h="40px">

            </Box>
        </>
    )
}