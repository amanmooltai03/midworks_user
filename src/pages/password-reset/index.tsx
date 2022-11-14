import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

import {
  BUTTON_MAIN,
  BUTTON_MAIN_HOVER,
  BUTTON_MAIN_TEXT,
  FORM_BACKGROUND,
  LAYOUT_TEXT,
  PAGE_BACKGROUND,
} from '@/lib/color'

const PasswordReset = () => (
  <Flex minH='100vh' align='center' justify='center' bg={PAGE_BACKGROUND}>
    <Stack spacing={8} w='100%' maxW='lg' py={12} px={6}>
      <Stack align='center'>
        <Heading fontSize='4xl' textAlign='center'>
          パスワード再設定
        </Heading>
        <Text fontSize='lg' color={LAYOUT_TEXT}>
          登録されているメールアドレスにパスワード再設定のためのURLをお送りします。
        </Text>
      </Stack>
      <Box rounded='lg' bg={FORM_BACKGROUND} boxShadow='lg' p={8}>
        <Stack spacing={4}>
          <FormControl id='email' isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input type='email' />
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              as='a'
              href='/password-reset/send'
              loadingText='処理中'
              size='lg'
              bg={BUTTON_MAIN}
              color={BUTTON_MAIN_TEXT}
              _hover={{
                bg: BUTTON_MAIN_HOVER,
              }}
            >
              送信する
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
)

export default PasswordReset
