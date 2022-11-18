import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { IMovieEditInput } from '@/pages/admin/movie/movie-edit.interface';
import { useAdminActors } from '@/pages/admin/movie/useAdminActors';
import { useAdminGenre } from '@/pages/admin/movie/useAdminGenre';
import { useMovieEdit } from '@/pages/admin/movie/useMovieEdit';

import formStyles from '@/components/shared/admin/adminForm.module.scss';

import Heading from '@/ui/Heading/Heading';
import SkeletonLoader from '@/ui/SkeletonLoader';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Button from '@/ui/form-elements/Button';
import Field from '@/ui/form-elements/Field';
import SlugField from '@/ui/form-elements/SlugField/SlugField';
import UploadField from '@/ui/form-elements/UploadField/UploadField';

import Meta from '@/utils/meta/Meta';
import { generateSlug } from '@/utils/string/generateSlug';

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
  ssr: false
});

const MovieEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control
  } = useForm<IMovieEditInput>({
    mode: 'onChange'
  });

  const { onSubmit, isLoading } = useMovieEdit(setValue);

  const { isLoading: isGenresLoading, data: genres } = useAdminGenre();
  const { isLoading: isActorsLoading, data: actors } = useAdminActors();

  return (
    <Meta title="Edit actor">
      <AdminNavigation />
      <Heading title="Edit actor" />
      <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <div className={formStyles.fields}>
              <Field
                {...register('title', {
                  required: 'Title is required!'
                })}
                placeholder="Title"
                error={errors.title}
                style={{ width: '31%' }}
              />
              <SlugField
                register={register}
                error={errors.slug}
                generate={() => {
                  setValue('slug', generateSlug(getValues('title')));
                }}
              />

              <Field
                {...register('parameters.country', {
                  required: 'Country is required!'
                })}
                placeholder="Country"
                error={errors.parameters?.country}
                style={{ width: '31%' }}
              />
              <Field
                {...register('parameters.duration', {
                  required: 'Duration is required!'
                })}
                placeholder="Duration (min.)"
                error={errors.parameters?.duration}
                style={{ width: '31%' }}
              />
              <Field
                {...register('parameters.year', {
                  required: 'Year is required!'
                })}
                placeholder="Year"
                error={errors.parameters?.year}
                style={{ width: '31%' }}
              />

              <Controller
                control={control}
                name="genres"
                render={({ field, fieldState: { error } }) => (
                  <DynamicSelect
                    field={field}
                    options={genres || []}
                    isLoading={isGenresLoading}
                    isMulti
                    placeholder="Genres"
                    error={error}
                  />
                )}
                rules={{
                  required: 'Please select at least one genre!'
                }}
              />
              <Controller
                control={control}
                name="actors"
                render={({ field, fieldState: { error } }) => (
                  <DynamicSelect
                    field={field}
                    options={actors || []}
                    isLoading={isActorsLoading}
                    isMulti
                    placeholder="Actors"
                    error={error}
                  />
                )}
                rules={{
                  required: 'Please select at least one actor!'
                }}
              />

              <Controller
                control={control}
                name="poster"
                defaultValue=""
                render={({
                  field: { value, onChange },
                  fieldState: { error }
                }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    folder="movies"
                    placeholder="Poster"
                    error={error}
                  />
                )}
                rules={{
                  required: 'Poster is required!'
                }}
              />
              <Controller
                control={control}
                name="bigPoster"
                defaultValue=""
                render={({
                  field: { value, onChange },
                  fieldState: { error }
                }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    folder="movies"
                    placeholder="Big poster"
                    error={error}
                  />
                )}
                rules={{
                  required: 'Big poster is required!'
                }}
              />
              <Controller
                control={control}
                name="videoUrl"
                defaultValue=""
                render={({
                  field: { value, onChange },
                  fieldState: { error }
                }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    folder="movies"
                    placeholder="Video"
                    isNoImage
                    style={{ marginTop: -25 }}
                    error={error}
                  />
                )}
                rules={{
                  required: 'Video is required!'
                }}
              />
            </div>
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};

export default MovieEdit;
