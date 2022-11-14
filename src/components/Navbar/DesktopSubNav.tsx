import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react'

import {
  LAYOUT_BACKGROUND_HOVER,
  LAYOUT_ICON,
  LAYOUT_TEXT_HOVER,
} from '@/lib/color'
import NavItem from '@/types/navItem'

const DesktopSubNav = ({ label, href }: NavItem) => (
  <Link
    href={href}
    role='group'
    display='block'
    p={2}
    rounded='md'
    _hover={{ bg: LAYOUT_BACKGROUND_HOVER }}
  >
    <Stack direction='row' align='center'>
      <Box>
        <Text
          color={LAYOUT_TEXT_HOVER}
          transition='all .3s ease'
          fontWeight={500}
        >
          {label}
        </Text>
      </Box>
      <Flex
        transition='all .3s ease'
        transform='translateX(-10px)'
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify='flex-end'
        align='center'
        flex={1}
      >
        <Icon color={LAYOUT_ICON} w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Link>
)

export default DesktopSubNav
