/* eslint-disable react/jsx-no-constructed-context-values */
// Context need to be rerun on each render, I think :) - by Frederico
import { createContext, useState } from "react";
import PropTypes from "prop-types";

const BasketQuantityProductContext = createContext();

export function BasketQuantityProductProvider({ children }) {
  const [basketQuantityProduct, setBasketQuantityProduct] = useState([]);

  const handleClickAdd = (
    productId,
    productBasketName,
    quantityProductBasket
  ) => {
    setBasketQuantityProduct((existingValue) => [
      ...existingValue,
      {
        productId,
        productBasketName,
        quantityProductBasket,
      },
    ]);
  };

  const handleClickRemove = (
    productId,
    productBasketName,
    quantityProductBasket
  ) => {
    const filteredBasket = basketQuantityProduct.filter(
      (item) =>
        item.productId !== productId ||
        item.quantityProductBasket !== quantityProductBasket - 1
    );

    setBasketQuantityProduct(filteredBasket);
  };

  function findOcc(arr, key) {
    const arr2 = [];

    arr.forEach((x) => {
      const k = { ...x };

      if (arr2.some((val) => val[key] === k[key])) {
        arr2.forEach((obj) => {
          if (obj[key] === k[key]) {
            const newObj = { ...obj };
            newObj.occurrence += 1;
            arr2.splice(arr2.indexOf(obj), 1, newObj);
          }
        });
      } else {
        k.occurrence = 1;
        arr2.push(k);
      }
    });

    return arr2;
  }

  const organizedBasketInfo = findOcc(
    basketQuantityProduct,
    "productBasketName"
  );

  return (
    <BasketQuantityProductContext.Provider
      value={{
        basketQuantityProduct,
        handleClickRemove,
        handleClickAdd,
        setBasketQuantityProduct,
        organizedBasketInfo,
      }}
    >
      {children}
    </BasketQuantityProductContext.Provider>
  );
}

BasketQuantityProductProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default BasketQuantityProductContext;
