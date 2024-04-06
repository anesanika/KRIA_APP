import React, { useEffect, useState } from 'react';
import Header from './components/mainComp/header/Header';
import Navbar from './components/mainComp/navbar/Navbar';
import Main from './components/mainComp/main/Main';
import Footer from './components/mainComp/footer/Footer';
import { SymbolDisplayPartKind } from 'typescript';

function App() {

  const [windSize, setWindSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () =>{
      setWindSize(window.innerWidth);

    })
  }, [windSize])
  
  
  return (   
    <>
    {
      windSize <= 600 ?
        <div className='non-size'>
          <h1>Display size Not Supported</h1>
        </div>
      :
      <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
      </>
    }
    </>
  )
}

export default App;
