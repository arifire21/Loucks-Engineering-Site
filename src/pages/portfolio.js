import BootstrapNavbar from '../components/boostrap-components/bs-navbar';
import Footer from '../components/Widgets/Footer';
import BootstrapFolioCard from '../components/boostrap-components/bs-portfolio-card';
import Helmet from 'react-helmet';

export default function Portfolio() {
  return (
    <div>
      <Helmet>
      <title>Projects | Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar />

      <div className='page-contents'>
        <header>
          <h1>Project Portfolio</h1>
          <p>This is a portfolio overview page of our various projects.</p>
          {/* <p>Click on items to be taken to portfolio pages.</p> */}
        </header>

        <div className='portfolio-list-container'>
          <BootstrapFolioCard
            // img_src=''
            title='Single/Multifamily Residences'
            link='/portfolio/residences'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Restaurants'
            link='/portfolio/restaurants'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Retail Spaces'
            link='/portfolio/retail'
          />
          {/* <BootstrapFolioCard
            // img_src=''
            title='Tenent Improvements'
            link='/portfolio/tenent-impr'
          /> */}
          <BootstrapFolioCard
            // img_src=''
            title='Multi-Purpose'
            link='/portfolio/multipurpose'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Office Spaces'
            link='/portfolio/offices'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Educational Insitiutions'
            link='/portfolio/education'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Gymnasiums'
            link='/portfolio/gyms'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Aviation Services'
            link='/portfolio/aviation'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Churches'
            link='/portfolio/worship'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Medical & Dental Offices'
            link='/portfolio/medical-dental'
          />
          {/* <BootstrapFolioCard
            // img_src=''
            title='Media & Entertainment'
            link='/portfolio/media'
          /> */}
          <BootstrapFolioCard
            // img_src=''
            title='Veterinary & Pet Groomers'
            link='/portfolio/pets'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Laundry Facilities'
            link='/portfolio/laundry'
          />
            <BootstrapFolioCard
            // img_src=''
            title='Storage Facilities'
            link='/portfolio/storage'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Auto Body and Repair Shops'
            link='/portfolio/auto-repair'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Other Projects'
            link='/portfolio/other'
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}