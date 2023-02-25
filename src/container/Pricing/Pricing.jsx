import React,{ useState } from 'react';
import { PriceCard } from '../../components';
 
const Pricing = () => {
    const pricingOptionsMonthly = [
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
    const pricingOptionsYearly = [
        {
            id: 1,
            title: 'Basic',
            price: '$100/year',
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
            price: '$220/year',
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
            price: '$340/year',
            features: [
                '20GB storage',
                '50 users',
                'Unlimited projects',
            ],
            callToAction: 'Sign Up',
        },
    ]

    const [showMonthly, setShowMonthly] = useState(true);
    const [monthlyActive, setMonthlyActive] = useState(true);
    const [yearlyActive, setYearlyActive] = useState(false);

    const handleMonthlyClick = () => {
        setShowMonthly(true);
        setMonthlyActive(true);
        setYearlyActive(false);
    }

    const handleYearlyClick = () => {
        setShowMonthly(false);
        setYearlyActive(true);
        setMonthlyActive(false);
    }
     
    return (
        <div className='pricing' id="Pricing">
            <h1>Pricing</h1>
            <button onClick={handleMonthlyClick} className={monthlyActive ? "active": "notactive"}>Monthly</button>
            <button onClick={handleYearlyClick} className={yearlyActive ? "active": "notactive"}>Yearly</button>
            {showMonthly ? (
                <div className="pricecards">
                    {pricingOptionsMonthly.map(item => (
                        <PriceCard
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            features={item.features}
                            action={item.callToAction}
                        />
                    ))}
                </div>
            ):(
                <div className="pricecards">
                    {pricingOptionsYearly.map(item => (
                        <PriceCard
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            features={item.features}
                            action={item.callToAction}
                        />
                    ))}
                </div>
            )}

        </div>
)}

export default Pricing;