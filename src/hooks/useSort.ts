import { useState, useMemo } from "react";

import { TConfig, TClassName } from '../helpers/types'

const initialState = {
  key: '',
  direction: '',
}

const useSort = (items: Array<any>) => {
  const [sortConfig, setSortConfig] = useState<TConfig>(initialState);

  const requestSort = (key: string) => {
    let direction: TClassName = "ascending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  };

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }

        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  return { items: sortedItems, sortConfig, requestSort };
};

export default useSort;
