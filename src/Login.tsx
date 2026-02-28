import { useState } from 'react'
import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo: ei oikeaa kirjautumista
    console.log('Login', { email, password })
  }

  return (
    <Box
      as="main"
      minH="100vh"
      bg="bg.default"
      color="fg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="4"
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        w="full"
        maxW="400px"
        bg="bg.panel"
        borderWidth="1px"
        borderColor="border.default"
        borderRadius="lg"
        p="8"
        boxShadow="sm"
      >
        <VStack gap="6" align="stretch">
          <Box textAlign="center">
            <Heading size="xl" fontWeight="semibold" mb="2">
              Kirjaudu
            </Heading>
            <Text color="fg.muted" textStyle="sm">
              Syötä sähköposti ja salasana
            </Text>
          </Box>

          <Field.Root>
            <Field.Label>Sähköposti</Field.Label>
            <Input
              type="email"
              placeholder="nimi@esimerkki.fi"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="bg.default"
              autoComplete="email"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Salasana</Field.Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="bg.default"
              autoComplete="current-password"
            />
          </Field.Root>

          <Button type="submit" colorPalette="brand" width="full" size="lg">
            Kirjaudu sisään
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}
