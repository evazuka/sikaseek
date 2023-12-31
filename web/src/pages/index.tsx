/* eslint-disable @typescript-eslint/no-misused-promises */
import Head from "next/head";

import { ArrowDownIcon, ArrowUpIcon, MoonIcon, Search2Icon, SearchIcon, SunIcon } from '@chakra-ui/icons'

import { api } from "~/utils/api";
import styles from "./index.module.css";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormControl, Heading, Image, Input, Skeleton, Stack, Text, Textarea, Wrap, WrapItem, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import useDebounce from "~/utils/hooks";
import { Response, SourceNode } from "~/server/api/routers/sikaseek";
import Link from "next/link";

const demoQuestions1 = [
  'How do I seal my toilet?',
  'What is Sika\'s sustainability strategy?',
  'What tapes exist for roofing applications?'
]

const demoQuestions2 = [
  'What are products which Sika offer for wall panels?',
  'What products usually go together with adhesives?',
  'What types of SikaSeal exist?'
]

const demoQuestions3 = [
  'What kind of mortars does Sika sell?',
  'How to repair structural concrete cracks?',
  'Safety precautions for Davco Super TTB'
]

const demoQuestions4 = [
  'Как правильно заливать цемент?',
  'Parādi man kā lietot Sika produktus YouTube',
  '縦樋部分を防水するにはどうすればよいですか?'
]

const demoQuestions5 = [
  'In a form of haiku answer what is cement',
  'Only with emojies tell me how to use sealants'
]

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const bg = useColorModeValue('gray.50', 'gray.800')
  const { colorMode, toggleColorMode } = useColorMode()

  const [filter, setFilter] = useState('')

  const mutation = api.sikaseek.search.useMutation()

  const handleSearch = async () => {
    await mutation.mutateAsync({ text: filter })
  }

  const clickDemo = async (question: string) => {
    onClose()
    setFilter(question)
    await mutation.mutateAsync({ text: question })
  }

  return (
    <>
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
        minH='90vh'
        justify='center'
        bg={bg}
      >
        <Stack
          direction='column'
          mt={12}
          mb={36}
          maxW={{ base: '100%', sm: '90%', md: '70%' }}
        >
          <Stack
            spacing={4}
            w='100%'
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={6}
          >
            <Heading lineHeight={1.1} fontSize={{ base: '6xl' }}>
              <Stack direction='row' alignItems='baseline'>
                <Image
                  width='70px'
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
            <Stack direction='row'>
              <FormControl id="search">
                <Input
                  size='lg'
                  _placeholder={{ color: 'gray.500' }}
                  type="search"
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
                />
              </FormControl>
              <Button colorScheme="red" size='lg' rightIcon={<SearchIcon />} onClick={handleSearch} isLoading={mutation.isLoading}>Search</Button>
            </Stack>
            <Text>...or try this questions:</Text>
            <Wrap direction={{ base: "column", md: 'row' }} >
              {
                demoQuestions1.map(q => <WrapItem key={q}><Button size='sm' onClick={() => clickDemo(q)}>
                  {q}
                </Button></WrapItem>)
              }
            </Wrap>
            <Stack direction='row'>
              <Button size='sm' onClick={onOpen} colorScheme="red" rightIcon={<ArrowDownIcon />}>
                Check out more cool examples
              </Button>
            </Stack>
            <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Try out these cool questions</DrawerHeader>
                <DrawerBody px={8} pb={8}>
                  <Text my={4}>Questions about products for sales team:</Text>
                  <Wrap>
                    {demoQuestions2.map(q => <WrapItem key={q}>
                      <Button size='sm' onClick={() => clickDemo(q)}>
                        {q}
                      </Button>
                    </WrapItem>)}
                  </Wrap>
                  <Text my={4}>Questions about products for Sika customers:</Text>
                  <Wrap>
                    {demoQuestions3.map(q => <WrapItem key={q}>
                      <Button size='sm' onClick={() => clickDemo(q)}>
                        {q}
                      </Button>
                    </WrapItem>)}
                  </Wrap>
                  <Text my={4}>In different languages:</Text>
                  <Wrap>
                    {demoQuestions4.map(q => <WrapItem key={q}>
                      <Button size='sm' onClick={() => clickDemo(q)}>
                        {q}
                      </Button>
                    </WrapItem>)}
                  </Wrap>
                  <Text my={4}>Or even some fun 🤪:</Text>
                  <Wrap>
                    {demoQuestions5.map(q => <WrapItem key={q}>
                      <Button size='sm' onClick={() => clickDemo(q)}>
                        {q}
                      </Button>
                    </WrapItem>)}
                  </Wrap>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Stack>
          <ResultsSkeleton isLoading={mutation.isLoading} />
          <Results data={mutation.data} />
        </Stack>

      </Flex >
      <Flex>
        <Box bg={bg} px={16} w='100%' flexDirection='row'>
          <Text fontSize='sm' as='span' pr={4}><b>Indexed:</b> 2889 files, 120 urls</Text>
          <Text fontSize='sm' as='span' pr={4}><b>Index type:</b> Summary[Vector(web), Vector(files)]</Text>
          <Text fontSize='sm' as='span' pr={4}><b>Index ver.:</b> 16/09/23-18:23</Text>
        </Box>
      </Flex>
    </>
  );
}

type ResultsSkeletonProps = {
  isLoading: boolean
}
const ResultsSkeleton = ({ isLoading }: ResultsSkeletonProps) => {
  const bg = useColorModeValue('white', 'gray.700')
  if (!isLoading) return null
  return <Stack
    spacing={4}
    bg={bg}
    rounded={'xl'}
    boxShadow={'lg'}
    p={6}
    my={4}
  >
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
}

const Results = ({ data }: {
  data?: Response
}) => {
  const bg = useColorModeValue('white', 'gray.700')

  if (data === undefined) return null

  return (
    <>
      <Stack
        spacing={4}
        bg={bg}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={4}
      >
        <Box whiteSpace='pre-wrap'>{data.response}</Box>
        <SourceInfo sourceNodes={data.source_nodes} />
      </Stack>
    </>)
}

type SourceProps = {
  sourceNodes?: SourceNode[]
}
const SourceInfo = ({ sourceNodes }: SourceProps) => {
  if (sourceNodes === undefined) return null

  const metaSourceNodes = sourceNodes.filter(({ node }) => node.metadata.file_name !== undefined)

  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);

  const webSourceNodes = Array.from(new Set(sourceNodes.map(({ node }) => node.text.match(regex)).filter(x => x !== null).flat().reverse().slice(0, 5)))
    .filter(x => x?.includes('sika.com'))
    .filter(x => !x?.endsWith('-'))
    .map(x => x?.replaceAll('.com/.', '.com'))
    .filter(x => !x?.endsWith('.'))
    .map(x => x?.replaceAll('.html)', '.html'))

  return <Box>
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              How do I know?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Heading size="sm">This information is mentioned in: </Heading>
          {metaSourceNodes.map(({ node }) => <Box key={node.id_}>
            <Text as='u'>{node.metadata.file_name}</Text>: Page {node.metadata.page_label}
            <Textarea mt={2} mb={4} value={node.text} />
          </Box>)}
          {webSourceNodes.map((url, i) => <Box key={i}><Text as='u'><Link href={`http://${url!}`} target="_blank">{url}</Link></Text></Box>)}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Box>
}
