import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
