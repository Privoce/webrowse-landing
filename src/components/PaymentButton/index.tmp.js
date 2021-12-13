import React, { useState, useEffect } from 'react'
import { AuthingGuard } from '@authing/react-ui-components'
// 引入 css 文件
import '@authing/react-ui-components/lib/index.min.css';
import GuardConfig, { appId } from '../../constants/guardConfig';
import { loadStripe } from "@stripe/stripe-js";
import Payment from './Payment'
const stripePromise = loadStripe("pk_test_51HUlxMGGoUDRyc3jRwYfxI9ND3XjsmDBVx4gZtdVRhAD2QtxVnEaoYiuodXyGc9tgz79PGc2mbtcbgJRmzYFEG3r00aqZe24iw");
export default function PaymentButton({ priceId = null, user, txt = "Start 14-day free trial" }) {
    const [subCreating, setSubCreating] = useState(false)
    const [clientSecret, setClientSecret] = useState("")
    const [currUser, setCurrUser] = useState(null);
    const [paymentVisible, setPaymentVisible] = useState(false)
    const [guardVisible, setGuardVisible] = useState(false)
    useEffect(() => {
        setCurrUser(user)
    }, [user]);
    const handleGuardLoad = async (authClient) => {
        let currUser = await authClient.getCurrentUser();
        console.log({ currUser });
        // const { userInfo, session } = authingResp;
        if (currUser) {
            setGuardVisible(false);
            setCurrUser(currUser);
        }
    };
    const handleGuardLogin = async (user) => {
        console.log('login', { user });
        setCurrUser(user);
        setGuardVisible(false);
    };
    const handleGuardClose = () => {
        setGuardVisible(false);
    };
    const handleRegComplete = (user) => {
        setCurrUser(user);
        setGuardVisible(false);
    };
    const handlePayClick = async () => {
        if (!currUser) {
            setGuardVisible(true)
            return
        }
        if (!priceId) return;
        const { id, username, email } = currUser;
        setSubCreating(true)
        const resp = await fetch('http://localhost:4000/subscription/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceId: priceId,
                user: {
                    id, username, email
                }
            }),
        });
        const data = await resp.json();
        setSubCreating(false)
        if (data && data.clientSecret) {
            console.log("api resp data", data);
            setClientSecret(data.clientSecret)
            setPaymentVisible(true)

        }
        // console.log({ priceId });
    }
    return (
        <>
            <AuthingGuard
                visible={guardVisible}
                onRegisterInfoCompleted={handleRegComplete}
                // onRegister={handleReg}
                onClose={handleGuardClose}
                onLogin={handleGuardLogin}
                onLoad={handleGuardLoad}
                appId={appId}
                config={GuardConfig}
            />
            <button disabled={subCreating} className="btn" onClick={handlePayClick}>{subCreating ? 'Initialing' : txt}</button>

            {paymentVisible && <Payment stripePromise={stripePromise} clientSecret={clientSecret} />}
        </>
    )
}
