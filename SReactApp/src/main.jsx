import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import Hello from './Hello'
import Head from './head' */
import Add from './addition'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';


createRoot(document.getElementById('root')).render(
  <StrictMode>
{/*   <Head />
  <Hello /> */}
 {/*  <Add /> */}
 <Register />
  </StrictMode>,
)
