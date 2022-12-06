import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './components/FilterBar/FilterBar.jsx';
import ListContent from './components/ListContent/ListContent';
import ListHeader from './components/listHeader/ListHeader';
import standardObject from './components/FilterBar/constantData/standardObject';

import './itemList.scss';

function ItemList() {
  const [products, setProducts] = useState<object[]>([]);
  const [sortStandard, setSortStandard] = useState<string>('신상품순');
  const [filterHider, setFilterHider] = useState<boolean>(true);
  const [checkList, setCheckList] = useState<CheckList>({});
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [, setSearchParams] = useSearchParams();

  const itemListCount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sortStandardForSubmit = standardObject[sortStandard];
    let urlForSubmit = `offset=${offset}&limit=${limit}&sort=${sortStandardForSubmit}&`;

    selectedSize.map(size => (urlForSubmit = urlForSubmit + `size=${size}&`));
    selectedColor.map(
      color => (urlForSubmit = urlForSubmit + `color=${color}&`)
    );
    for (const checkListName in checkList) {
      checkList[checkListName].map(
        // eslint-disable-next-line no-loop-func
        checkedList =>
          (urlForSubmit = urlForSubmit + `${checkListName}=${checkedList}&`)
      );
    }
    setSearchParams(urlForSubmit);
    fetch('http://192.168.243.200:8000/products?' + urlForSubmit)
      .then(response => response.json())
      .then(result => {
        const { current } = itemListCount;
        const inputItemCount = current
          ? result.list.length - current.children.length
          : 0;

        setProducts(prev => result.list);
      });
  }, [offset, limit, checkList, selectedColor, selectedSize, sortStandard]);

  return (
    <section className="itemList">
      <ListHeader
        filterHider={filterHider}
        setFilterHider={setFilterHider}
        sortStandard={sortStandard}
        setSortStandard={setSortStandard}
        products={products}
      />
      <div className="itemListMain">
        <FilterBar
          filterHider={filterHider}
          checkList={checkList}
          setCheckList={setCheckList}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <ListContent
          products={products}
          setProducts={setProducts}
          filterHider={filterHider}
          setOffset={setOffset}
          setLimit={setLimit}
          itemListCount={itemListCount}
        />
      </div>
    </section>
  );
}

export default ItemList;
