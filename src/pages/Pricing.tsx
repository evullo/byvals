import Navbar from "../components/Navbar.tsx";
import PricingSlider from "../components/PricingSlider.tsx";
import Footer from "../components/Footer.tsx";

export default function Pricing() {
    return (
        <>
            <Navbar />
            <section className={`my-10 text-ternary`}>
                <h2 className={"w-fit max-w-[80%] text-center mx-auto font-courgette text-3xl my-5 p-2 " +
                    "heading-text md:text-4xl lg:text-6xl"}>
                    Découvrez mes tarifs pour une beauté épanouie et resplendissante
                </h2>
                <p className={"font-bold w-2/3 mx-auto text-center md:text-lg lg:text-xl"}>
                    Offrez-vous une expérience de soins esthétiques d'exception à des tarifs adaptés à votre bien-être.
                    Découvrez mes prix compétitifs et mes offres personnalisées pour prendre soin de votre beauté
                    intérieure et extérieure.
                </p>
            </section>
            <PricingSlider />
            <Footer />
        </>
    )
}