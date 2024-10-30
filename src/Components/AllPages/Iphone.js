import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//http://localhost:3001/iphones
function Iphone() {
   const [IPhones, setIphones] = useState([]);
   useEffect(() => {
      fetch("/products.json")
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            const allProducts = data.products;
            setIphones(allProducts);
         });
      //   .catch((error) => console.error("Error fetching iPhones:", error));
   }, []);

   let flip = true;
   return (
      <>
         <section className="internal-page-wrapper">
            <div className="container">
               <div className="row h-100 align-items-center justify-content-center text-center">
                  <div className="col-12 mt-5 pt-5">
                     <h1 className="font-weight-bold">iPhone Page</h1>
                     <div className="breif-description mb-5">
                        The best for the brightest.
                     </div>
                  </div>
               </div>
               {IPhones.map((iphone) => {
                  let order1 = 1;
                  let order2 = 2;
                  if (flip) {
                     order1 = 2;
                     order2 = 1;
                     flip = !flip;
                  } else {
                     flip = !flip;
                  }

                  let iphoneDesc = iphone.product_brief_description;
                  let iphoneImage = iphone.product_img;
                  let startingPrice = iphone.product_price;
                  let priceRange = iphone.price_range;
                  let productURL = iphone.product_url;
                  let productName = iphone.product_name;

                  let displayIphones = (
                     <div
                        key={iphone.product_id}
                        className="row justify-content-center text-center product-holder h-100"
                     >
                        <div
                           className={`col-sm-12 col-md-6 my-auto order-${order1}`}
                        >
                           <div className="product-title">{productName}</div>
                           <div className="product-brief">{iphoneDesc}</div>
                           <div className="starting-price">{startingPrice}</div>
                           <div className="monthly-price">{priceRange}</div>
                           <div className="links-wrapper">
                              <ul>
                                 <li>
                                    <Link to={`/iphone/${productURL}`}>
                                       Learn more
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div
                           className={`col-sm-12 col-md-6 my-3 order-${order2} iphone-product_img`}
                        >
                           <div className="product-image">
                              <img src={iphoneImage} alt="" />
                           </div>
                        </div>
                     </div>
                  );
                  return displayIphones;
               })}
            </div>
         </section>
      </>
   );
}

export default Iphone;
