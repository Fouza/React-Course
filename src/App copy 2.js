import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Layout}>
          <Route index element={Home} />
          <Route path="contact" element={Contact} />
          <Route path="blog" element={Blog} />

        </Route>
        <Route path="/admin/" element={Layout}>
          <Route index element={Admin} />
          <Route path="settings" element={Settings} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;