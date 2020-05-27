import React, { useState, useEffect } from 'react';

import Service from '../components/Service';
import Spinner from '../components/UI/Spinner/Spinner';
import Input from '../components/SearchInput';
import Paginator from '../components/UI/Paginator';

const Services = (props) => {
  const [services, setServices] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [totalServices, setTotalServices] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [requestTime, setRequestTime] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
      const startTime = new Date().getTime();
      fetch('http://localhost:8100/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: searchValue }),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Failed to fetch services.');
          }
          return response.json();
        })
        .then((data) => {
          const modifiedServices = data.services.map((service) => {
            service.path = 'http://localhost:8101/' + service.path;
            return service;
          });
          setRequestTime(new Date().getTime() - startTime);
          setTotalServices(data.totalItems);
          setCurrentPage(1);
          setServices(modifiedServices);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  const fetchServices = (direction) => {
    if (direction) {
      setServices([]);
      setLoading(true);
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
    fetch('http://localhost:8100/services?page=' + page, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ expression: searchValue }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Failed to fetch services.');
        }
        return response.json();
      })
      .then((data) => {
        const modifiedServices = data.services.map((service) => {
          service.path = 'http://localhost:8101/' + service.path;
          return service;
        });
        setTotalServices(data.totalItems);
        setServices(modifiedServices);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
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
    serviceList = (
      <div className="services__not-found">
        Nie znaleziono usługi w bazie.
      </div>
    );
  }

  return (
    <section className="section-services">
      <Input
        id="services"
        label="Wyszukaj usługi oddzielając konkretne słowa spacją"
        placeholder="Np. meble / projekt"
        value={searchValue}
        onChange={onChangeHandler}
        totalItems={totalServices}
        requestTime={requestTime}
      />
      <div className="services">{serviceList}</div>
      {services.length > 0 && (
        <Paginator
          onPrevious={fetchServices.bind(this, 'previous')}
          onNext={fetchServices.bind(this, 'next')}
          onPage={fetchServices}
          lastPage={Math.ceil(totalServices / perPage)}
          currentPage={currentPage}
        />
      )}
    </section>
  );
};

export default Services;
