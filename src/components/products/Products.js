import React from "react";
import ProductsHeroAnimation from "../animations/ProductsHeroAnimation";
import HeadlineAnimation from "../animations/HeadlineAnimation";

const Products = props => {
  const { info } = props;
  return (
    <div className="container">
      <div className="Products-container">
        <div className="flex collapse-row-column">
          <div className="Products-info">
            <HeadlineAnimation>
              <h1 style={{ color: info.color }}>
                {info.fish.toUpperCase()}
                <span>{`(${info.scienceName})`}</span>
              </h1>
            </HeadlineAnimation>
            {info.caption.map((caption, key) => (
              <p key={key}>{caption}</p>
            ))}
          </div>
          <div className="Products-hero-holder flex">
            <ProductsHeroAnimation className="Products-hero">
              <img src={info.hero} className="image" alt={info.name} />
            </ProductsHeroAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
