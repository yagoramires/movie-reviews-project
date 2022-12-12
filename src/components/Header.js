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
import { RiUserFill } from 'react-icons/ri';
import { useAuth } from '../hooks/useAuth';

const Header = ({ user }) => {
  const { signOutUser } = useAuth();

  return (
    <header className='shadow-md bg-gray-50 '>
      <Root className='flex justify-between items-center max-w-[1200px] w-[80%] mx-auto py-4 '>
        <Link
          to='/'
          className='text-2xl font-bold transition-all duration-300 hover:tracking-wider'
        >
          movie
          <span className='text-yellow-400'>Reviews</span>
        </Link>
        <List className='relative top-[4px] '>
          {!user && (
            <Item>
              <Trigger>
                <GiHamburgerMenu size={20} className='text-yellow-400' />
              </Trigger>
              <Content className='absolute right-0 z-10 flex flex-col gap-2 p-4 shadow-md bg-gray-50'>
                <Link
                  to='/login'
                  className='px-4 text-yellow-400 transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-yellow-400'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='px-4 text-yellow-400 transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-yellow-400'
                >
                  Register
                </Link>
              </Content>
            </Item>
          )}
          {user && (
            <Item>
              <Trigger className='p-2 text-center text-yellow-400 bg-black rounded-full'>
                <RiUserFill size={15} className='text-yellow-400 ' />
              </Trigger>
              <Content className='absolute right-0 z-10 flex flex-col gap-2 p-4 shadow-md bg-gray-50'>
                <Link
                  to='/profile'
                  className='px-4 text-yellow-400 transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-yellow-400'
                >
                  Profile
                </Link>
                <Link
                  to='/favorites'
                  className='px-4 text-yellow-400 transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-yellow-400'
                >
                  Favorites
                </Link>
                <span
                  onClick={signOutUser}
                  className='px-4 text-yellow-400 transition-all duration-200 cursor-pointer hover:text-black hover:font-bold hover:border-l-4 hover:border-l-yellow-400'
                >
                  Sign out
                </span>
              </Content>
            </Item>
          )}
        </List>
      </Root>
    </header>
  );
};

export default Header;
