import { Card, CardBody, Text, Grid, Image, GridItem, Stack, Box, Button, HStack, List, ListItem, Icon, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import { RiBehanceLine, RiBlurOffLine, RiBuilding3Line, RiCloudOffLine, RiInstagramLine, RiPenNibLine, RiRocket2Line, RiWhatsappLine, RiYoutubeLine } from "react-icons/ri"

export function Hero() {
    return (
        <>
            <Box bg="#001F10">
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} bg="#001F10" fontFamily="Inter" maxW={1400} margin="0 auto" borderBottom="1px solid #eee">
                    <Stack spacing="6" p="6" my="8" color="white">
                        <Text color="#6AD8AA" fontSize={{ base: "1rem", md: "1.2rem" }}>Faça parte da revolução sustentável</Text>
                        <Text fontSize={{ base: "2xl", md: "4xl" }} lineHeight={{ base: "2rem", md: "2.9rem" }}>
                            A Tapajós Carbon Credits une desenvolvimento econômico à preservação ambiental para criar oportunidades de negócios sustentáveis
                        </Text>
                        <Text fontSize={{ base: "1rem", md: "1.2rem" }}>Ajudamos a sua empresa a criar projetos inovadores que geram créditos de carbono que ajudam a preservar o meio ambiente e combatem as mudanças climáticas.</Text>
                        <Box>
                            <Link href="/#how">
                                <Button px="8" variant="outline" colorScheme="green">
                                    <HStack spacing="4">
                                        <Icon as={RiBlurOffLine} />
                                        <Text>Quero conhecer o projeto</Text>
                                    </HStack>
                                </Button>
                            </Link>
                        </Box>

                        <Stack direction={{ base: "column", md: "row" }} py="4" spacing="8">
                            <HStack align="flex-start">
                                <Icon color="white" as={RiCloudOffLine} fontSize="2xl" />
                                <Text fontSize="sm" color="#A6E3C9">Reduzem as emissões de gases<br></br>
                                    de efeito estufa</Text>
                            </HStack>

                            <HStack align="flex-start">
                                <Icon color="white" as={RiBuilding3Line} fontSize="2xl" />
                                <Text fontSize="sm" color="#A6E3C9">Venda seus créditos de carbono<br></br>
                                    para industrias parceiras</Text>
                            </HStack>
                        </Stack>
                    </Stack>

                    <SimpleGrid columns={3}>
                        <Box bg="gray.100" bgImage="/hero-1.jpg" bgPos="center" bgSize="cover">

                        </Box>

                        <Box bg="gray.100" bgImage="/hero-2.png" bgPos="center" bgSize="cover">

                        </Box>

                        <Box bg="gray.100" bgImage="/hero-3.png" bgPos="center" bgSize="cover">

                        </Box>

                    </SimpleGrid>
                </Grid>
            </Box>


            <Box bg="#002B17">
                <Stack direction={{ base: "column", md: "row" }} color="white" borderBottom="1px solid #eee" p="6" maxW={1400} margin="0 auto" fontFamily="Inter" justify="space-between">
                    <Stack>
                        <Text fontWeight="600">A Tapajós é uma empresa humana que<br></br>
                            entende a necessidade de seus clientes</Text>
                        <Text>Usamos tecnologias modernas para transformar o seu negócio</Text>
                    </Stack>

                    <HStack spacing="6">
                        <HStack>
                            <Text>Siga-nos nas redes sociais</Text>
                        </HStack>
                        <Icon as={RiInstagramLine} fontSize="2xl" />
                        <Icon as={RiBehanceLine} fontSize="2xl" />
                        <Icon as={RiYoutubeLine} fontSize="2xl" />
                    </HStack>
                </Stack>
            </Box>
        </>
    )
}