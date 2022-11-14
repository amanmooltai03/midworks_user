import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

import {
  BUTTON_MAIN,
  BUTTON_MAIN_HOVER,
  BUTTON_MAIN_TEXT,
  FORM_BACKGROUND,
  PAGE_BACKGROUND,
  TEXT_LINK,
} from '@/lib/color'

const SignUp = () => (
  <Flex minH='100vh' align='center' justify='center' bg={PAGE_BACKGROUND}>
    <Stack spacing={8} w='100%' maxW='lg' py={12} px={6}>
      <Stack align='center'>
        <Heading fontSize='4xl' textAlign='center'>
          担当者登録
        </Heading>
      </Stack>
      <Box rounded='lg' bg={FORM_BACKGROUND} boxShadow='lg' p={8}>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id='firstName' isRequired>
                <FormLabel>姓</FormLabel>
                <Input type='text' />
              </FormControl>
            </Box>
            <Box>
              <FormControl id='lastName' isRequired>
                <FormLabel>名</FormLabel>
                <Input type='text' />
              </FormControl>
            </Box>
          </HStack>
          <HStack>
            <Box>
              <FormControl id='firstNameKana' isRequired>
                <FormLabel>セイ</FormLabel>
                <Input type='text' />
              </FormControl>
            </Box>
            <Box>
              <FormControl id='lastNameKana' isRequired>
                <FormLabel>メイ</FormLabel>
                <Input type='text' />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id='email' isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl id='phone' isRequired>
            <FormLabel>電話番号</FormLabel>
            <Input type='tel' />
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              as='a'
              href='/signup/password/send'
              loadingText='処理中'
              size='lg'
              bg={BUTTON_MAIN}
              color={BUTTON_MAIN_TEXT}
              _hover={{
                bg: BUTTON_MAIN_HOVER,
              }}
            >
              登録する
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align='center'>
              アカウントをお持ちの方は{' '}
              <Link color={TEXT_LINK} href='singin'>
                ログイン
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
)

export default SignUp
