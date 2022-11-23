/* eslint-disable */   //used to disable eslint functionality for this file

//private key is used for backend side development
//public key is used in frontend side n that one will be past here for keys

import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe('pk_test_51LHpTdSAQuXo2wkEaLtxBCCC2K1Of1pAkMV7Q7HfgQc5bKK285Xx2kx03ganzOw1AakyhCRCPE6rCQgqzEWdZR3C00SaB1JKPs'); //it's a public key

export const bookTour = async tourId =>{
    try{
        // 1) Get checkout session from API
        const session = await axios(`http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`);
        console.log(session);

        // 2) Create checkout from + chanre credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id //will allowed us to go to paymant forum
        })

    }catch(err){
        console.log(err);
        showAlert('error', err);
    }
    
};

