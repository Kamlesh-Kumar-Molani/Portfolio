import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
// import BlogDetails from './components/Blog/BlogDetails.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/blog/blog-details" element={<BlogDetails />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;