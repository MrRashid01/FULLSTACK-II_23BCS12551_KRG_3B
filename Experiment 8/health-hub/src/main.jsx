import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51TEMWB9SX6ii7VkrNOxpqj5RFrge1MizmW9i5INcNKiOy7bBwPz3uFGXHDMO62W15BE8fI2GVOxRORosYZ62WPoO00avvmRscT");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Elements stripe={stripePromise}>
    <App />
    </Elements>
  </StrictMode> ,
)