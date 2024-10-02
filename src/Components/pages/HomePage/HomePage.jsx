import Banner from '@components/Banner/Banner'
import Info from '@components/Info/Info'
import Header from '@components/Header/Header'
import Product from '@components/Product/Product.jsx'
import Footer from '@components/Footer/Footer.jsx'
import SaleHome from '@components/SaleHome/SaleHome.jsx'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Info />
      <Product />
      <SaleHome />
      <Footer />
    </div>
  )
}

export default HomePage
