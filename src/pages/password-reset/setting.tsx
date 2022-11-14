import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

import { BUTTON_MAIN, BUTTON_MAIN_TEXT, BUTTON_MAIN_HOVER } from '@/lib/color'

// TODO: Consider making the password form a common component.
const Setting = () => {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false)

  return (
    <Flex minH='100vh' align='center' justify='center' bg='gray.50'>
      <Stack spacing={8} w='100%' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl' textAlign='center'>
            パスワード再設定
          </Heading>
          <Text fontSize='lg' color='gray.600'>
            新しいパスワードを入力して再設定してください。
          </Text>
        </Stack>
        <Box rounded='lg' bg='white' boxShadow='lg' p={8}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>新しいパスワード</FormLabel>
              <InputGroup>
                <Input type={showNewPassword ? 'text' : 'password'} />
                <InputRightElement h='full'>
                  <Button
                    variant='ghost'
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>新しいパスワード（確認）</FormLabel>
              <InputGroup>
                <Input type={showNewPasswordConfirm ? 'text' : 'password'} />
                <InputRightElement h='full'>
                  <Button
                    variant='ghost'
                    onClick={() =>
                      setShowNewPasswordConfirm(!showNewPasswordConfirm)
                    }
                  >
                    {showNewPasswordConfirm ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                as='a'
                href='/password-reset/finished'
                loadingText='処理中'
                size='lg'
                bg={BUTTON_MAIN}
                color={BUTTON_MAIN_TEXT}
                _hover={{
                  bg: BUTTON_MAIN_HOVER,
                }}
              >
                設定する
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Setting
