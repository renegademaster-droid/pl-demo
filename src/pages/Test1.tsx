import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

const TEAM_MEMBERS = [
  { id: '1', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '2', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '3', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '4', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '5', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '6', title: 'Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

export function Test1() {
  return (
    <Box
      as="main"
      className="test1-page"
      minH="100vh"
      w="full"
      bg="bg.default"
      color="fg"
    >
      {/* Otsikko ja ingressi – rajattu sisältö */}
      <Box
        w="full"
        maxW="64rem"
        mx="auto"
        px={{ base: '4', md: '8' }}
        boxSizing="border-box"
      >
        <Box as="section" bg="bg.panel" py="10">
          <VStack align="stretch" gap="4" textAlign="start" maxW="2xl">
            <Heading size="xl" fontWeight="semibold">
              Our team
            </Heading>
            <Text color="fg.muted" textStyle="md" lineHeight="relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </VStack>
        </Box>
      </Box>

      {/* Harmaa alue fluid 100 % leveys, sisältö rajattu */}
      <Box
        as="section"
        w="full"
        bg="bg.subtle"
        py="10"
        borderTopWidth="1px"
        borderColor="border.default"
      >
        <Box
          w="full"
          maxW="64rem"
          mx="auto"
          px={{ base: '4', md: '8' }}
          boxSizing="border-box"
        >
          <Grid
            w="full"
            gridTemplateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gridTemplateRows="repeat(2, auto)"
            gap="6"
            mb="8"
          >
            {TEAM_MEMBERS.map((member) => (
              <Card.Root
                key={member.id}
                bg="bg.panel"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="border.default"
                boxShadow="sm"
                overflow="hidden"
              >
                <Card.Body p="6">
                  <VStack gap="4" align="start" textAlign="start">
                    <Box
                      w="16"
                      h="16"
                      borderRadius="full"
                      bg="bg.muted"
                      flexShrink={0}
                    />
                    <Heading size="md" fontWeight="semibold">
                      {member.title}
                    </Heading>
                    <Text color="fg.muted" textStyle="sm" lineHeight="tall">
                      {member.description}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
          <Box textAlign="center">
            <Button colorPalette="brand" size="lg">
              Get quote
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
