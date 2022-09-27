import React, { useState } from 'react';
import CONTENTS_MOCK from './mockData/contentMock';
import './contentList.scss';
import AdvertiseItem from './components/AdvertiseItem/AdvertiseItem';
import ContentItem from './components/ContentItem/ContentItem';

function ContentList({ products }) {
  return (
    <div className="contentItems">
      <div className="contentItemContainor">
        <div className="contentItem">
          <AdvertiseItem />
        </div>
        {CONTENTS_MOCK.length !== undefined
          ? CONTENTS_MOCK.map(
              ({
                id,
                thumbnail,
                productName,
                description,
                brandName,
                color,
                discountPrice,
                retailPrice,
              }) => {
                return (
                  <ContentItem
                    key={id}
                    id={id}
                    thumbnail={thumbnail}
                    productName={productName}
                    description={description}
                    brandName={brandName}
                    color={color}
                    discountPrice={discountPrice}
                    retailPrice={retailPrice}
                  />
                );
              }
            )
          : null}
      </div>
    </div>
  );
}

export default ContentList;
