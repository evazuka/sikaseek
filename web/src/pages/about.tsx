import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Stack, StackDivider, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import Head from "next/head"
import { Illustration } from "~/components/illustration"

export const AboutPage = () => {
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
          <Stack direction={'row'} spacing={7}>
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
        maxW={{ base: '100%', sm: '90%', md: '70%' }}
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
              <Text size="sm" mb={6}>of net sales Sika did in 2023</Text>
            </Heading>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              lineHeight={'110%'}>
              <Text as={'span'} color={'red.500'}>
                ...still sharing data through email
              </Text>
            </Heading>
            <Text color={'gray.800'} maxW={'3xl'} fontSize='lg'>
              Sika is a specialty chemicals company. It is among others industry leaders, who are lagging behind technological and digital curve.
              <br />
              <br />
              Imagine, files across silos and teams are <Text as="u">still</Text> shared through PDFs and emails.
              <br />
              <br />
              There are millions of files with knowledge and data, spread across vast network of subsidaries
            </Text>
            {/* <Flex w={'full'}>
              <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
            </Flex> */}
          </Stack>
        </Container>
        <Container maxW={'5xl'} pb={24}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Heading>Sika in numbers</Heading>
              <Stack
                spacing={4}
                divider={
                  <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                }>
                <Stack direction={'column'}>
                  <Box><Text fontWeight={600}>33,000</Text> employees</Box>
                  <Box><Text fontWeight={600}>101</Text> countries</Box>
                  <Box><Text fontWeight={600}>400</Text> factories worldwide</Box>
                </Stack>
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </Stack>
    </Flex>
  </>
}


export default AboutPage