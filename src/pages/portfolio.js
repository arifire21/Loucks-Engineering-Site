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
          <p>This is a portfolio overview page. description goes here</p>
          <p>Click on items to be taken to portfolio pages.</p>
        </header>

        <div className='portfolio-list-container'>
          <BootstrapFolioCard
            // img_src=''
            title='Single/Multifamily Residences'
            text='Lorem ipsum dummy text'
            link='/portfolio/residences'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Restaurants'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Retail Spaces'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Tenent Improvements'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Multi-Purpose'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Office Spaces'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Educational Insitiutions'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Gymnasiums'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Churches'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Medical & Dental Offices'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Media & Entertainment'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Veterinary & Pet Groomers'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Laundry Facilities'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
            <BootstrapFolioCard
            // img_src=''
            title='Storage Facilities'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Auto Body and Repair Shops'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
          <BootstrapFolioCard
            // img_src=''
            title='Other Projects'
            text='Lorem ipsum dummy text'
            link='/portfolio/#'
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}