import { FC } from 'react';

import LogoutButton from '@/components/layout/Navigation/Menu/MenuList/LogoutButton/LogoutButton';
import MenuItem from '@/components/layout/Navigation/Menu/MenuList/MenuItem/MenuItem';

import { useAuth } from '@/hooks/useAuth';

import { getAdminHomeUrl } from '@/config/url.config';

const AuthItems: FC = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <MenuItem
            item={{
              icon: 'MdSettings',
              link: '/profile',
              title: 'Profile'
            }}
          />
          <LogoutButton />
        </>
      ) : (
        <MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
      )}

      {user?.isAdmin && (
        <MenuItem
          item={{
            icon: 'MdOutlineLock',
            link: getAdminHomeUrl(),
            title: 'Admin panel'
          }}
        />
      )}
    </>
  );
};

export default AuthItems;
