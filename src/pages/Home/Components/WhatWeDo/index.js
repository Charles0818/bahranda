import React from "react";
import webuy from "../../assets/webuy.png";
import westore from "../../assets/westore.png";

const WhatWeDo = () => {
    return (
        <section>
            <h1>What we do</h1>
            <div className="d-flex we-buy">
                <div>
                   <img src={webuy}></img>
                   <h2>We Buy</h2>
                   <p>lorem16</p>
                </div>
                <div>
                    <img src={westore}></img>
                    <h2>We Store</h2>
                    <p>lorem16</p>
                    </div>
                    <div>
                        <h2>WE SELL</h2>
                        <p>lorem16 </p>
                    </div>

            </div>

        </section>
    )
}

export default WhatWeDo;