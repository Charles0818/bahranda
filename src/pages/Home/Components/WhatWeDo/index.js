import React from "react";
import webuy from "../../assets/webuy.png";
import westore from "../../assets/westore.png";

const WhatWeDo = () => {
    return (
        <section className="What-we-do">
            <h1 className="font-xlg font-weight-normal text-center">What we do</h1>
            <div className="d-flex flex-container justify-content-s-between margin-top-md">
                    <div className="sub-div">
                        <div className="d-flex justify-content-s-between column flex-center">
                   <img src={webuy}></img>
                   <h2>We Buy</h2>
                   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dui laoreet, eleifend felis nec, ultricies turpis. Sed sed lacus at nibh ultrices condimentum. Proin in interdum risus. Suspendisse</p>
                   </div>
                   </div>
                <div className="bg-color1 sub-div">
                    <div className="d-flex justify-content-s-between column flex-center">
                    <img src={westore}></img>
                    <h2>We Store</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dui laoreet, eleifend felis nec, ultricies turpis. Sed sed lacus at nibh ultrices condimentum. Proin in interdum risus. Suspendisse</p>
                    </div>
                    </div>
                    <div className="sub-div bg-color2">
                        <div className="d-flex justify-content-s-between column flex-center">
                    <img src={webuy} className="margin-left-md"></img>
                        <h2>WE SELL</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dui laoreet, eleifend felis nec, ultricies turpis. Sed sed lacus at nibh ultrices condimentum. Proin in interdum risus. Suspendisse</p>
                    </div>
                    </div>
                    </div>


        </section>
    )
}

export default WhatWeDo;