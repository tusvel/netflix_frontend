import { FC } from 'react';
import Meta from '@/utils/meta/Meta';
import Heading from '@/ui/Heading/Heading';

const Error404: FC = () => {
  return (
    <Meta title='Page not found'>
      <Heading title='404 - Page Not Found'/>
    </Meta>
  );
};

export default Error404;
