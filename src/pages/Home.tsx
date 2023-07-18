import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { Link } from "react-router-dom";
import GalleryPresentation from "../components/GalleryPresentation.tsx";

export default function Home() {
    return (
        <>
            <header className={`bg-ternary z-0`}>
                <h1 className="py-5 text-7xl w-full text-center font-extrabold bg-gradient-to-r from-secondary via-primary to-secondary inline-block text-transparent bg-clip-text">
                    BYVALS
                </h1>
            </header>
            <Navbar />
            <main className="max-w-full w-full flex-col text-ternary items-center font-quicksand">
                <h2 className="w-fit max-w-[80%] text-center mx-auto font-courgette text-3xl my-5 p-2 heading-text md:text-4xl lg:text-6xl">
                    Byvals, prothésiste ongulaire
                </h2>

                <section className="w-full mt-10 md:mt-20">
                    <p className="font-bold w-2/3 mx-auto text-center md:text-lg lg:text-xl">
                        Depuis le 1er juillet 2022, j'exerce en tant qu'esthéticienne indépendante, proposant mes
                        services à mon domicile ou dans les environs de Fléron.
                    </p>
                    <iframe
                        className={`w-[80%] h-52 my-7 rounded-lg mx-auto drop-shadow-lg md:h-64 md:w-[60%] lg:h-96`}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.366592021443!2d5.670131776897032!3d50.62030637162511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f71f5276f5b9%3A0xa024aa318c1eccb7!2sByvals!5e0!3m2!1sfr!2sbe!4v1687181047523!5m2!1sfr!2sbe"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <p className={`font-bold w-2/3 mx-auto text-center mb-5 md:text-lg lg:text-xl`}>
                        Je suis disponible du lundi au samedi, de&nbsp;
                        <time className={`bg-ternary text-primary px-1`}>09:00</time>
                        &nbsp;à&nbsp;
                        <time className={`bg-ternary text-primary px-1`}>17:00</time>.
                    </p>
                    <p className={`font-bold w-2/3 mx-auto text-center mb-5 md:text-lg lg:text-xl`}>
                        Pour prendre rendez-vous, veuillez visiter&nbsp;
                        <Link to={`/contact`}
                              className={`underline px-1 transition-all duration-500 hover:text-primary hover:bg-ternary`}>
                            ma page de contact.
                        </Link>
                    </p>
                </section>

                <section className="mb-10 mt-10 md:mt-20">
                    <h2 className={`w-fit mx-auto text-3xl font-courgette p-2 heading-text md:text-4xl lg:text-5xl`}>
                        Illustrations
                    </h2>
                    <div className={`w-[90%] md:w-[80%] mx-auto p-5 mb-5`}>
                        <GalleryPresentation />
                        <p className={`text-center mx-auto font-bold mix-blend-screen md:text-lg lg:text-xl`}>
                            Explorez mes réalisations en parcourant&nbsp;
                            <Link to={'/gallery'}
                                  className={`underline px-1 transition-all duration-500 hover:text-primary hover:bg-ternary`}>
                                ma galerie photos
                            </Link>
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}