import React, { useState, useEffect, useCallback, useRef } from 'react';

import Product from '../components/Product';
import Spinner from '../components/UI/Spinner/Spinner';
import Input from '../components/SearchInput';
import Paginator from '../components/UI/Paginator';
import ErrorHandler from '../components/ErrorHandler';
import { updateUrl } from '../utils/utils';
import { apiUrl, imageUrl } from '../consts/urls';

const Products = (props) => {
   const [products, setProducts] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [totalProducts, setTotalProducts] = useState(0);
   const [currentPage, setCurrentPage] = useState(props?.match?.params?.pageNumber || 1);
   const [perPage, setPerPage] = useState(5);
   const [optionsValue, setOptionsValue] = useState('');
   const [requestTime, setRequestTime] = useState();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const paramLoaded = useRef(props?.match?.params?.pageNumber);

   const fetchProducts = useCallback(
      (pageNumber = 1) => {
         if (perPage < 1 || perPage > 30) {
            return;
         }
         setLoading(true);
         const startTime = new Date().getTime();
         fetch(apiUrl + 'products/page/' + pageNumber, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               expression: searchValue,
               perPage: perPage,
            }),
         })
            .then((response) => {
               if (response.status !== 200) {
                  throw new Error('Nie udało się pobrać produktów.');
               }
               return response.json();
            })
            .then((data) => {
               const modifiedProducts = data.products.map((product) => {
                  if (product.path) {
                     product.path = imageUrl + product.path;
                  }
                  return product;
               });
               setRequestTime(new Date().getTime() - startTime);
               setTotalProducts(data.totalItems);
               setCurrentPage(data.currentPage);
               setProducts(modifiedProducts);
               setLoading(false);
               updateUrl(`products/page/${data.currentPage}`);
            })
            .catch((err) => {
               if (err.name === 'TypeError') {
                  err.message = 'Nie udało się pobrać produktów.';
               }
               setError(err);
               setLoading(false);
            });
      },
      [searchValue, perPage]
   );

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (paramLoaded.current) {
            paramLoaded.current = null;
            fetchProducts(currentPage);
         } else {
            fetchProducts(1);
         }
      }, 500);
      return () => {
         clearTimeout(timeout);
      };
   }, [searchValue, perPage]);

   const loadPage = async (direction) => {
      if (!direction || perPage < 1 || perPage > 30) {
         return;
      }
      let page = currentPage;
      if (direction === 'next') {
         page++;
         setCurrentPage(page);
      }
      if (direction === 'previous') {
         page--;
         setCurrentPage(page);
      }
      if (Number.isInteger(direction)) {
         page = direction;
         setCurrentPage(page);
      }
      await fetchProducts(page);
      window.scrollTo(0, 0);
   };

   const onChangeHandler = (event) => {
      event.preventDefault();
      setSearchValue(event.target.value);
   };

   const onOptionsChangeHandler = (event) => {
      event.preventDefault();
      let value = event.target.value;
      value = String(value).replace(/[^0-9]/g, '');
      if (value > 30) {
         value = 30;
      }

      setOptionsValue(value);
      if (value > 0 && value <= 30) {
         setPerPage(value);
      }
   };

   const errorHandler = (event) => {
      event.preventDefault();
      setError(false);
   };

   let productList;

   if (loading) {
      productList = <Spinner />;
   } else if (products.length > 0) {
      productList = products.map((product) => (
         <Product
            key={product._id}
            title={product.title}
            category={product.category}
            company={product.company}
            reference={product.reference}
            description={product.description}
            price={product.price}
            src={product.path}
         />
      ));
   } else {
      productList = <div className="products__not-found">Nie znaleziono produktu w bazie.</div>;
   }

   return (
      <section className="section-products">
         <ErrorHandler error={error} onHandle={errorHandler} />
         <Input
            id="products"
            label="Wyszukaj produkty oddzielając słowa kluczowe&nbsp;spacją."
            placeholder="Np. lampa wisząca / biurko / krzesło"
            value={searchValue}
            onChange={onChangeHandler}
            totalItems={totalProducts}
            requestTime={requestTime}
            page={currentPage}
            allPages={Math.ceil(totalProducts / perPage)}
            optionsValue={optionsValue}
            onOptionsChange={onOptionsChangeHandler}
         />
         <div className="products">{productList}</div>
         {products.length > 0 && (
            <Paginator
               onPrevious={loadPage.bind(this, 'previous')}
               onNext={loadPage.bind(this, 'next')}
               onPage={loadPage}
               lastPage={Math.ceil(totalProducts / perPage)}
               currentPage={currentPage}
            />
         )}
      </section>
   );
};

export default Products;
