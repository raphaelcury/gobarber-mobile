import React from 'react';
import { useSelector } from 'react-redux';

import Routes from '~/routes';

const App = () => {
  const signed = useSelector((state) => state.auth.signed);
  console.tron.log(`SIGNED: ${signed}`);
  return <Routes signed={signed} />;
};

export default App;
