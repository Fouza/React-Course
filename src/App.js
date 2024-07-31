import './App.scss';
import './scss/shared.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './containers/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Go To Layout component => It has to render Outlet from 'react-router-dom' */}

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;