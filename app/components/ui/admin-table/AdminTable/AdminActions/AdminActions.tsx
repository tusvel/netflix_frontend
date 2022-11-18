import { useRouter } from 'next/router';
import { FC } from 'react';

import { IAdminActions } from '@/ui/admin-table/AdminTable/AdminActions/admin-actions.interface';
import { MaterialIcon } from '@/ui/icons/MaterialIcon/MaterialIcon';

import styles from './AdminActions.module.scss';

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
  const { push } = useRouter();

  return (
    <div className={styles.actions}>
      <button onClick={() => push(editUrl)}>
        <MaterialIcon name="MdEdit" />
      </button>
      <button onClick={removeHandler}>
        <MaterialIcon name="MdClose" />
      </button>
    </div>
  );
};

export default AdminActions;
