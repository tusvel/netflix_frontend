import UserEdit from '@/pages/admin/user/UserEdit';

import { NextPageAuth } from '@/shared/types/auth.types';

const UserEditPage: NextPageAuth = () => {
  return <UserEdit />;
};

UserEditPage.isOnlyAdmin = true;

export default UserEditPage;
