import { Link } from 'react-router-dom';
import PublishedDate from '../headerContent/publishedDate';

const Logo = () => {
  return (
    <Link to={'/'}>
      <img src="/headerLogo.png" alt="logo" />
      <span className='text-center mt-1 lg:hidden'><PublishedDate/></span>
    </Link>
  );
};

export default Logo;
