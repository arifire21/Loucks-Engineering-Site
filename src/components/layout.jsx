import BootstrapNavbar from './navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='grid-container'>
      <BootstrapNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
