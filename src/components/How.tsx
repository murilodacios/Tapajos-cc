import { Card, CardBody, Text, Grid, Image, GridItem, Stack, Box, Button, HStack, List, ListItem, Icon, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import { RiBallPenLine, RiBehanceLine, RiBlurOffLine, RiBuilding3Line, RiCloudOffLine, RiEarthLine, RiInstagramLine, RiMoneyDollarBoxLine, RiPenNibLine, RiRocket2Line, RiSearch2Line, RiWhatsappLine, RiYoutubeLine } from "react-icons/ri"

export function How() {
    return (
        <>
            <Box bg="#fff" id="how">

                <SimpleGrid columns={{ base: 1, md: 2 }} fontFamily="Inter" maxW={1400} margin="0 auto">
                    <Stack spacing="4" p="6" mt="8">
                        <Text color="#527969" fontSize="lg" fontWeight="500">Carbon Credits</Text>
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="500">
                            Entenda como a Tapajós pode
                            impulsionar sua geração de créditos de
                            carbono
                        </Text>
                    </Stack>

                    <Stack display={{ base: "none", md: "flex" }} align="flex-end" spacing="4" p="6" my={{ base: "2", md: "8" }}>
                        <Text color="#527969" fontSize="lg" fontWeight="400" textAlign="right">Adeus emissões de <br></br>gases de efeito estufa!</Text>
                        <Box>
                            <Link href="/#contact">
                                <Button variant="outline" colorScheme="green">Entrar em contato</Button>
                            </Link>
                        </Box>
                    </Stack>
                </SimpleGrid>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} bg="#fff" fontFamily="Inter" maxW={1400} margin="0 auto">
                    <Stack spacing="12" p="6">

                        <HStack spacing="6" align="flex-start">
                            <Stack bg="#E1ECE8" p='4' align="center" justify="center" borderRadius="50%">
                                <Icon as={RiSearch2Line} fontSize="25" />
                            </Stack>
                            <Stack>
                                <Text fontWeight="600" fontSize="lg">1. Estudo de viabilidade de projeto</Text>
                                <Text>
                                    Realizamos um estudo de viabilidade completo para cada projeto de conservação florestal e preservação de biodiversidade na Amazônia brasileira. Isso inclui análises de risco e impacto ambiental, bem como avaliações econômicas e financeiras para garantir a eficácia do projeto.
                                </Text>
                            </Stack>
                        </HStack>

                        <HStack spacing="6" align="flex-start">
                            <Stack bg="#E1ECE8" p='4' align="center" justify="center" borderRadius="50%">
                                <Icon as={RiBallPenLine} fontSize="25" />
                            </Stack>
                            <Stack>
                                <Text fontWeight="600" fontSize="lg">2. Execução do projeto</Text>
                                <Text>Com base no estudo de viabilidade, executamos o projeto de conservação florestal e preservação de biodiversidade na Amazônia brasileira. Trabalhamos com as comunidades locais e outras partes interessadas para garantir a implementação efetiva e bem-sucedida do projeto.</Text>
                            </Stack>
                        </HStack>

                        <HStack spacing="6" align="flex-start">
                            <Stack bg="#E1ECE8" p='4' align="center" justify="center" borderRadius="50%">
                                <Icon as={RiBlurOffLine} fontSize="25" />
                            </Stack>
                            <Stack>
                                <Text fontWeight="600" fontSize="lg">3. Validação dos créditos de carbono</Text>
                                <Text>Validamos nossos créditos de carbono por meio de organizações independentes para garantir a autenticidade e qualidade dos créditos. Nós seguimos rigorosamente as normas internacionais e nossos créditos são certificados por organizações reconhecidas.</Text>
                            </Stack>
                        </HStack>

                        <HStack spacing="6" align="flex-start">
                            <Stack bg="#E1ECE8" p='4' align="center" justify="center" borderRadius="50%">
                                <Icon as={RiMoneyDollarBoxLine} fontSize="25" />
                            </Stack>
                            <Stack>
                                <Text fontWeight="600" fontSize="lg">4. Venda dos créditos para empresas parceiras</Text>
                                <Text>Vendemos nossos créditos de carbono para empresas parceiras comprometidas com a sustentabilidade e redução de suas emissões de carbono. Oferecemos soluções personalizadas e acessíveis para ajudar nossos clientes a alcançar suas metas de sustentabilidade.</Text>
                            </Stack>
                        </HStack>

                        <HStack spacing="6" align="flex-start">
                            <Stack bg="#E1ECE8" p='4' align="center" justify="center" borderRadius="50%">
                                <Icon as={RiEarthLine} fontSize="25" />
                            </Stack>
                            <Stack>
                                <Text fontWeight="600" fontSize="lg">5. Projetos socioeconômicos nas áreas de preservação</Text>
                                <Text>Além de nossos projetos de conservação florestal e preservação de biodiversidade, trabalhamos com as comunidades locais para implementar projetos socioeconômicos que ajudem a promover o desenvolvimento sustentável na região. Isso inclui iniciativas de educação, treinamento profissional e melhoria da infraestrutura local.</Text>
                            </Stack>
                        </HStack>

                    </Stack>

                    <Stack bgImage="/how-image.jpg" width="100%" h={{ base: "500px", md: "auto" }} position="relative" bgPos="center" bgSize="cover">
                        <Box position="absolute" w="200px" bg="#155339" left={{ base: "5", md: "-5" }} p="4" bottom="100" borderRadius="5px">
                            <Text color="white">Mais de 50T de carbono neutralizado</Text>
                        </Box>
                    </Stack>
                </Grid>
            </Box>

        </>
    )
}