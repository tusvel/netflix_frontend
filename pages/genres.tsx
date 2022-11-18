import { GetStaticProps, NextPage } from 'next';

import Collections from '@/pages/collections/Collections';
import { ICollection } from '@/pages/collections/collections.interface';

import { GenreService } from '@/services/genre.service';

import Error404 from './404';

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
  collections
}) => {
  return collections ? (
    <Collections collections={collections || []} />
  ) : (
    <Error404 />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: collections } = await GenreService.getCollections();

    return {
      props: {
        collections
      },
      revalidate: 60
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

export default GenresPage;
