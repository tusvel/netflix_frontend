import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';

import { IGenreEditInput } from '@/pages/admin/genre/genre-edit.interface';
import { useGenreEdit } from '@/pages/admin/genre/useGenreEdit';

import formStyles from '@/components/shared/admin/adminForm.module.scss';

import Heading from '@/ui/Heading/Heading';
import SkeletonLoader from '@/ui/SkeletonLoader';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Button from '@/ui/form-elements/Button';
import Field from '@/ui/form-elements/Field';
import SlugField from '@/ui/form-elements/SlugField/SlugField';

import Meta from '@/utils/meta/Meta';
import { generateSlug } from '@/utils/string/generateSlug';

const DynamicTextEditor = dynamic(
  () => import('@/ui/form-elements/TextEditor'),
  {
    ssr: false
  }
);

const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control
  } = useForm<IGenreEditInput>({
    mode: 'onChange'
  });

  const { onSubmit, isLoading } = useGenreEdit(setValue);

  return (
    <Meta title="Edit genre">
      <AdminNavigation />
      <Heading title="Edit genre" />
      <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <div className={formStyles.fields}>
              <Field
                {...register('name', {
                  required: 'Name is required!'
                })}
                placeholder="Name"
                error={errors.name}
                style={{ width: '31%' }}
              />
              <div style={{ width: '31%' }}>
                <SlugField
                  register={register}
                  error={errors.slug}
                  generate={() => {
                    setValue('slug', generateSlug(getValues('name')));
                  }}
                />
              </div>
              <Field
                {...register('icon', {
                  required: 'Icon is required!'
                })}
                placeholder="Icon"
                error={errors.icon}
                style={{ width: '31%' }}
              />
            </div>
            <Controller
              control={control}
              name="description"
              defaultValue=""
              render={({
                field: { value, onChange },
                fieldState: { error }
              }) => (
                <DynamicTextEditor
                  onChange={onChange}
                  value={value}
                  error={error}
                  placeholder="Description"
                />
              )}
              rules={{
                validate: {
                  required: (v) =>
                    (v && stripHtml(v).result.length > 0) ||
                    'Description is required'
                }
              }}
            />
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};

export default GenreEdit;
