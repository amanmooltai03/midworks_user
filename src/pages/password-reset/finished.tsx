import { Flex, Stack, Button, Heading, Text } from '@chakra-ui/react'

import {
  BUTTON_MAIN,
  BUTTON_MAIN_TEXT,
  BUTTON_MAIN_HOVER,
  PAGE_BACKGROUND,
  LAYOUT_TEXT,
} from '@/lib/color'

const Finished = () => (
  <Flex minH='100vh' align='center' justify='center' bg={PAGE_BACKGROUND}>
    <Stack spacing={8} w='100%' maxW='lg' py={12} px={6}>
      <Stack align='center'>
        <Heading fontSize='3xl' textAlign='center'>
          パスワード再設定完了
        </Heading>
        <Text fontSize='lg' color={LAYOUT_TEXT}>
          新しいパスワードで再度ログインをお願いいたします。
        </Text>
      </Stack>
      <Stack spacing={10} pt={2}>
        <Button
          as='a'
          href='/signin'
          loadingText='処理中'
          size='lg'
          bg={BUTTON_MAIN}
          color={BUTTON_MAIN_TEXT}
          _hover={{
            bg: BUTTON_MAIN_HOVER,
          }}
        >
          ログイン画面に戻る
        </Button>
      </Stack>
    </Stack>
  </Flex>
)

export default Finished
