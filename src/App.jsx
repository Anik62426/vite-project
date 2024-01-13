
import './App.css'
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/pages/Homepage/Homepage';
import Product from './customer/components/Product/Product';
import ProductDetail from './customer/components/ProductDetail/ProductDetal';
function App() {
  

  return (
    <div className=''>
      <Navigation/>
      <div>
        {/* <Homepage/> */}
        {/* <Product/> */}
        <ProductDetail/>

       </div>
       <Footer/>
      
    </div>
  )
}

export default App
