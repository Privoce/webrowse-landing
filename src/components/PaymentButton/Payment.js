import React from 'react'
import styled from 'styled-components';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm'
const StyledPayment = styled.div`
    z-index:999;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding:20px 40px;
    background-color: #fff;
    box-shadow: 0px 8px 24px rgba(1, 4, 9, 1);
    border-radius: 12px;
    border:1px solid #eee;
`;
export default function Payment({ stripePromise, clientSecret = "" }) {
    if (!clientSecret) return null;
    return (
        <StyledPayment className="payment">
            <Elements options={{
                clientSecret,
                appearance: {
                    theme: "stripe"
                }
            }} stripe={stripePromise}>
                <CheckoutForm clientSecret={clientSecret} />
            </Elements></StyledPayment>
    )
}
