/**
 * This files used to generate router from router.config
 */

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import config from './router.config';
import renderComponentRouter from '../components/Routers/Routers';

const renderRouter = () => {
  if (!config || config.length < 1) {
    console.error('No Router Config!');
    return null;
  }
  const furl = '/';
  return renderComponentRouter(config, furl);
};

export default () => <Router>{renderRouter()}</Router>;
