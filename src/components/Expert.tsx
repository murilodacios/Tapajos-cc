import { Card, CardBody, Text, Grid, GridItem, Stack, Box, Button, HStack, List, ListItem, Icon, SimpleGrid, Image } from '@chakra-ui/react'
import { RiArchiveLine, RiBallPenLine, RiBehanceLine, RiBlurOffLine, RiBuilding3Line, RiCloudOffLine, RiEarthLine, RiImage2Line, RiInstagramLine, RiMoneyDollarBoxLine, RiPenNibLine, RiRocket2Line, RiSearch2Line, RiWhatsappLine, RiYoutubeLine } from "react-icons/ri"

export function Expert() {
    return (
        <>
            <Box bg="#fff" my="12" id="expert">

                <Stack spacing="4" p="6" mt="8" fontFamily="Inter" maxW={1400} margin="0 auto" align="center">
                    <Text color="#527969" fontSize="lg" fontWeight="500">A Tapajós é</Text>
                    <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="500" textAlign={{ base: "center" }}>
                        Por que somos experts nesse segmento
                    </Text>
                </Stack>


                <SimpleGrid columns={{ base: 1, md: 3 }} p="6" mt="8" fontFamily="Inter" maxW={1400} margin="0 auto" gap="4">
                    <Stack bg="gray.100" p="6" borderRadius={10}>
                        <Icon as={RiArchiveLine} fontSize="28" />
                        <Text fontSize="lg" fontWeight={500}>Gestão de projetos sustentáveis</Text>
                        <Text>Somos especialistas em gestão de projetos sustentáveis, com um estudo de viabilidade completo e uma execução cuidadosa e bem-sucedida de projetos de conservação florestal e preservação de biodiversidade na Amazônia brasileira.</Text>
                    </Stack>

                    <Stack bg="gray.100" p="6" borderRadius={10}>
                        <Icon as={RiArchiveLine} fontSize="28" />
                        <Text fontSize="lg" fontWeight={500}>Compromisso com a eliminação de gases poluentes</Text>
                        <Text>Estamos comprometidos com a redução de emissões de gases poluentes e ajudamos nossos clientes a alcançarem suas metas de sustentabilidade por meio da venda de créditos de carbono certificados e verificados.</Text>
                    </Stack>

                    <Stack bg="gray.100" p="6" borderRadius={10}>
                        <Icon as={RiArchiveLine} fontSize="28" />
                        <Text fontSize="lg" fontWeight={500}>Parceria com líderes da industria  </Text>
                        <Text>Trabalhamos em parceria com líderes da indústria para oferecer soluções personalizadas e acessíveis para ajudar nossos clientes a reduzir suas emissões de carbono e alcançar suas metas de sustentabilidade.</Text>
                    </Stack>

                </SimpleGrid>


                <Stack spacing="4" p="6" mt="8" fontFamily="Inter" maxW={1400} margin="0 auto" align="center">
                    <Text color="#527969" fontSize="lg" fontWeight="500">Informação de qualidade</Text>
                    <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="500" textAlign={{ base: "center" }}>
                        Acesse nossos conteúdos gratuitos
                    </Text>
                </Stack>


                <SimpleGrid columns={{ base: 1, md: 3 }} p="6" mt="8" fontFamily="Inter" maxW={1400} margin="0 auto" gap="4">

                    <Stack spacing="6">
                        <Stack borderRadius={10} bgImage="/hero-2.png" h="200px" bgSize="cover" bgPos="center" position="relative">
                            <Box position="absolute" bottom="-5" left="5" bg="#001F10" p="2" borderRadius={10} >
                                <Text color="white">Sustentabilidade</Text>
                            </Box>
                        </Stack>
                        <Stack position="relative">
                            <Text fontSize="lg" fontWeight={500}>Lorem ipsum dolor sit amet avec est a latim language</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate ullamcorper gravida. Duis orci turpis, blandit nec dolor eu, volutpat feugiat dui.</Text>
                        </Stack>
                    </Stack>

                    <Stack spacing="6">
                        <Stack borderRadius={10} bgImage="/hero-1.jpg" h="200px" bgSize="cover" bgPos="center" position="relative">
                            <Box position="absolute" bottom="-5" left="5" bg="#001F10" p="2" borderRadius={10} >
                                <Text color="white">Sustentabilidade</Text>
                            </Box>
                        </Stack>
                        <Stack position="relative">
                            <Text fontSize="lg" fontWeight={500}>Lorem ipsum dolor sit amet avec est a latim language</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate ullamcorper gravida. Duis orci turpis, blandit nec dolor eu, volutpat feugiat dui.</Text>
                        </Stack>
                    </Stack>

                    <Stack spacing="6">
                        <Stack borderRadius={10} bgImage="/hero-3.png" h="200px" bgSize="cover" bgPos="center" position="relative">
                            <Box position="absolute" bottom="-5" left="5" bg="#001F10" p="2" borderRadius={10} >
                                <Text color="white">Sustentabilidade</Text>
                            </Box>
                        </Stack>
                        <Stack position="relative">
                            <Text fontSize="lg" fontWeight={500}>Lorem ipsum dolor sit amet avec est a latim language</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate ullamcorper gravida. Duis orci turpis, blandit nec dolor eu, volutpat feugiat dui.</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Box>

        </>
    )
}