import { FC } from 'react';

import { ISearchField } from '@/ui/SearchField/search-field.interface';
import { MaterialIcon } from '@/ui/icons/MaterialIcon/MaterialIcon';

import styles from './SearchField.module.scss';

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon name="MdSearch" />
      <input placeholder="Search" value={searchTerm} onChange={handleSearch} />
    </div>
  );
};

export default SearchField;
