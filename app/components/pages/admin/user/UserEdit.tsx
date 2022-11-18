import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useUserEdit } from '@/pages/admin/user/useUserEdit';
import { IUserEditInput } from '@/pages/admin/user/user-edit.interface';
import AuthFields from '@/pages/auth/AuthFields';

import formStyles from '@/components/shared/admin/adminForm.module.scss';

import Heading from '@/ui/Heading/Heading';
import SkeletonLoader from '@/ui/SkeletonLoader';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Button from '@/ui/form-elements/Button';

import Meta from '@/utils/meta/Meta';

const DynamicTextEditor = dynamic(
  () => import('@/ui/form-elements/TextEditor'),
  {
    ssr: false
  }
);

const UserEdit: FC = () => {
  const { handleSubmit, register, formState, setValue, control } =
    useForm<IUserEditInput>({
      mode: 'onChange'
    });

  const { onSubmit, isLoading } = useUserEdit(setValue);

  return (
    <Meta title="Edit user">
      <AdminNavigation />
      <Heading title="Edit user" />
      <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <AuthFields register={register} formState={formState} />

            <Controller
              name="isAdmin"
              control={control}
              render={({ field }) => (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    field.onChange(!field.value);
                  }}
                  className="text-link block mb-7"
                >
                  {field.value ? 'Make it regular user' : 'Make it admin'}
                </button>
              )}
            />

            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};

export default UserEdit;
