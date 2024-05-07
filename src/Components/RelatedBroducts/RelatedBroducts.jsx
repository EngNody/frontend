import React from 'react';
import './RelatedBroducts.css'
import data_product from '../Assets/data';
// import new_collections from './../Assets/data';

import Item from './../Item/Item';
// import new_collections from './../Assets/new_collections';
// import all_product from './../Assets/all_product';

const RelatedBroducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
      {data_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price} />
        })}
      </div>
    </div>
  );
}

export default RelatedBroducts;
