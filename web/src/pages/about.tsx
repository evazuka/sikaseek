import { CheckIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Button, Card, Container, Divider, Flex, FormControl, HStack, Heading, Icon, Image, Input, Link, SimpleGrid, Stack, StackDivider, Text, VStack, Wrap, createIcon, useColorMode, useColorModeValue } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { Illustration } from "~/components/illustration"
import {
  FcCustomerSupport,
  FcBusinessman,
  FcBusinesswoman,
  FcFactory,
  FcSearch,
  FcBiomass,
} from 'react-icons/fc'

export const AboutPage = () => {
  const router = useRouter()
  const bg = useColorModeValue('gray.50', 'gray.800')
  const { colorMode, toggleColorMode } = useColorMode()

  return <>
    <Head>
      <title>SikaSeek</title>
      <meta name="description" content="SikaSeek: HackZurich 2023" />
    </Head>
    {/* Nav */}
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction='row' alignItems='baseline'>
          <Link href="/">
            <Heading as='h2' size='md'>SikaSeek</Heading>
          </Link>
          <Link href="/about">
            <Text as='u' ml={8}>About</Text>
          </Link>
        </Stack>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={1} alignItems='baseline'>
            <Text>also in {colorMode === 'light' ? 'dark' : 'light'} →</Text>
            <Button variant='ghost' onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>

    {/* Body */}
    <Flex
      minH='100vh'
      justify='center'
      bg={bg}
    >
      <Stack
        direction='column'
      >
        <Container maxW={'5xl'}>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              <br />
              10 900 000 000 CHF
            </Heading>
            <Heading
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
              mt={-4}
              lineHeight={'100%'}>
              <Text size="sm" mb={6}>of net sales Sika® did in 2022</Text>
            </Heading>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              lineHeight={'110%'}>
              <Text as={'span'} color={'red.500'}>
                ...still sharing data through email
              </Text>
            </Heading>
            <Text maxW={'3xl'} fontSize='lg'>
              Sika® is a specialty chemicals company. It is among others industry leaders, who are lagging behind technological and digital curve.
              <br />
              <br />
              Imagine, files across silos and teams are <Text as="u">still</Text> shared through PDFs and emails.
              <br />
              <br />
              There are millions of files with knowledge and data, spread across vast network of subsidaries.
              Even <Text as='u'>paying customers</Text> have a hard time accessing relevant product information.
            </Text>
            {/* <Flex w={'full'}>
              <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
            </Flex> */}
          </Stack>
        </Container>
        <Container minW='80vw' >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
            <Stack spacing={4}>
              <Heading>Sika® in numbers</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                Global corporation, still behind the curve
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                }>
                <Stack direction={'column'}>
                  <Box><Text fontWeight={600} fontSize='xl'>33,000</Text> employees</Box>
                  <Box><Text fontWeight={600} fontSize='xl'>101</Text> countries</Box>
                  <Box><Text fontWeight={600} fontSize='xl'>400</Text> factories worldwide</Box>
                </Stack>
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'xl'}
                alt={'feature image'}
                src={
                  'graph1.png'
                }
                objectFit={'contain'}
              />
            </Flex>
          </SimpleGrid>
        </Container>
        <Container maxW={'5xl'}>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            pt={{ base: 20, md: 28 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              lineHeight={'110%'}>
              <Text as={'span'} color={'red.500'}>
                how should we share knowledge between
              </Text>
            </Heading>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Box
                maxW={{ base: 'full', md: '275px' }}
                w={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}>
                <Stack align={'start'} spacing={2}>
                  <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    <Icon as={FcCustomerSupport} w={10} h={10} />
                  </Flex>
                  <Box mt={2}>
                    <Heading size="md">Customers</Heading>
                  </Box>
                </Stack>
              </Box>
              <Box
                maxW={{ base: 'full', md: '275px' }}
                w={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}>
                <Stack align={'start'} spacing={2}>
                  <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    <Icon as={FcBusinessman} w={10} h={10} />

                  </Flex>
                  <Box mt={2}>
                    <Heading size="md">Business Management</Heading>
                  </Box>
                </Stack>
              </Box>
              <Box
                maxW={{ base: 'full', md: '275px' }}
                w={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}>
                <Stack align={'start'} spacing={2}>
                  <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    <Icon as={FcBusinesswoman} w={10} h={10} />
                  </Flex>
                  <Box mt={2}>
                    <Heading size="md">Marketing & Sales</Heading>
                  </Box>
                </Stack>
              </Box>
              <Box
                maxW={{ base: 'full', md: '275px' }}
                w={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}>
                <Stack align={'start'} spacing={2}>
                  <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    <Icon as={FcFactory} w={10} h={10} />

                  </Flex>
                  <Box mt={2}>
                    <Heading size="md">Production</Heading>
                  </Box>
                </Stack>
              </Box>
              <Box
                maxW={{ base: 'full', md: '275px' }}
                w={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}>
                <Stack align={'start'} spacing={2}>
                  <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    <Icon as={FcSearch} w={10} h={10} />
                  </Flex>
                  <Box mt={2}>
                    <Heading size="md">R&D</Heading>
                  </Box>
                </Stack>
              </Box>
              <Box
                maxW={{ base: 'full', md: '275px' }}
                w={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}>
                <Stack align={'start'} spacing={2}>
                  <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    <Icon as={FcBiomass} w={10} h={10} />
                  </Flex>
                  <Box mt={2}>
                    <Heading size="md">Innovation</Heading>
                  </Box>
                </Stack>
              </Box>
            </Flex>
            {/* <Flex w={'full'}>
              <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
            </Flex> */}
            <Text>...</Text>
            <Stack direction='row' alignItems='baseline'>
              <Heading
                fontWeight={600}
                fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                mt={4}
                lineHeight={'100%'}>
                <Text size="sm" pb={4}>we propose</Text>
              </Heading>
              <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}>
                <Stack direction='row' alignItems='baseline'>
                  <Image
                    width='80px'
                    rounded={'md'}
                    alt={'feature image'}
                    src={
                      'sika.png'
                    }
                    objectFit={'cover'}
                  />
                  <Text as='span' color='#e71802'>Seek</Text>
                </Stack>
              </Heading>
            </Stack>
            <Heading
              fontWeight={600}
              fontSize={{ base: 'lg', sm: 'xl', md: 'xl' }}
              lineHeight={'100%'}>
              <Text size="sm" mb={6}>Sika® knowledgebase powered by AI</Text>
            </Heading>
            <Text maxW={'3xl'} fontSize='lg'>
              We have indexed almost <Text as='b'>3000</Text> files (<Text as='samp'>.pdf</Text>, <Text as='samp'>.docx</Text>)
              containing Sika® brochures, product data sheets, safety data sheets,
              and a bunch of official Sika® webpages
              <br />
              <br />
              and connected it with large language model to make data accessible through simple search bar
            </Text>
            <Stack
              spacing={4}
              w='100%'
              bg={useColorModeValue('white', 'gray.700')}
              rounded={'xl'}
              boxShadow={'lg'}
              p={6}
            >
              <Stack direction='row'>
                <FormControl id="search">
                  <Input
                    size='lg'
                    _placeholder={{ color: 'gray.500' }}
                    type="search"
                    isDisabled
                  />
                </FormControl>
                <Button _hover={{}} cursor='default' colorScheme="red" size='lg' rightIcon={<SearchIcon />}>Search</Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Container maxW='5xl' my={8}>
          <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Heading fontSize={'3xl'}>What we <Text as='u'>actually</Text> do</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'xl'}>
                Yes, all of this is implemented and works already
              </Text>
            </Stack>
            <Container maxW={'6xl'} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <CheckIcon />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>Natural language processing </Text>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>Ask you questions in everyday language. Powered by GPT3.5</Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <CheckIcon />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>Get answers about anything</Text>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>Whether you are looking for safety sheet of Sika® Microcrete-3000 or just a guide how to fix your toilet - we have got you covered</Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <CheckIcon />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>Multilingual support</Text>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>SikaSeek is capable of understanding and responding to messages in your language</Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <CheckIcon />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>Providing data sources</Text>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>SikaSeek will attach a relevant documents and urls to any search result, so you can check for answer accuracy yourself</Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <CheckIcon />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>Search indexed files</Text>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>Current index consists of ~3000 files and many webpages</Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <CheckIcon />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>Suits different users</Text>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>Could be used both internally and externally</Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <CheckIcon />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>Vector storage</Text>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>
                      Embed and retrieve unstructured data in various formats:
                      <Text as='samp'>.pdf</Text>, <Text as='samp'>.docx</Text>, <Text as='samp'>.jpg</Text> etc.
                    </Text>
                  </VStack>
                </HStack>
              </SimpleGrid>
            </Container>
          </Box>
        </Container>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              I guess that&apos;s it <br />
              <Text as={'span'} color={'orange.400'}>
                why don&apos;t you try it now
              </Text>
            </Heading>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Link href="/">
                <Button
                  colorScheme={'red'}
                  rounded={'full'}
                  px={6}
                  size='lg'
                  width={200}
                  _hover={{
                    backgroundColor: 'red.600',
                    boxShadow: 'xl',
                    transform: 'translateY(-2px)',
                    transitionDuration: '0.2s',
                    transitionTimingFunction: "ease-in-out"
                  }}
                  _active={{
                    transform: 'translateY(2px)',
                    transitionDuration: '0.1s',
                  }}>
                  Try it now
                </Button>
              </Link>
              <Link href='' target="_blank">
                <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                  Or check this hackathon project on devpost
                </Button>
              </Link>
              <Box>
                <Icon
                  as={Arrow}
                  color={useColorModeValue('gray.800', 'gray.300')}
                  w={71}
                  position={'absolute'}
                  right={-71}
                  top={'10px'}
                />
                <Text
                  fontSize={'md'}
                  fontFamily={'Caveat'}
                  position={'absolute'}
                  right={'-125px'}
                  top={'-15px'}
                  transform={'rotate(10deg)'}>
                  Free while my credits last
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Flex>
  </>
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
})


export default AboutPage