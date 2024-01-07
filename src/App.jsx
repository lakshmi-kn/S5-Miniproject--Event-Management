import './App.css'
import Landing from './pages/landing/landing';
import Services from './pages/services/services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/login/login';
import RegisterForm from './pages/login/register';
import { NewBooking } from './pages/booking/booking';
import Gallery from './pages/gallery/gallery';
import About from './pages/about/about';
import Dashboard from './pages/dashboard/dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/new-booking" element={<NewBooking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}