import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
   faEnvelope,
   faAddressCard,
   faSearch,
   faLink,
   faCog,
   faCogs,
} from '@fortawesome/free-solid-svg-icons';

import Layout from './containers/Layout';
import ScrollToTop from './hoc/ScrollToTop';
import Spinner from './components/UI/Spinner/Spinner';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';

library.add(faEnvelope, faAddressCard, faSearch, faLink, faCog, faCogs);

function App() {
   return (
      <ScrollToTop>
         <Layout>
            <Suspense fallback={<Spinner />}>
               <Switch>
                  <Route path="/products/page/:pageNumber" component={Products} />
                  <Route path="/products" component={Products} />
                  <Route path="/services/page/:pageNumber" component={Services} />
                  <Route path="/services" component={Services} />
                  <Route exact path="/" component={Home} />
                  <Redirect to="/" />
               </Switch>
            </Suspense>
         </Layout>
      </ScrollToTop>
   );
}

export default App;
