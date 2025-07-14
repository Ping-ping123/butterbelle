import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {

    const features = [
        {
            title: 'Strawberry Roll Cake',
            status: 'New',
            price: 'Rp 25.000',
            image: '/src/assets/features/strawberry roll cake.jpeg',
            currentPrice: 'Rp 20.000',
        },
        {
            title: 'Kue Beras',
            status: 'Sales',
            price: 'Rp 10.000',
            image: '/src/assets/features/kue beras.jpeg',
        },
        {
            title: 'Roti Ubi Unggu',
            price: 'Rp 17.000',
            image: '/src/assets/features/roti ubi unggu.jpeg',
        },
        {
            title: 'Kue Sus Prancis',
            status: 'New',
            price: 'Rp 27.000',
            image: '/src/assets/features/roti sus.jpeg',
            currentPrice: 'Rp 23.000',
        },
        {
            title: 'Stuffed Cookies',
            status: 'New',
            price: 'Rp 35.000',
            image: '/src/assets/features/stuffed cookies.jpeg',
            currentPrice: 'Rp 30.000',
        },
        {
            title: 'Roti Sosis Korea',
            status: 'Sales',
            price: 'Rp 12.000',
            image: '/src/assets/features/roti isi korea.jpeg',
        },
        {
            title: 'Donat Premium',
            price: 'Rp 18.000',
            image: '/src/assets/features/donat premium.jpeg',
        },
        {
            title: 'Strawberry Shortcake',
            status: 'New',
            price: 'Rp 28.000',
            image: '/src/assets/features/cake.jpg',
            currentPrice: 'Rp 24.000',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="lg:container mx-auto">
                <SectionTitle title="Produk Unggulan" mb="mb-11" />

                <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {
                            features?.map((feature, index) => (
                                <div key={index} className="p-4">
                                    {/* Image Section */}
                                    <div className="relative h-64 bg-white flex items-center justify-center overflow-hidden rounded-lg mb-4">
                                        <img
                                            className="h-full w-auto object-contain"
                                            src={feature?.image}
                                            alt={`Gambar dari ${feature?.title}`}
                                        />
                                        {
                                            feature?.status && (
                                                <div className="absolute top-4 left-4 bg-[#EB89B5] text-white px-2 py-1 rounded-lg">
                                                    <span className="text-sm font-inter font-normal">{feature?.status}</span>
                                                </div>
                                            )
                                        }
                                    </div>

                                    {/* Title & Price Section */}
                                    <div className="feature_content">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-base text-[#007580] capitalize font-inter font-normal">{feature?.title}</h4>

                                            {/* Cart Icon - Open WhatsApp Message */}
                                            <a
                                                href={`https://wa.me/6285752659893?text=${encodeURIComponent(
                                                    `Halo! Saya mau pesan: ${feature.title}. Apakah masih tersedia?`
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="bg-[#EB89B5] h-[44px] w-[44px] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                                                    <ShoppingCart size="1.5rem" color="#fff" />
                                                </span>
                                            </a>
                                        </div>

                                        <p className="text-xl flex items-center gap-2 text-[#EB89B5] font-semibold font-inter">
                                            {feature?.currentPrice || feature?.price}
                                            {
                                                feature?.currentPrice && (
                                                    <span className="text-sm text-[#9a9caa] font-inter font-normal line-through">
                                                        {feature?.price}
                                                    </span>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Features;
