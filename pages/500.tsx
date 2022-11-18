import { FC } from 'react';

import Heading from '@/ui/Heading/Heading';

import Meta from '@/utils/meta/Meta';

const Error500: FC = () => {
  return (
    <Meta title="Page not found">
      <Heading title="500 - Server-side error occurred" />
    </Meta>
  );
};

export default Error500;
