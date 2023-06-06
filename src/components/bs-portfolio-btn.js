import { Link } from 'react-router-dom';

export default function PortfolioReturnBtn() {
  return (
    <div style={{textAlign:'center'}}>
        <Link className='btn btn-danger' to='/portfolio'>
        Return to Project Categories
        </Link>
    </div>
  )
}