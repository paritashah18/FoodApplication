import React from 'react';

import {Provider} from 'react-redux';
import {store} from './Src/redux/store';
import Main from './Main';

//we define store in our root file.
const App = () => {
  return(
  <Provider store={store}>
    <Main />
  </Provider>
  )
}

export default App;

