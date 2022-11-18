import { FC } from 'react';

import SearchList from '@/components/layout/Sidebar/Search/SearchList/SearchList';
import { useSearch } from '@/components/layout/Sidebar/Search/useSearch';

import SearchField from '@/ui/SearchField/SearchField';

import styles from './Search.module.scss';

const Search: FC = () => {
  const { isSuccess, data, handleSearch, searchTerm } = useSearch();

  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  );
};

export default Search;
