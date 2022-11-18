import { FC } from 'react';
import { useForm } from 'react-hook-form';

import styles from '@/pages/auth/Auth.module.scss';
import AuthFields from '@/pages/auth/AuthFields';
import { IProfileInput } from '@/pages/profile/profile.interface';
import { useProfile } from '@/pages/profile/useProfile';

import Heading from '@/ui/Heading/Heading';
import SkeletonLoader from '@/ui/SkeletonLoader';
import Button from '@/ui/form-elements/Button';

import Meta from '@/utils/meta/Meta';

const Profile: FC = () => {
  const { handleSubmit, register, formState, setValue } =
    useForm<IProfileInput>({
      mode: 'onChange'
    });

  const { isLoading, onSubmit } = useProfile(setValue);

  return (
    <Meta title="Profile">
      <Heading title="Profile" className="mb-6" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading ? (
          <SkeletonLoader count={2} />
        ) : (
          <AuthFields formState={formState} register={register} />
        )}

        <Button>Update</Button>
      </form>
    </Meta>
  );
};

export default Profile;
