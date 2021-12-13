import React, { useState } from "react";
import styled from 'styled-components';
const StyledForm = styled.form`
  .submit{
      margin-top: 20px;
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
    &:hover {
        filter: contrast(115%);
    }
    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
  }
  .message{
    color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
  }
`;
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     if (!stripe) {
    //         return;
    //     }
    //     if (!clientSecret) {
    //         return;
    //     }
    //     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //         console.log({ paymentIntent });
    //         switch (paymentIntent.status) {
    //             case "succeeded":
    //                 setMessage("Payment succeeded!");
    //                 break;
    //             case "processing":
    //                 setMessage("Your payment is processing.");
    //                 break;
    //             case "requires_payment_method":
    //                 setMessage("Your payment was not successful, please try again.");
    //                 break;
    //             default:
    //                 setMessage("Something went wrong.");
    //                 break;
    //         }
    //     });
    // }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        setIsLoading(true);
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "https://webrow.se/payment_success",
            },
        });
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occured.");
        }

        setIsLoading(false);
    };

    return (
        <StyledForm id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button type="submit" disabled={isLoading || !stripe || !elements} className="submit">
                <span id="button-text">
                    {isLoading ? "Loading" : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div className="message">{message}</div>}
        </StyledForm>
    );
}