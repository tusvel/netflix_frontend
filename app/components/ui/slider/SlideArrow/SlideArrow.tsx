import cn from 'classnames';
import { FC } from 'react';

import { MaterialIcon } from '@/ui/icons/MaterialIcon/MaterialIcon';
import { ISlideArrow } from '@/ui/slider/SlideArrow/slide-arrow.interface';

import styles from './SlideArrow.module.scss';

const SlideArrow: FC<ISlideArrow> = ({ clickHandler, variant }) => {
  const isLeft = variant === 'left';

  return (
    <button
      onClick={clickHandler}
      className={cn(styles.arrow, {
        [styles.left]: isLeft,
        [styles.right]: !isLeft
      })}
      aria-label={isLeft ? 'previous slide' : 'next slide'}
    >
      <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
    </button>
  );
};

export default SlideArrow;
