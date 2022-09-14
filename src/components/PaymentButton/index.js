import React, { useState, useEffect } from 'react'
import { useGuard } from '@authing/guard-react'

import { SubscriptionCreate } from '../../constants/APIs'
export default function PaymentButton({ priceId = null, user, txt = "Start 14-day free trial" }) {
    const [subCreating, setSubCreating] = useState(false)
    const [currUser, setCurrUser] = useState(null);
    const guard = useGuard()
    useEffect(() => {
        setCurrUser(user)
    }, [user]);
    useEffect(() => {
        if (currUser) {
            guard.hide()
        }
    }, [currUser])

    useEffect(() => {
        guard.start('#AUTHING_GUARD').then(userInfo => {
            setCurrUser(userInfo)
        })
    }, [])
    const handlePayClick = async () => {
        if (!currUser) {
            guard.show()
            return
        }
        if (!priceId || subCreating) return;
        console.log(priceId);
        // return;
        const { id, username, email } = currUser;
        setSubCreating(true)
        const resp = await fetch(SubscriptionCreate, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceId,
                user: {
                    id, username, email
                }
            }),
        });
        const data = await resp.json();
        if (data && data.session_url) {
            location.href = data.session_url
        }
        setSubCreating(false)
        // console.log({ priceId });
    }
    return (
        <>
            <button disabled={subCreating} className="btn" onClick={handlePayClick}>{subCreating ? 'Initialing' : txt}</button>
        </>
    )
}
