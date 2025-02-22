import Header from '../Header/Header.jsx';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import CustomCursor from '../CustomCursor/CustomCursor.jsx';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <>
      {isLoading ? <Preloader /> : (
        <div>
          <CustomCursor />
          <Header />
          <Outlet />
          <Footer />
        </div>
      )
      }
    </>
  )
}
export default Layout;