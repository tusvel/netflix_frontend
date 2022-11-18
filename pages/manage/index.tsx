import Admin from '@/pages/admin/home/Admin';

import { NextPageAuth } from '@/shared/types/auth.types';

const AdminPage: NextPageAuth = () => {
  return <Admin />;
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
