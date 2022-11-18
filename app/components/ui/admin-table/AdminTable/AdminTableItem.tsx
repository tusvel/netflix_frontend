import { FC } from 'react';

import AdminActions from '@/ui/admin-table/AdminTable/AdminActions/AdminActions';
import { IAdminTableItem } from '@/ui/admin-table/AdminTable/admin-talbe.interface';

import styles from './AdminTable.module.scss';

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
  return (
    <div className={styles.item}>
      {tableItem.items.map((value) => (
        <div key={value}>{value}</div>
      ))}
      <AdminActions
        editUrl={tableItem.editUrl}
        removeHandler={() => removeHandler(tableItem._id)}
      />
    </div>
  );
};

export default AdminTableItem;
