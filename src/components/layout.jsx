import BootstrapNavbar from './navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='grid-container'>
      <BootstrapNavbar />
      <main id='grid-content'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
