import { Box, Center, HStack, Image, Select, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react"
import { useUser } from "../util/api"
import "@fontsource/inter"
import "@fontsource/roboto"
import { useState } from "react"
export const Main = () => {
    const [cidade, setCidade]: any = useState()
    const { data, isLoading }: any = useUser(cidade)

    return (
        <VStack w={'full'} h={'full'} position={'fixed'} bg={'linear-gradient(to right, #0f0c29, #302b63, #24243e);'}>
            <SimpleGrid columns={1} spacing={2} mb={2} w="full" padding={3} borderRadius={8} >
                <Center pt={'10%'} minH={'600px'} >
                    <Box bg={'linear-gradient(180deg, rgba(31,31,31,0.927608543417367) 0%, rgba(31,31,31,0.21612394957983194) 100%);'} w={'700px'} borderRadius={10} pl={3} py={5}>
                        {isLoading ?
                            <VStack>
                                <Text textAlign={'center'} fontSize={40} textColor={'white'}>Carregando...</Text>
                                <Spinner color="white" />
                            </VStack>
                            :
                            <>
                                <HStack align={'initial'} >
                                    <Text fontFamily={'Roboto, sans-serif'} fontSize={35} textColor={'white'}><b>{data?.results?.city}</b></Text>
                                    <Text pl={'35%'} textColor={'white'} fontSize={40} fontFamily={'Inter, sans-serif'}><b>{data?.results?.temp}°</b></Text>
                                </HStack>
                                <VStack w={'full'} justify={'initial'} align={'initial'} >
                                    <Text textColor={'white'} fontSize={25} fontFamily={'Inter, sans-serif'}><b>{data?.results?.time}</b></Text>
                                    <Image w={'60px'} src="/nublado.png" ></Image>
                                    <Text textColor={'white'} fontSize={20} fontFamily={'Inter, sans-serif'}><b>{data?.results?.date}</b></Text>
                                    <Text textColor={'white'} fontSize={20} fontFamily={'Inter, sans-serif'}><b>{data?.results?.description}</b></Text>
                                    <Text textColor={'white'} fontSize={20} fontFamily={'Inter, sans-serif'}><b>{data?.results?.sunrise}</b></Text>
                                    <Text textColor={'white'} fontSize={20} fontFamily={'Inter, sans-serif'}><b>{data?.results?.sunset}</b></Text>
                                </VStack>
                                <VStack align={'initial'}>
                                    <HStack mt={3} spacing={'15%'}>

                                        <Text fontSize={18} textColor={'white'}>Seg</Text>
                                        <Text fontSize={18} textColor={'white'}>Ter</Text>
                                        <Text fontSize={18} textColor={'white'}>Qua</Text>
                                        <Text fontSize={18} textColor={'white'}>Qui</Text>
                                        <Text fontSize={18} textColor={'white'}>Sex</Text>
                                    </HStack>
                                </VStack>
                                <HStack spacing={'14%'}>

                                    <Image minW={'20px'} w={'30px'} src="/nublado.png" ></Image>
                                    <Image minW={'20px'} w={'30px'} src="/nublado.png" ></Image>
                                    <Image minW={'20px'} w={'30px'} src="/nublado.png" ></Image>
                                    <Image minW={'20px'} w={'30px'} src="/nublado.png" ></Image>
                                    <Image minW={'20px'} w={'30px'} src="/nublado.png" ></Image>
                                </HStack>
                            </>
                        }
                    </Box>
                </Center>
            </SimpleGrid>
            <VStack >
                <Select onChange={(e: any) => setCidade(e.target.value)} size={'lg'} textColor={'white'} placeholder="Selecionar cidade">
                    <option style={{ color: 'black' }}>Belo Horizonte</option>
                    <option style={{ color: 'black' }}>Uberlândia</option>
                    <option style={{ color: 'black' }}>Contagem</option>
                    <option style={{ color: 'black' }}>Juiz de Fora</option>
                    <option style={{ color: 'black' }}>Betim</option>
                    <option style={{ color: 'black' }}>Paracatu</option>
                </Select>
            </VStack>
        </VStack>

    )
}