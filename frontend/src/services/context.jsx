/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const BasketQuantityProductContext = createContext();

export function BasketQuantityProductProvider({ children }) {
  const [basketQuantityProduct, setBasketQuantityProduct] = useState([]);

  console.log(
    "🚀 ~ file: context.jsx:8 ~ BasketQuantityProductProvider ~ basketQuantityProduct:",
    basketQuantityProduct
  );

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
    // if productId already exist in the basket, remove the object
    const filteredBasket = basketQuantityProduct.filter(
      (item) =>
        item.productId !== productId ||
        item.quantityProductBasket !== quantityProductBasket - 1
    );
    console.log(
      "🚀 ~ file: context.jsx:39 ~ BasketQuantityProductProvider ~ filteredBasket:",
      filteredBasket
    );

    setBasketQuantityProduct(filteredBasket);
  };

  function findOcc(arr, key) {
    const arr2 = [];

    arr.forEach((x) => {
      // Checking if there is any object in arr2
      // which contains the key value
      if (
        arr2.some((val) => {
          return val[key] === x[key];
        })
      ) {
        // If yes! then increase the occurrence by 1
        arr2.forEach((k) => {
          if (k[key] === x[key]) {
            // eslint-disable-next-line no-param-reassign
            k.occurrence += 1;
          }
        });
      } else {
        // If not! Then create a new object initialize
        // it with the present iteration key's value and
        // set the occurrence to 1
        const a = {};
        a[key] = x[key];
        a.occurrence = 1;
        arr2.push(a);
      }
    });

    return arr2;
  }

  const organizedBasketInfo = findOcc(
    basketQuantityProduct,
    "productBasketName"
  );
  console.log(
    "🚀 ~ file: context.jsx:76 ~ BasketQuantityProductProvider ~ organizedBasketInfo:",
    organizedBasketInfo
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <BasketQuantityProductContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
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

export default BasketQuantityProductContext;
