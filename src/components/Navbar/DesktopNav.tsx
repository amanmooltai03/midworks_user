import {
  Box,
  Link,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react'

import DesktopSubNav from '@/components/Navbar/DesktopSubNav'
import { LAYOUT_TEXT, LAYOUT_TEXT_HOVER } from '@/lib/color'
import { NAV_ITEMS } from '@/lib/constants'

const DesktopNav = () => (
  <Stack as='nav' direction='row' spacing={4}>
    {NAV_ITEMS.map((navItem) => (
      <Box key={navItem.label}>
        <Popover trigger='hover' placement='bottom-start'>
          <PopoverTrigger>
            <Link
              p={2}
              fontSize='sm'
              fontWeight={500}
              color={LAYOUT_TEXT}
              _hover={{
                textDecoration: 'none',
                color: { LAYOUT_TEXT_HOVER },
              }}
            >
              {navItem.label}
            </Link>
          </PopoverTrigger>

          {navItem.children && (
            <PopoverContent
              border={0}
              boxShadow='xl'
              bg='white'
              p={4}
              rounded='xl'
              w={220}
            >
              <Stack as='nav'>
                {navItem.children.map((child) => (
                  <DesktopSubNav
                    key={child.label}
                    label={child.label}
                    href={child.href}
                  />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Box>
    ))}
  </Stack>
)

export default DesktopNav
