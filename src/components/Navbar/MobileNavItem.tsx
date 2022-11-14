import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import { LAYOUT_BORDER, LAYOUT_TEXT, LAYOUT_TEXT_HOVER } from '@/lib/color'
import NavItem from '@/types/navItem'

const MobileNavItem = ({ children, label, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify='space-between'
        align='center'
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={LAYOUT_TEXT}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color={LAYOUT_TEXT_HOVER}
            transition='all .25s ease-in-out'
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle='solid'
          borderColor={LAYOUT_BORDER}
          align='start'
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                color={LAYOUT_TEXT_HOVER}
                py={2}
                href={child.href}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

export default MobileNavItem
