import { FC } from 'react';

import Field from '@/ui/form-elements/Field';
import { ISlugField } from '@/ui/form-elements/SlugField/slug-field.interface';

import styles from './SlugField.module.scss';

const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
  return (
    <div className="relative">
      <Field
        {...register('slug', {
          required: 'Slug is required!'
        })}
        placeholder="Slug"
        error={error}
      />
      <div className={styles.badge} onClick={generate}>
        generate
      </div>
    </div>
  );
};

export default SlugField;
