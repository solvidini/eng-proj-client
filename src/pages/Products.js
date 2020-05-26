import React, { useState, useEffect, useCallback } from 'react';

import Product from '../components/Product';
import Spinner from '../components/UI/Spinner/Spinner';
import Input from '../components/UI/SearchInput';

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8100/products')
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Failed to fetch products.');
        }
        return response.json();
      })
      .then((data) => {
        const modifiedProducts = data.products.map((product) => {
          product.path = 'http://localhost:8101/' + product.path;
          return product;
        });
        setProducts(modifiedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const fetchFoundProducts = useCallback(() => {
    setLoading(true);
    fetch('http://localhost:8100/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ expression: searchValue }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Failed to fetch products.');
        }
        return response.json();
      })
      .then((data) => {
        const modifiedProducts = data.products.map((product) => {
          product.path = 'http://localhost:8101/' + product.path;
          return product;
        });
        setProducts(modifiedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [searchValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchFoundProducts();
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue, fetchFoundProducts]);

  const onChangeHandler = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
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
        src={product.path}
      />
    ));
  } else {
    productList = (
      <div className="products__not-found">
        Nie znaleziono produktu.
      </div>
    );
  }

  return (
    <section className="section-products">
      <Input value={searchValue} onChange={onChangeHandler} />
      <div className="products">{productList}</div>
    </section>
  );
};

export default Products;
