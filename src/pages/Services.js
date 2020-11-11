import React, { useState, useEffect, useCallback } from 'react';

import usePrevious from '../hooks/usePrevious';

import Service from '../components/Service';
import Spinner from '../components/UI/Spinner/Spinner';
import Input from '../components/SearchInput';
import Paginator from '../components/UI/Paginator';
import ErrorHandler from '../components/ErrorHandler';
import { updateUrl } from '../utils/utils';
import { apiUrl, imageUrl } from '../consts/urls';

const Services = (props) => {
   const [services, setServices] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [totalServices, setTotalServices] = useState(0);
   const [currentPage, setCurrentPage] = useState(props?.match?.params?.pageNumber || 1);
   const [perPage, setPerPage] = useState(5);
   const [optionsValue, setOptionsValue] = useState('');
   const [requestTime, setRequestTime] = useState();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const prevSearchValue = usePrevious(searchValue);

   const fetchServices = useCallback(
      (pageNumber = 1) => {
         if (perPage < 1 || perPage > 30) {
            return;
         }
         setLoading(true);
         const startTime = new Date().getTime();
         fetch(apiUrl + 'services/page/' + pageNumber, {
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
                  throw new Error('Nie udało się pobrać usług.');
               }
               return response.json();
            })
            .then((data) => {
               const modifiedServices = data.services.map((service) => {
                  if (service.path) {
                     service.path = imageUrl + service.path;
                  }
                  return service;
               });
               setRequestTime(new Date().getTime() - startTime);
               setTotalServices(data.totalItems);
               setCurrentPage(data.currentPage);
               setServices(modifiedServices);
               setLoading(false);
               updateUrl(`services/page/${data.currentPage}`);
            })
            .catch((err) => {
               if (err.name === 'TypeError') {
                  err.message = 'Nie udało się pobrać usług.';
               }
               setError(err);
               setLoading(false);
            });
      },
      [searchValue, perPage]
   );

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (prevSearchValue !== searchValue && searchValue !== '') {
            fetchServices(1);
         } else {
            fetchServices(currentPage);
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
      setLoading(true);
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
      await fetchServices(page);
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

   let serviceList;

   if (loading) {
      serviceList = <Spinner />;
   } else if (services.length > 0) {
      serviceList = services.map((service) => (
         <Service
            key={service._id}
            title={service.title}
            category={service.category}
            company={service.company}
            reference={service.reference}
            description={service.description}
            src={service.path}
         />
      ));
   } else {
      serviceList = <div className="services__not-found">Nie znaleziono usługi w bazie.</div>;
   }

   return (
      <section className="section-services">
         <ErrorHandler error={error} onHandle={errorHandler} />
         <Input
            id="services"
            label="Wyszukaj usługi oddzielając słowa bądź&nbsp;wyrażenia&nbsp;przecinkiem."
            placeholder="Np. montaż / pomiar / projekt wnętrza"
            value={searchValue}
            onChange={onChangeHandler}
            totalItems={totalServices}
            requestTime={requestTime}
            page={currentPage}
            allPages={Math.ceil(totalServices / perPage)}
            optionsValue={optionsValue}
            onOptionsChange={onOptionsChangeHandler}
         />
         <div className="services">{serviceList}</div>
         {services.length > 0 && (
            <Paginator
               onPrevious={loadPage.bind(this, 'previous')}
               onNext={loadPage.bind(this, 'next')}
               onPage={loadPage}
               lastPage={Math.ceil(totalServices / perPage)}
               currentPage={currentPage}
            />
         )}
      </section>
   );
};

export default Services;
