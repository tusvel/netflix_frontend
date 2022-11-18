import { FC } from 'react';

import SearchField from '@/ui/SearchField/SearchField';
import AdminCreateButton from '@/ui/admin-table/AdminCreateButton/AdminCreateButton';
import { IAdminHeader } from '@/ui/admin-table/AdminHeader/admin-header.interface';

import styles from './AdminHeader.module.scss';

const AdminHeader: FC<IAdminHeader> = ({
  onClick,
  searchTerm,
  handleSearch
}) => {
  return (
    <div className={styles.header}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {onClick && <AdminCreateButton onClick={onClick} />}
    </div>
  );
};

export default AdminHeader;
