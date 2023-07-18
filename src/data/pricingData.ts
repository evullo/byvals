import hand from "../assets/pricing/hand.jpg";
import feet from "../assets/pricing/feet.jpg";
import massage from "../assets/pricing/massage.jpg";

interface PricingChild {
    service: string,
    price: number,
    price2?: number
}
interface Pricing {
    title: string,
    image: string,
    pricing: PricingChild[]
}

const pricingData: Pricing[] = [
    {
        title: 'Mains',
        image: hand,
        pricing: [
            {service: 'Manucure', price: 10.5},
            {service: 'Manugel vernis semi-permanent', price: 25.5},
            {service: 'Capsule Américaine', price: 35},
            {service: 'Capsule Américaine - retouche', price: 30},
            {service: 'Ongles en résine', price: 35},
            {service: 'Ongles en résine - retouche', price: 30},
            {service: 'Ongle cassé', price: 2},
            {service: 'Décoration ongle', price: 0.5},
            {service: 'Frenche blanche', price: 30},
        ]
    },
    {
        title: 'Pieds',
        image: feet,
        pricing: [
            {service: 'Soins et vernis semi-permanent', price: 15, price2: 20},
            {service: 'Vernis semi-permanent', price: 20},
            {service: 'Pedicure', price: 10.5},
            {service: 'Frenche blanche', price: 25},
            {service: 'Pose vernis classique', price: 9.5},
            {service: 'Décoration ongle', price: 0.5},
        ]
    },
    {
        title: 'Corps',
        image: massage,
        pricing: [
            {service: 'Massage corps', price: 50},
            {service: 'Massage corps bien-être', price: 25},
        ]
    }
]

export type {Pricing, PricingChild};
export default pricingData;