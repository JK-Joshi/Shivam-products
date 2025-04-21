import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./HomeSwiper.css";
import { Box } from "@mui/material";
import image1 from '../../Assets/MakerLocks/1.JPG'
import image2 from '../../Assets/MakerLocks/2.JPG'
import image3 from '../../Assets/MakerLocks/3.JPG'
import image4 from '../../Assets/MakerLocks/4.JPG'

const slides = [
    {
        image: image1,
        title: "Premium Zinc Handle Locks by Shivam Products",
        description:
            "Explore our precision-crafted zinc handle locks, combining strength, style, and durability for modern hardware needs.",
    },
    {
        image: image2,
        title: "Elegant and Durable Zinc Locks for Every Home",
        description:
            "Shivam Products offers premium zinc die-cast handle locks designed to elevate security and aesthetics.",
    },
    {
        image: image3,
        title: "Zinc Die-Cast Hardware Locks – Built to Last",
        description:
            "Engineered with care, our zinc locks deliver superior performance, perfect for both residential and commercial applications.",
    },
    {
        image: image4,
        title: "Maker Locks – Precision in Every Lock",
        description:
            "Manufacturing top-quality zinc handle locks with a focus on design, durability, and dependability.",
    }
];


const HomeSwiper = () => {
    const handleInquiryClick = (slideTitle) => {
        const emailSubject = encodeURIComponent(`Inquiry about Zinc Casting Products`);
        const emailBody = encodeURIComponent(
            `Dear Shivam Products Team,

I am writing to express my interest in your products, specifically regarding Zinc Casting Products.

I would like to:
- Learn more about your product specifications
- Discuss pricing and availability
- Understand the customization options available
- Get information about bulk orders and delivery timelines

Please provide me with detailed information about your products and services.

Looking forward to your response.

Best regards,`
        );

        window.location.href = `mailto:sales@shivamproducts.in?subject=${emailSubject}&body=${emailBody}`;
    };

    return (
        <section style={{ position: 'relative', marginTop: '3rem' }} className="creative-parallax--slider">
            <div className="creative-container">
                <Swiper
                    modules={[Navigation, Autoplay, EffectCreative]}
                    speed={1000}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    grabCursor={true}
                    effect="creative"
                    creativeEffect={{
                        prev: { shadow: true, translate: ["-120%", 0, -500] },
                        next: { shadow: true, translate: ["120%", 0, -500] },
                    }}
                    navigation={{
                        nextEl: ".swiper-nav-next",
                        prevEl: ".swiper-nav-prev",
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="f-slider-layer">
                                <img src={slide.image} alt={slide.title} />
                                <div className="f-slider-one-data">
                                    <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    <a
                                        className="slide-btn"
                                        href="www.shivamproducs"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleInquiryClick(slide.title);
                                        }}
                                    >
                                        Inquire Now <i className="fa-solid fa-angles-right"></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-nav">
                    <button className="swiper-nav-prev" aria-label="Previous slide">
                        <Box component={Icon} icon="ant-design:double-left-outlined" sx={{ fontSize: '1.2rem', fontWeight: 800 }} />
                    </button>
                    <button className="swiper-nav-next" aria-label="Next slide">
                        <Box component={Icon} icon="ant-design:double-right-outlined" sx={{ fontSize: '1.2rem', fontWeight: 800 }} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeSwiper;
