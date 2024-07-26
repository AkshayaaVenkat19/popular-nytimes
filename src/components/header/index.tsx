import Content from './headerContent';
import Logo from './logo';
import SignIn from './sigIn';
import BreakLine from '../breakLine';

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <Content />
        <Logo />
        <SignIn />
      </div>
      <BreakLine />
    </>
  );
};

export default Header;
