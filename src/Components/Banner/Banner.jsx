import { MoveRight } from "lucide-react";

const Banner = () => {
  const product = {
    id: 1,
    title: "Manis and Hangat",
    subTitle: "Selamat Datang di ButterBelle",
    image: "/src/assets/Banner/bannerbb.png",
  };

  return (
    <div className="lg:container">
      <div className="w-full h-full">
        <div className="banner_slide_item flex items-center justify-between">
          <div className="banner_text">
            <p className="text-sm font-inter text-[#EB89B5] uppercase font-normal">
              {product.subTitle}
            </p>
            <h3 className="text-6xl text-[#EB89B5] font-inter capitalize leading-16 max-w-[631px] w-full font-bold mb-5">
              {product.title}
            </h3>
            <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#EB89B5] rounded-lg capitalize text-white cursor-pointer">
              Order now <MoveRight />
            </button>
          </div>
          <div className="banner_image w-full h-full flex items-center justify-end">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;