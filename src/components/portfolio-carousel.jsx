import {HiOutlineExternalLink} from 'react-icons/hi';

export default function PortfolioCarousel(array) {
    return(
        <div>
        {array.map((item, index) =>
            <div className='portfolio-item' key={index}>
                {item.image ?
                    <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
                :
                    <div className='portfolio-img-placeholder'>No image available</div>
                }
                {item.website ?
                    <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                :
                    <p className='link-placeholder'>{item.name}</p>
                }
            </div>
        )}

        <div className='dot-container'>
            {array.map((_, index) => 
                <button key={index} className='dot'>{index}</button>
            )}
        </div>

        {/* <div className='portfolio-item'>
            <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
        </div> */}
    </div>
    )
}