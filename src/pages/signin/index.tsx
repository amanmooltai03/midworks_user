import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

import {
  BUTTON_MAIN,
  BUTTON_MAIN_HOVER,
  BUTTON_MAIN_TEXT,
  FORM_BACKGROUND,
  PAGE_BACKGROUND,
  TEXT_LINK,
} from '@/lib/color'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex minH='100vh' align='center' justify='center' bg={PAGE_BACKGROUND}>
      <Stack spacing={8} w='100%' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl' textAlign='center'>
            担当者ログイン
          </Heading>
        </Stack>
        <Box rounded='lg' bg={FORM_BACKGROUND} boxShadow='lg' p={8}>
          <Stack spacing={4}>
            <FormControl id='email' isRequired>
              <FormLabel>メールアドレス</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>パスワード</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h='full'>
                  <Button
                    variant='ghost'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                as='a'
                href='/signin/verification'
                loadingText='処理中'
                size='lg'
                bg={BUTTON_MAIN}
                color={BUTTON_MAIN_TEXT}
                _hover={{
                  bg: BUTTON_MAIN_HOVER,
                }}
              >
                ログイン
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align='center'>
                パスワードをお忘れの方は{' '}
                <Link color={TEXT_LINK} href='/password-reset'>
                  こちら
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignIn
