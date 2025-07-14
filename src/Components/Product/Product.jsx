import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {
  const [active, setActive] = useState({
    id: 0,
    product: "semua",
  });

  const productTitle = [
    { id: 0, title: "semua", product: "semua" },
    { id: 1, title: "terbaru", product: "terbaru" },
    { id: 2, title: "sedang tren", product: "tren" },
    { id: 3, title: "produk terlaris", product: "produk terlaris" },
  ];

  const products = [
    {
      title: "Dorayaki Gulung",
      status: "New",
      price: "Rp 8.000",
      image: "/src/assets/products/dorayaki-gulung.jpeg",
      currentPrice: "Rp 10.000",
      product: "terbaru",
    },
    {
      title: "Brownies Coklat",
      status: "Sales",
      price: "Rp 15.000",
      image: "/src/assets/products/brownies-coklat.jpeg",
      product: "terbaru",
    },
    {
      title: "Cokelat Kitkat",
      status: "New",
      price: "Rp 20.000",
      image: "/src/assets/products/cokelat kitkat.jpeg",
      currentPrice: "Rp 23.000",
      product: "terbaru",
    },
    {
      title: "Desert Box",
      status: "Sales",
      price: "Rp 25.000",
      image: "/src/assets/products/desert-box.jpeg",
      product: "terbaru",
    },
    {
      title: "Kue Tart",
      status: "Sales",
      price: "Rp 15.000",
      image: "/src/assets/products/kue-tart.jpeg",
      product: "tren",
    },
    {
      title: "Brownies Coklat",
      status: "New",
      price: "Rp 15.000",
      image: "/src/assets/products/brownies-coklat.jpeg",
      currentPrice: "Rp 15.000",
      product: "tren",
    },
    {
      title: "Donat Bunga",
      status: "Sales",
      price: "Rp 7.000",
      image: "/src/assets/products/donat-bunga.jpeg",
      product: "tren",
    },
    {
      title: "Roti Ikan Cake",
      status: "Sales",
      price: "Rp 4.000",
      image: "/src/assets/products/roti-ikan-cake.jpeg",
      product: "tren",
    },
    {
      title: "Macaron",
      status: "New",
      price: "Rp 20.000",
      image: "/src/assets/products/macaron.jpeg",
      currentPrice: "RpRp 18.000",
      product: "produk terlaris",
    },
    {
      title: "Roti SUSU BUN",
      status: "Sales",
      price: "Rp 35.000 ",
      image: "/src/assets/products/roti susu bun.jpeg",
      product: "produk terlaris",
    },
    {
      title: "Desert Box",
      status: "Sales",
      price: "Rp 25.000",
      image: "/src/assets/products/desert-box.jpeg",
      product: "produk terlaris",
    },
    {
      title: "Mochi",
      status: "Sales",
      price: "Rp 18.000",
      image: "/src/assets/products/mochi.jpeg",
      product: "produk terlaris",
    },
    {
      title: "Mochi",
      status: "Sales",
      price: "Rp 18.000",
      image: "/src/assets/products/mochi.jpeg",
      product: "semua",
    },
    {
      title: "Roti SUSU BUN",
      status: "Sales",
      price: "Rp 35.000",
      image: "/src/assets/products/roti susu bun.jpeg",
      product: "semua",
    },
    {
      title: "Roti Ikan",
      status: "Sales",
      price: "Rp 4.000",
      image: "/src/assets/products/roti-ikan-cake.jpeg",
      product: "semua",
    },
    {
      title: "Macaron",
      status: "Sales",
      price: "Rp 20.000",
      image: "/src/assets/products/macaron.jpeg",
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

  const productFilter =
    active.product === "semua"
      ? products
      : products.filter((product) => product.product === active.product);

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle
          title={"produk habis"}
          textAlign={"center"}
          mb={"mb-5"}
        />

        <div className="flex items-center justify-center gap-6 mb-11">
          {productTitle.map((title) => (
            <button
              key={title.id}
              onClick={() =>
                setActive({
                  id: title.id,
                  product: title.product,
                })
              }
              className={`text-base font-black uppercase font-inter cursor-pointer ${
                active.id === title.id
                  ? "text-[#EB89B5] underline"
                  : "text-[#EB89B5]"
              }`}
            >
              {title.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productFilter.map((product, index) => (
          <div key={index} className="p-4">
            <div className="feature_image mb-4 relative">
              <img
                className="w-full max-h-[312px] rounded-lg object-cover"
                src={product.image}
                alt={product.title}
              />
              {product.status && (
                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                  <button className="text-sm font-inter font-normal">
                    {product.status}
                  </button>
                </div>
              )}
            </div>
            <div className="feature_content">
              <div className="flex items-center justify-between">
                <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                  {product.title}
                </h4>
                <span className="bg-[#FFF] h-[44px] w-[44px] rounded-lg flex items-center justify-center border border-[#EB89B5]">
                  <ShoppingCart size="1.5rem" color="#EB89B5" />
                </span>
              </div>
              <p className="text-xl flex items-center gap-2 text-[#EB89B5] font-semibold font-inter ">
                {product.price}
                {product.currentPrice && (
                  <span className="text-sm text-[#EB89B5] font-inter font-normal line-through">
                    {product.currentPrice}
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
