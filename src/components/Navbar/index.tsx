import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  useDisclosure,
  Box,
  Avatar,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Collapse,
} from '@chakra-ui/react'

import DesktopNav from '@/components/Navbar/DesktopNav'
import { LAYOUT_BACKGROUND, LAYOUT_TEXT_HOVER } from '@/lib/color'
import { SITE_TITLE } from '@/lib/constants'

import MobileNav from './MobileNav'

// TODO: Set a profile picture for avatar.
// TODO: Navigation menu is not displayed when the user is not logged in.
// TODO: Consider using different header and nav tags.
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as='header' bg={LAYOUT_BACKGROUND} px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <IconButton
          color={LAYOUT_TEXT_HOVER}
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label='Open Menu'
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems='center'>
          <Box fontWeight='bold' color='gray.800'>
            {SITE_TITLE}
          </Box>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </HStack>
        <Flex alignItems='center'>
          <Menu>
            <MenuButton
              as={Button}
              rounded='full'
              variant='link'
              cursor='pointer'
              minW={0}
            >
              <Avatar size='sm' />
            </MenuButton>
            <MenuList>
              <MenuItem color={LAYOUT_TEXT_HOVER}>個人設定</MenuItem>
              <MenuItem color={LAYOUT_TEXT_HOVER}>お知らせ</MenuItem>
              <MenuDivider />
              <MenuItem color={LAYOUT_TEXT_HOVER}>ログアウト</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

export default Header
