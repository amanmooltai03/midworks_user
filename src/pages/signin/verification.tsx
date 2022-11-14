import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

import {
  BUTTON_MAIN,
  BUTTON_MAIN_HOVER,
  BUTTON_MAIN_TEXT,
  FORM_BACKGROUND,
  LAYOUT_TEXT,
  PAGE_BACKGROUND,
} from '@/lib/color'

const Verification = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex minH='100vh' align='center' justify='center' bg={PAGE_BACKGROUND}>
      <Stack spacing={8} w='100%' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl' textAlign='center'>
            認証コードを入力
          </Heading>
          <Text fontSize='lg' color={LAYOUT_TEXT}>
            登録されている電話番号に認証コードを送信しました。
            <br />
            認証コードを入力してください。
          </Text>
        </Stack>
        <Box rounded='lg' bg={FORM_BACKGROUND} boxShadow='lg' p={8}>
          <Stack spacing={4}>
            <FormControl id='email' isRequired>
              <Input type='number' />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                as='a'
                href='/'
                loadingText='処理中'
                size='lg'
                bg={BUTTON_MAIN}
                color={BUTTON_MAIN_TEXT}
                _hover={{
                  bg: BUTTON_MAIN_HOVER,
                }}
              >
                認証する
              </Button>
            </Stack>
            <Divider />
            <Stack spacing={10} pt={2}>
              <Button
                size='md'
                onClick={() =>
                  alert('登録されている電話番号に認証コードを再送しました。')
                }
              >
                認証コードを再送する
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Verification
