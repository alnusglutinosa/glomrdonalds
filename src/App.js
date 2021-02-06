import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }
  *, 
  *::before,
  *::after{
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3 {
    padding: 0;
    margin: 0;
    font-family: 'Pacifico', cursive;
  }
`;

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  //const [openItem, setOpenItem] = React.useState(null);

  console.log('openItem=', openItem);

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
