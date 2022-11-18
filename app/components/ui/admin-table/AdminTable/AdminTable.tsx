import { FC } from 'react';

import SkeletonLoader from '@/ui/SkeletonLoader';
import AdminTableHeader from '@/ui/admin-table/AdminTable/AdminTableHeader';
import AdminTableItem from '@/ui/admin-table/AdminTable/AdminTableItem';
import { IAdminTable } from '@/ui/admin-table/AdminTable/admin-talbe.interface';

import styles from './AdminTable.module.scss';

const AdminTable: FC<IAdminTable> = ({
  headerItems,
  isLoading,
  removeHandler,
  tableItems
}) => {
  return (
    <div>
      <AdminTableHeader headerItems={headerItems} />
      {isLoading ? (
        <SkeletonLoader count={1} height={48} className="mt-4" />
      ) : tableItems.length ? (
        tableItems.map((tableItem) => (
          <AdminTableItem
            key={tableItem._id}
            tableItem={tableItem}
            removeHandler={() => removeHandler(tableItem._id)}
          />
        ))
      ) : (
        <div className={styles.notFound}>Elements not found</div>
      )}
    </div>
  );
};

export default AdminTable;
