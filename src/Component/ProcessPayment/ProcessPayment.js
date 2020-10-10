import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SplitCardForm from './SplitCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HZsxKHgpn4cD0OFTn20Msa3Yt56DamvPLg66qAjIq4VhV05ctfsVEoekKLv8jR467bAQGfFrWiMLIG0XjmuwUe300xDkUWzOy');

const ProcessPayment = ({ handlePayment }) => {

    return (
        <Elements stripe={stripePromise}>
            {/* <SplitCardForm /> */}
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
            {/* <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            /> */}
        </Elements>
    );
};

export default ProcessPayment;