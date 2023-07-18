import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import LinkCard from "../components/LinkCard.tsx";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    return(
        <>
            <Navbar />
            <main className={`w-full flex-col text-ternary items-center font-quicksand`}>
                <section className={`w-full mt-10 md:mt-60 lg:mt-80`}>
                    <h2 className={`w-fit mx-auto text-center text-3xl font-courgette p-2 heading-text md:text-4xl lg:text-5xl`}>
                        Prenez soin de vous grâce mes soins esthétiques personnalisés
                    </h2>
                    <p className={`font-bold w-2/3 mx-auto my-5 text-center md:text-lg lg:text-xl`}>
                        Ravivez votre beauté naturelle et ressentez une sensation de bien-être absolu grâce à mes mains
                        expertes.
                    </p>
                    <p className={`font-bold w-2/3 mx-auto my-5 text-center md:text-lg lg:text-xl`}>
                        Contactez-moi sur Facebook ou Instagram, où je partage mon travail quotidien, réservez votre
                        expérience de beauté et de détente en m'envoyant un message privé via les boutons ci-dessous.
                    </p>
                </section>

                <section className={`w-11/12 mx-auto flex-col mb-5 mt-10 md:mt-20`}>
                    <h2 className={`mx-auto text-center text-3xl font-courgette p-2 heading-text md:text-4xl lg:text-5xl`}>
                        Contactez-moi maintenant
                    </h2>

                    <aside className={`flex justify-evenly mt-5 md:justify-center`}>
                        <LinkCard className={`w-1/3 h-16 flex items-center justify-center border border-ternary cursor-pointer bg-blue-700 rounded-lg md:mr-5 md:w-1/6 lg:w-1/12 md:h-20 lg:h-24`}
                                  logo={<FaFacebookF className={`text-4xl lg:text-6xl`} />}
                                  link={`https://www.facebook.com/people/Byvals-Byvals/100077553296294/?paipv=0&eav=AfZw3iwkQmfU4WqDMp-wG_SkaCjXSa9Peoo6Pc4c1iETbY3GcGF-q52LFHZ9_trtgDo&_rdr`}
                                  linkText={`Byvals`}
                        />
                        <LinkCard className={`w-1/3 h-16 flex items-center justify-center border border-ternary cursor-pointer bg-instagram rounded-lg md:ml-5 md:w-1/6 lg:w-1/12 md:h-20 lg:h-24`}
                                  logo={<FaInstagram className={`text-4xl lg:text-6xl`} />}
                                  link={`https://www.instagram.com/byvals.byvals/`} linkText={`@byvals.byvals`}
                        />
                    </aside>
                </section>
            </main>
            <Footer />
        </>
    )
}