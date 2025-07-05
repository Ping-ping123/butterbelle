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
      title: "all",
      product: "all",
    },
    {
      id: 1,
      title: "newest",
      product: "newest",
    },
    {
      id: 2,
      title: "trending",
      product: "trending",
    },
    {
      id: 3,
      title: "best seller",
      product: "best_seller",
    },
  ];

  const products = [
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      currentPrice: "$200",
      product: "newest",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "newest",
    },
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      currentPrice: "$200",
      product: "newest",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "newest",
    },

    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "trending",
    },
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      currentPrice: "$200",
      product: "trending",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "trending",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "trending",
    },
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      currentPrice: "$200",
      product: "best_seller",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "best_seller",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "best_seller",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "best_seller",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "featured",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "featured",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "featured",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "featured",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "all",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "all",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "all",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "all",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "all",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "all",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "all",
    },
    {
      title: "Placeholder",
      status: "Sales",
      price: "$250",
      image: "/src/assets/products/cake.jpg",
      product: "all",
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
          title={"our product"}
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
