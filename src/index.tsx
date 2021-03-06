import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import Navigation from './navigation';
import SplashScreen from 'react-native-splash-screen';
import {useGetUserByDeviceIdQuery} from './store/slice/apiSlice';
import {getUniqueId} from 'react-native-device-info';
import {Appearance} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {Loader} from './components';

const Index = () => {
  const {isSuccess, isError, error} = useGetUserByDeviceIdQuery(getUniqueId());
  const [route, setRoute] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isSuccess) {
      setRoute('Home');
      setIsLoading(false);
    }
    if (isError && error.status === 404) {
      setRoute('Register');
      setIsLoading(false);
    }
    SplashScreen.hide();
  }, [isSuccess, isError, error]);
  return <>{isLoading ? <Loader /> : <Navigation route={route} />}</>;
};

const App = () => {
  const [theme, setTheme] = useState(
    Appearance.getColorScheme() === 'dark' ? eva.dark : eva.light,
  );
  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme === 'dark' ? eva.dark : eva.light);
    });
  }, []);

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <Index />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
