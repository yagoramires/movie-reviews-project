// Routes
import { Link } from 'react-router-dom';

// Radix Imports
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
} from '@radix-ui/react-navigation-menu';

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUserLine } from 'react-icons/ri';

const Header = () => {
  const user = false;

  return (
    <Root className='flex justify-between items-center max-w-[1200px] w-[80%] mx-auto py-4'>
      <h1 className='text-2xl font-bold'>
        movie<span className='text-yellow-400'>Reviews</span>
      </h1>
      <List className='relative right-4'>
        {!user && (
          <Item className=''>
            <Trigger className=''>
              <GiHamburgerMenu size={20} className='text-yellow-400' />
            </Trigger>
            <Content className='flex flex-col'>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </Content>
          </Item>
        )}
        {user && (
          <Item>
            <Trigger className=''>
              <RiUserLine />
            </Trigger>
            <Content className=''>
              <Link to='/profile'>Profile</Link>
              <Link to='/favorites'>Favorites</Link>
              <span onClick={() => {}}>Sign out</span>
            </Content>
          </Item>
        )}
      </List>
    </Root>
  );
};

export default Header;
