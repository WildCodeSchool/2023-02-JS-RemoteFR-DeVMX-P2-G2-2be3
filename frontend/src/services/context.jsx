/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

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
    setBasketQuantityProduct((existingValue) => [
      ...existingValue,
      {
        productId,
        productBasketName,
        quantityProductBasket,
      },
    ]);
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
