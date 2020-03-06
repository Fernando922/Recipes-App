import React from 'react';
import {StatusBar} from 'react-native';
import {SECONDARY} from '../utils/colors';
import Routes from '../pages/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={SECONDARY} />
      <Routes />
    </>
  );
}
