import { Stack } from '@chakra-ui/react'

import MobileNavItem from '@/components/Navbar/MobileNavItem'
import { LAYOUT_BACKGROUND } from '@/lib/color'
import { NAV_ITEMS } from '@/lib/constants'

const MobileNav = () => (
  <Stack as='nav' bg={LAYOUT_BACKGROUND} p={4} display={{ md: 'none' }}>
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
)

export default MobileNav
