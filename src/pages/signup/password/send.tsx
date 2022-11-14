import { Flex, Stack, Heading, Text } from '@chakra-ui/react'

import { PAGE_BACKGROUND, LAYOUT_TEXT } from '@/lib/color'

const Send = () => (
  <Flex minH='100vh' align='center' justify='center' bg={PAGE_BACKGROUND}>
    <Stack spacing={8} w='100%' maxW='lg' py={12} px={6}>
      <Stack align='center'>
        <Heading fontSize='3xl' textAlign='center'>
          パスワード設定用メール 送信完了
        </Heading>
        <Text fontSize='lg' color={LAYOUT_TEXT}>
          入力したメールアドレスに届いたメールに記載のURLから、パスワード設定を行ってください。
        </Text>
      </Stack>
    </Stack>
  </Flex>
)

export default Send
