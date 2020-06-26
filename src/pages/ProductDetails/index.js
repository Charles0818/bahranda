import React, { memo } from 'react';

const ProductDetails = memo(() => {
  return (
    <main className="product-details padding-horizontal-xlg padding-vertical-lg">
      <div className="d-flex">
        <button className="btn bg-white details font-md">DETAILS</button>
        <button className="btn margin-left-sm review font-md">REVIEWS</button>
      </div>
      <button className="bg-white white"></button>
    <div className="bg-white slim-border product-info"><p className="font-lg text-align-center padding-horizontal-xlg padding-vertical-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum sem non fermentum interdum. Vivamus sit amet iaculis nibh, vel commodo leo. Vestibulum id tristique enim. Suspendisse quis augue vel odio vehicula euismod. Nulla convallis luctus odio, non malesuada velit gravida vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin convallis elit vitae lacus euismod venenatis. Vivamus varius rutrum justo, a laoreet lorem luctus vel. Suspendisse pellentesque velit et odio accumsan commodo non sed lacus. Praesent non aliquam velit, pretium placerat ligula. Nam vehicula massa lectus, non sodales tellus posuere sed. Maecenas ut dictum justo. Nullam in placerat metus, ut porta diam. Mauris molestie tellus urna, ac imperdiet dui blandit et. Etiam fringilla et nisi malesuada efficitur. Fusce molestie ipsum non condimentum tempor.</p></div>

    </main>
  )
});

export default ProductDetails;
