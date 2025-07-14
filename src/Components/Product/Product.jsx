import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {
  const [active, setActive] = useState({
    id: 0,
    product: "all",
  });

  const productTitle = [
    {
      id: 0,
      title: "semua",
      product: "semua",
    },
    {
      id: 1,
      title: "terbaru",
      product: "newest",
    },
    {
      id: 2,
      title: "sedang tren",
      product: "sedang tren",
    },
    {
      id: 3,
      title: "produk terlaris",
      product: "produk terlaris",
    },
  ];

  const products = [
    {
      title: "Cupcake Karakter",
      status: "New",
      price: "30.000",
      image: "/src/assets/products/cupcake-karakter.jpeg",
      currentPrice: "25.000",
      product: "terbaru",
    },
    {
      title: "Mini Bundt Cake",
      status: "Sales",
      price: "Rp 30.000",
      image: "/src/assets/products/mini-cake.jpeg",
      product: "terbaru",
    },
    {
      title: "Roti Abon Mayones",
      status: "New",
      price: "$250",
      image: "/src/assets/products/roti-abon-mayones.jpeg",
      currentPrice: "$200",
      product: "terbaru",
    },
    {
      title: "Desert Box",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/desert-box.jpeg",
      product: "terbaru",
    },

    {
      title: "Kue Tart",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/kue-tart.jpeg",
      product: "tren",
    },
    {
      title: "Brownies Coklat",
      status: "New",
      price: "$250",
      image: "/src/assets/products/brownies-coklat.jpeg",
      currentPrice: "$200",
      product: "tren",
    },
    {
      title: "Donat Bunga",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/donat-bunga.jpeg",
      product: "tren",
    },
    {
      title: "Roti Ikan Cake",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/roti-ikan-cake.jpeg",
      product: "tren",
    },
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      currentPrice: "$200",
      product: "produk terlaris",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "produk terlaris",
    },
    {
      title: "Desert Box",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/desert-box.jpeg",
      product: "produk terlaris",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "produk terlaris",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "Unggulan",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "unggulan",
    },
    {
      title: "Desert Box",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/desert-box.jpeg",
      product: "unggulan",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "unggulan",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "semua",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "semua",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "semua",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "semua",
    },
    {
      title: "Kue Beras",
      status: "Sales",
      price: "Rp 10.000",
      image: "/src/assets/products/kue beras.jpeg",
      product: "semua",
    },
    {
      title: "Roti Sosis Korea",
      status: "Sales",
      price: "Rp 12.000",
      image: "/src/assets/products/roti isi korea.jpeg",
      product: "semua",
    },
    {
      title: "Sandwich Egg Drop",
      status: "Sales",
      price: "Rp 12.000",
      image: "/src/assets/products/sandiwch-egg-drop.jpeg",
      product: "semua",
    },
    {
      title: "Roti Krim Kacang",
      status: "Sales",
      price: "Rp 6.000",
      image: "/src/assets/products/roti-krim-kacang.jpeg",
      product: "semua",
    },
  ];

  const productFilter = products.filter(
    (product) => product.product === active?.product
  );
  console.log(productFilter);

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle
          title={"produk habis"}
          textAlign={"center"}
          mb={"mb-5"}
        ></SectionTitle>

        <div className="flex items-center justify-center gap-6 mb-11">
          {productTitle?.map((title, indx) => (
            <button
              key={title?.id}
              onClick={() =>
                setActive({
                  id: title?.id,
                  product: title?.product,
                })
              }
              className={`text-base font-black uppercase font-inter cursor-pointer ${
                active?.id === indx ? "text-[#EB89B5]" : "text-[#EB89B5]"
              }`}
            >
              {title?.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 items-center gap-6">
        {productFilter?.map((product, index) => (
          <div key={index} className="p-4">
            <div className="feature_image mb-4 relative">
              <img
                className="w-full max-h-[312px] rounded-lg object-cover"
                src={product?.image}
                alt={product?.title}
              />
              {product?.status && (
                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                  <button className="text-sm font-inter font-normal">
                    {product?.status}
                  </button>
                </div>
              )}
            </div>
            <div className="feature_content">
              <div className="flex items-center justify-between">
                <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                  {product?.title}
                </h4>
                <span className="bg-[#FFF] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                  <ShoppingCart size="1.5rem" color="#fff" />
                </span>
              </div>
              <p className="text-xl flex items-center gap-2 text-[#EB89B5] font-semibold font-inter ">
                {product?.price}
                {product?.currentPrice && (
                  <span className="text-sm text-[#EB89B5] font-inter font-normal">
                    {product?.currentPrice}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
