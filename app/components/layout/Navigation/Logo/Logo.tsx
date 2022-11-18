import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoImage from '@/assets/images/logo.svg';

import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <Image
          src={logoImage}
          alt="Netflix"
          draggable={false}
          height={33}
          width={105}
          priority
        />
      </a>
    </Link>
  );
};

export default Logo;
