import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Gallery from "../components/Gallery.tsx";
import {Link} from "react-router-dom";

export default function GalleryPage() {

    return (
        <>
            <Navbar />
            <main className={"w-full flex-col text-ternary items-center font-quicksand"}>
                <section className={`my-10`}>
                    <h2
                        className={"w-fit max-w-[80%] text-center mx-auto font-courgette text-3xl my-5 p-2 " +
                        "heading-text md:text-4xl lg:text-6xl"}>
                        Mon travail en image
                    </h2>
                    <p
                        className={"font-bold w-2/3 mx-auto text-center md:text-lg lg:text-xl"}>
                        Découvrez l'essence de la beauté révélée par une esthéticienne indépendante. Laissez-vous
                        charmer par des photos qui capturent la passion et le talent au service de votre bien-être.
                    </p>
                </section>

                <Gallery />

                <section className={`w-4/5 mx-auto my-10 pt-5`}>
                    <p
                        className={"font-bold w-2/3 mx-auto text-center md:text-lg lg:text-xl"}>
                        Envie de sublimer votre beauté ? Découvrez mes prestations et tarifs en un clic ou réservez
                        votre moment privilégié de détente et de soins chez une esthéticienne passionnée et
                        attentionnée.
                    </p>
                    <aside
                        className={"w-full mx-auto flex flex-nowrap items-center justify-center my-10 font-bold md:text-lg lg:text-xl"}>
                        <Link to={'/pricing'}
                              className={`mx-2 underline px-1 transition-all duration-500 hover:text-primary hover:bg-ternary`}>
                            Tarifs et services
                        </Link>
                        <Link to={'/contact'}
                              className={`mx-2 underline px-1 transition-all duration-500 hover:text-primary hover:bg-ternary`}>
                            Rendez-vous
                        </Link>
                    </aside>
                </section>
            </main>
            <Footer />
        </>
    )
}