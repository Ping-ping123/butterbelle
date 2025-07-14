import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User } from "lucide-react";

const Client = () => {

    const clientSays = [
        {
            id: 1,
            description: 'Kue-kuenya lembut, manisnya pas, dan dikemas dengan sangat cantik. Anak-anak saya sangat suka! Saya pasti akan order lagi untuk acara keluarga berikutnya.',
            name: 'Aulia Rahma',
            position: 'Ibu Rumah Tangga',
        },
        {
            id: 2,
            description: 'Pelayanannya cepat dan ramah, produk datang tepat waktu dan sesuai ekspektasi. Recommended banget buat kamu yang cari camilan premium!',
            name: 'Bapak Hendra',
            position: 'Pegawai Kantor',
        },
        {
            id: 3,
            description: 'Awalnya coba-coba beli karena penasaran, eh ternyata enak banget! Kualitas dan rasanya gak kalah sama bakery mahal. Terima kasih sudah bikin hari saya lebih manis',
            name: 'Claudia ',
            position: 'Mahasiswa',
        },
        {
            id: 4,
            description: 'Packaging-nya rapi, produk tetap utuh saat sampai. Rasanya juga otentik dan bikin nagih. Saya suka konsep estetik dan handmade-nya!',
            name: 'Niko Aditya',
            position: 'Freelencer',
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="lg:container mx-auto ">

            <SectionTitle title="Apa yang klien katakan tentang kami" mb='mb-11'></SectionTitle>

            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {
                        clientSays?.map((client, index) => (
                            <div key={index} className="p-12 border-[1px] border-[#e1e1e3] rounded-lg">
                                <p className="text-2xl mb-4 text-[#636270] font-inter font-normal client_say_description">{client?.description}</p>
                                <div className="flex items-center">
                                    <h4><User size='4rem' /></h4>
                                    <div>
                                        <h4 className="text-2xl text-[#272343] font-inter font-medium capitalize mb-1.5">{client?.name}</h4>
                                        <p className="text-base text-[#9a9caa] font-inter capitalize font-normal">{client?.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Client;