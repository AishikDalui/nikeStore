import React from 'react';
import { Suspense } from 'react';
import {  Footer, Hero } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
const Sales=React.lazy(()=>import("./components/Sales.jsx"))
const FlexContent=React.lazy(()=>import("./components/FlexContent.jsx"))
const Stories=React.lazy(()=>import("./components/Stories.jsx"))
const Cart=React.lazy(()=>import('./components/Cart.jsx'))
const Navbar=React.lazy(()=>import('./components/Navbar.jsx'))
const App = () => {
  return (
   <>
      <Suspense fallback={<p>...</p>}>
      <Navbar/>
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
      <Cart />
      </Suspense>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        
        <Suspense fallback={<p>This is loading...</p>}>
        <Sales endpoint={popularsales} ifExists />
        </Suspense>
       
        
        <Suspense fallback={<p>This is loading...</p>}>
        <FlexContent endpoint={highlight} ifExists />
        </Suspense>

        <Suspense fallback={<p>This is loading...</p>}>
        <Sales endpoint={toprateslaes} />
        </Suspense>
        <Suspense fallback={<p>This is loading...</p>}>
        <FlexContent endpoint={sneaker} />
        </Suspense>
        <Suspense fallback={<p>This is loading...</p>}>
        <Stories story={story} />
        </Suspense>
      </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App;