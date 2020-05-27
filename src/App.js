import React from 'react';
import { appStrings } from './resources/strings';
import RestaurantsList from './comnponents/RestaurantsList';
import HeaderBackground from './themes/assets/header-2.jpg'
import Header from './comnponents/Header';
function App() {
  return (
    <div className="App">
        <Header title={appStrings.headerText} imgSrc={HeaderBackground} />       
        <RestaurantsList></RestaurantsList>     
    </div>
  );
}

export default App;
