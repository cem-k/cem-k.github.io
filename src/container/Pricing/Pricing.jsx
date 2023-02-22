import React from 'react';
import { PriceCard } from '../../components';

import './Pricing.css'
 
const Pricing = () => {
    const pricingOptions = [
        {
            id: 1,
            title: 'Basic',
            price: '$10/month',
            features: [
                '5GB storage',
                '10 users',
                'Unlimited projects',
            ],
            callToAction: 'Sign Up',
        },
        {
            id: 2,
            title: 'Professional',
            price: '$20/month',
            features: [
                '10GB storage',
                '20 users',
                'Unlimited projects',
            ],
            callToAction: 'Sign Up',
        },
        {
            id: 3,
            title: 'Organization',
            price: '$30/month',
            features: [
                '20GB storage',
                '50 users',
                'Unlimited projects',
            ],
            callToAction: 'Sign Up',
        },
    ]
     
    return (
        <div>

            <div className="priceCards__container">
                {pricingOptions.map(item => (
                    <PriceCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        features={item.features}
                        action={item.callToAction}
                    />
                ))}
            </div>

        </div>
)}

export default Pricing;