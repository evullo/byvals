// Library import
import {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { EffectCards } from 'swiper';

// Local import
import pricingData, {Pricing, PricingChild} from "../data/pricingData.ts";

// CSS import
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function PricingSlider() {
    const [swiper, setSwiper] = useState<SwiperClass | undefined>();
    const [activeSlide, setActiveSlide] = useState<number | undefined>();
    const [firstSlideHeight, setFirstSlideHeight] = useState<number | null>(null);
    const leftButton = useRef<HTMLButtonElement>(null);
    const rightButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if(leftButton.current) {
            const firstSlideElement = document.querySelector('.swiper-slide');
            if (firstSlideElement) {
                const height = firstSlideElement.clientHeight;
                setFirstSlideHeight(height);
            }

            if (activeSlide == 0) {
                leftButton.current.disabled = true;
                leftButton.current.className = 'text-transparent';
            } else {
                leftButton.current.disabled = false;
                leftButton.current.className = 'hover:text-primary hover:bg-ternary rounded-md transition-all ease-in duration-300';
            }
        }

        if(rightButton.current) {
            if(activeSlide == 2) {
                rightButton.current.disabled = true;
                rightButton.current.className = 'text-transparent';
            } else {
                rightButton.current.disabled = false;
                rightButton.current.className = 'hover:text-primary hover:bg-ternary rounded-md transition-all ease-in duration-300';
            }
        }
    }, [activeSlide])

    return (
        <Swiper modules={[EffectCards]}
                effect="cards"
                cardsEffect={{slideShadows: true, perSlideRotate: 3}}
                className={`w-4/6 mt-10 md:w-4/6`}
                onSwiper={(swiper) =>  {
                    setSwiper(swiper);
                    setActiveSlide(swiper.realIndex);
                }}
                onSlideChange={() => setActiveSlide(swiper?.realIndex)}
        >
            {pricingData.map((obj: Pricing, index: number) => (
                <SwiperSlide key={index}
                             className={`swiper-slide p-3 flex flex-nowrap justify-center bg-ternary rounded-lg shadow-lg md:p-10`}
                             style={{ height: firstSlideHeight ? firstSlideHeight + 'px' : 'auto' }}
                >
                    <aside className={`my-auto w-full h-full flex flex-col justify-center items-start lg:w-2/3`}>
                        <h2 className={`w-fit p-2 text-2xl font-courgette font-extrabold mt-10 text-primary md:text-4xl lg:text-6xl`}>
                            {`${obj.title}`}
                        </h2>
                        <ul className={`w-full pb-10 text-primary justify-self-center my-auto md:pb-5 lg:w-4/5`}>
                            {obj.pricing.map((price: PricingChild, index: number) => (
                                <li key={index} className={`flex flex-col flex-nowrap justify-between items-baseline my-2 md:flex-row`}>
                                    <p className={`w-fit mx-2 whitespace-nowrap font-bold text-xs md:text-lg lg:text-xl`}>{price.service}</p>

                                    <hr className={`hidden w-full bg-secondary h-0.5 md:block`}/>

                                    <p className={`w-fit ml-1 whitespace-nowrap font-bold text-sm md:text-lg lg:text-xl`}>
                                        {`${price.price} ${price.price2 ? `+ ${price.price2}` : ''} €`}
                                    </p>

                                    <hr className={`${index == obj.pricing.length - 1 ? 'hidden' : 'block'} w-11/12 bg-secondary h-0.5 md:hidden`}/>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <aside className={`hidden relative w-1/4 h-64 my-auto lg:block`}>
                        <div className={`absolute rounded-lg m-5 shadow-xl bg-pink-200 blur-[2px] transform rotate-6`}
                             style={{
                                 height: firstSlideHeight ? firstSlideHeight / 2.2 + 'px' : '45%',
                                 width: firstSlideHeight ? firstSlideHeight / 3 + 'px' : '30%'
                             }}
                        >
                        </div>
                        <div
                            className={`absolute bg-no-repeat bg-center bg-cover w-44 rounded-lg m-5 drop-shadow-lg transform -rotate-6`}
                            style={{
                                backgroundImage: `url(${obj.image})`,
                                height: firstSlideHeight ? firstSlideHeight / 2.2 + 'px' : '45%',
                                width: firstSlideHeight ? firstSlideHeight / 3 + 'px' : '30%'
                            }}>
                        </div>
                    </aside>
                </SwiperSlide>
            ))}

            <div className={`w-full my-10 flex flex-nowrap justify-between items-center text-ternary`}>
                <aside className={`w-2/3 ml-3 flex justify-start items-center`}>
                    <div className={`w-4/6 bg-ternary h-3.5 rounded-full shadow-inner drop-shadow-lg shadow-secondary border-2 border-ternary`}>
                        <div
                            className={`${activeSlide == 0 ? 'w-1/3' : activeSlide == 1 ? 'w-2/3' : 'w-full'} 
                            h-full bg-gradient-to-r from-primary to-pink-400 rounded-full drop-shadow-lg 
                            shadow-primary transition-all duration-500 ease-out`}>
                        </div>
                    </div>
                </aside>
                <aside className={`w-1/4 mr-3 flex justify-end`}>
                    <button
                        ref={leftButton}
                        onClick={() => swiper?.slidePrev()}>
                        <BiChevronLeft fontSize={`3rem`} />
                    </button>
                    <button
                        ref={rightButton}
                        onClick={() => swiper?.slideNext()}>
                        <BiChevronRight fontSize={`3rem`} />
                    </button>
                </aside>
            </div>
        </Swiper>
    )
}