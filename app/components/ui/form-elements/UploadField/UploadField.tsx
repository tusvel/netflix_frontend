import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import SkeletonLoader from '@/ui/SkeletonLoader';
import { IUploadField } from '@/ui/form-elements/UploadField/upload-field.interface';
import { useUpload } from '@/ui/form-elements/UploadField/useUpload';

import styles from '../form.module.scss';

const UploadField: FC<IUploadField> = ({
  error,
  onChange,
  folder,
  style,
  value,
  isNoImage = false,
  placeholder
}) => {
  const { isLoading, uploadFile } = useUpload(onChange, folder);

  return (
    <div className={cn(styles.field, styles.uploadField)} style={style}>
      <div className={styles.uploadFlex}>
        <label>
          <span>{placeholder}</span>
          <input type="file" onChange={uploadFile} />
          {error && <div className={styles.error}>{error.message}</div>}
        </label>

        {!isNoImage && (
          <div className={styles.uploadImageContainer}>
            {isLoading ? (
              <SkeletonLoader count={1} className="w-full h-full" />
            ) : (
              value && <Image src={value} alt="" layout="fill" unoptimized />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadField;
