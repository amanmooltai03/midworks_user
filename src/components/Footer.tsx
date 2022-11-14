import { Box, Container, Link, Stack, Text } from '@chakra-ui/react'

import { LAYOUT_BACKGROUND, LAYOUT_BORDER, LAYOUT_TEXT } from '@/lib/color'

// TODO: Scrutinize Footer links.
const Footer = () => (
  <Box as='footer' bg={LAYOUT_BACKGROUND} color={LAYOUT_TEXT}>
    <Container
      as={Stack}
      maxW='6xl'
      py={4}
      spacing={4}
      justify='center'
      align='center'
    >
      <Stack
        align='center'
        fontSize={{ base: '14px', sm: '16px' }}
        direction={['column', 'row']}
        spacing={6}
      >
        <Link href='/'>利用規約</Link>
        <Link href='/'>個人情報保護方針</Link>
        <Link href='/'>メディア運営方針</Link>
      </Stack>
    </Container>

    <Box borderTopWidth={1} borderStyle='solid' borderColor={LAYOUT_BORDER}>
      <Container
        as={Stack}
        maxW='6xl'
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text> © Branding Engineer Co., Ltd.</Text>
      </Container>
    </Box>
  </Box>
)

export default Footer
