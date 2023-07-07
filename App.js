import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Src/redux/store';
import Main from './Main';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
let persistor = persistStore(store);
//we define store in our root file.
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
