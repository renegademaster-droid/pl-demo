import { Link as RouterLink, Outlet } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'

const navItems = [
  { to: '/', label: 'Login' },
  { to: '/test1', label: 'Test1' },
]

export function Layout() {
  return (
    <Box minH="100vh" bg="bg.default" color="fg">
      <Box
        as="nav"
        borderBottomWidth="1px"
        borderColor="border.default"
        bg="bg.panel"
        px="4"
        py="3"
      >
        <Flex gap="6" align="center" maxW="container.xl" mx="auto">
          {navItems.map(({ to, label }) => (
            <RouterLink key={to} to={to} style={{ textDecoration: 'none' }}>
              <Box as="span" textStyle="sm" fontWeight="medium" color="fg" _hover={{ color: 'fg.muted' }}>
                {label}
              </Box>
            </RouterLink>
          ))}
        </Flex>
      </Box>
      <Box as="div" w="full" minW="0">
        <Outlet />
      </Box>
    </Box>
  )
}
