import Logo from '../../images/logo.png';
import CarouselNew from '../Widgets/CarouselNew';

export default function HomeBody() {
    return(
        <div>
            <div className='home-container'>
            <div className='home-item'>
                <img src={Logo} alt="lei logo"/>
            </div>
            <div className='home-item'>
                <CarouselNew/>
            </div>
            </div>

            <hr className='titleheader'/>

            <p>company tagline</p>
            <p>Loucks Engineering Inc. specializes in mechanical, electrical, and plumbing systems.</p>
            <p>cool placeholder stuff</p>
        </div>
    )
}