import { Card, CardBody, Text, Grid, GridItem, Stack, Box, Button, HStack, List, ListItem, Icon, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import { RiBallPenLine, RiBehanceLine, RiBlurOffLine, RiBuilding3Line, RiCloudOffLine, RiEarthLine, RiImage2Line, RiInstagramLine, RiMoneyDollarBoxLine, RiPenNibLine, RiRocket2Line, RiSearch2Line, RiWhatsappLine, RiYoutubeLine } from "react-icons/ri"



export function What() {
    return (
        <>
            <Box bg="#fff" id="what">

                <SimpleGrid columns={{ base: 1, md: 2 }} fontFamily="Inter" maxW={1400} margin="0 auto">
                    <Stack spacing="4" p="6" mt="8">
                        <Text color="#527969" fontSize="lg" fontWeight="500">Descubra mais um pouco</Text>
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="500">
                            Afinal, o que são créditos de carbono?
                            Para o que eles servem?
                        </Text>

                    </Stack>

                    <Stack align="flex-end" display={{ base: "none", md: "flex" }} spacing="4" p="6" mt="8">
                        <Text color="#527969" fontSize="lg" fontWeight="400" textAlign="right">As empresas mais sustentáveis do<br></br> planeta já utilizam essas técnicas</Text>
                    </Stack>
                </SimpleGrid>

                <Stack fontFamily="Inter" maxW={1400} margin="0 auto" p="6" spacing="4">
                    <Text>Crédito de carbono é um mecanismo de mercado criado para ajudar a reduzir as emissões de dióxido de carbono (CO2) na atmosfera.
                        Este mecanismo permite que empresas, governos e organizações comprem e vendam créditos de carbono no mercado, transformando emissões
                        de CO2 em uma commodity comercializável.
                    </Text>

                    <Text>
                        As emissões de CO2 em excesso são reduzidas convertendo-as em créditos de carbono, que são, então, vendidos para outras organizações
                        que querem compensar as suas próprias emissões.
                    </Text>

                    <Stack borderRadius="12" bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), radial-gradient(142.86% 1017.1% at -31.22% -42.64%, #00351C 0%, #018E4B 34.26%, #0F935B 68.18%, #093422 100%);">


                        <Grid templateColumns={{ base: "1fr", md: "3fr 0.1fr 3fr", lg: "3fr 1fr 3fr" }} borderRadius="8">

                            <Stack color="#fff" spacing="8" p="12">
                                <Stack>
                                    <Image src="/logo.png" width={150} height={80} alt="Logotipo Tapajós" />
                                    <Text fontSize={{ base: "lg", md: "2xl" }}>Principais características dos créditos de carbono</Text>
                                </Stack>

                                <HStack spacing="4" align="flex-start">
                                    <Stack border="1px solid #fff" p="4" align="center" justify="center" borderRadius="4">
                                        <Icon as={RiImage2Line} fontSize="25" />
                                    </Stack>
                                    <Stack spacing="2">
                                        <Text fontWeight="600" fontSize="md">Certificação e validação</Text>
                                        <Text>Os créditos de carbono são certificados e verificados: Isso significa que os créditos de carbono são emitidos apenas após a validação e certificação de organizações independentes e credenciadas, garantindo sua autenticidade e qualidade.</Text>
                                    </Stack>
                                </HStack>

                                <HStack spacing="4" align="flex-start">
                                    <Stack border="1px solid #fff" p="4" align="center" justify="center" borderRadius="4">
                                        <Icon as={RiImage2Line} fontSize="25" />
                                    </Stack>
                                    <Stack spacing="2">
                                        <Text fontWeight="600" fontSize="md">Os créditos de carbono são rastreáveis</Text>
                                        <Text>Os créditos de carbono são rastreados em um sistema centralizado para garantir que cada crédito seja único e que seu uso possa ser rastreado ao longo do tempo.</Text>
                                    </Stack>
                                </HStack>

                                <HStack spacing="4" align="flex-start">
                                    <Stack border="1px solid #fff" p="4" align="center" justify="center" borderRadius="4">
                                        <Icon as={RiImage2Line} fontSize="25" />
                                    </Stack>
                                    <Stack spacing="2">
                                        <Text fontWeight="600" fontSize="md">Os créditos de carbono são uma forma eficaz de mitigação de carbono</Text>
                                        <Text>Comprando créditos de carbono, as empresas podem compensar suas emissões de carbono, contribuindo para a redução da emissão de gases de efeito estufa na atmosfera.</Text>
                                    </Stack>
                                </HStack>
                            </Stack>

                            <Stack>

                            </Stack>


                            <Stack color="#fff" spacing="8" p="12">
                                <Stack>
                                    <Text fontSize="2xl">Benefícios para sua empresa</Text>
                                </Stack>

                                <HStack spacing="4" align="flex-start">
                                    <Stack border="1px solid #fff" p="4" align="center" justify="center" borderRadius="4">
                                        <Icon as={RiImage2Line} fontSize="25" />
                                    </Stack>
                                    <Stack spacing="2">
                                        <Text fontWeight="600" fontSize="md">Fortalecimento da marca e imagem corporativa</Text>
                                        <Text>As empresas que geram créditos de carbono demonstram publicamente seu compromisso com a sustentabilidade e o meio ambiente, o que pode aumentar sua reputação e imagem corporativa.</Text>
                                    </Stack>
                                </HStack>

                                <HStack spacing="4" align="flex-start">
                                    <Stack border="1px solid #fff" p="4" align="center" justify="center" borderRadius="4">
                                        <Icon as={RiImage2Line} fontSize="25" />
                                    </Stack>
                                    <Stack spacing="2">
                                        <Text fontWeight="600" fontSize="md">Redução de custos</Text>
                                        <Text>Em muitos casos, a compra de créditos de carbono pode ser mais econômica do que investir em tecnologias de redução de emissões de carbono em suas próprias operações.</Text>
                                    </Stack>
                                </HStack>

                                <HStack spacing="4" align="flex-start">
                                    <Stack border="1px solid #fff" p="4" align="center" justify="center" borderRadius="4">
                                        <Icon as={RiImage2Line} fontSize="25" />
                                    </Stack>
                                    <Stack spacing="2">
                                        <Text fontWeight="600" fontSize="md">Conformidade regulatória</Text>
                                        <Text>Comprar créditos de carbono pode ajudar as empresas a cumprir com as regulamentações e políticas governamentais que exigem a redução de emissões de gases de efeito estufa.</Text>
                                    </Stack>
                                </HStack>
                            </Stack>

                        </Grid>
                    </Stack>
                </Stack>


            </Box>

        </>
    )
}