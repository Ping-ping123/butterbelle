import {
  Armchair,
  Banknote,
  CreditCard,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#EB89B5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-4">
            <div>
              {/* logo wrapper  */}
              <div className="logo_wrapper mb-7">
                <Link
                  to="/"
                  className="text-3xl text-white font-inter font-medium capitalize flex items-center gap-2"
                >
                  <Armchair size="2rem" color="#EB89B5" /> comforty
                </Link>
              </div>

              <p className="text-base text-[#EB89B5] font-inter font-normal mb-4 max-w-[350px]">
                Kami menyediakan berbagai jenis kursi terbaik untuk kenyamanan Anda. 
                Temukan pilihan produk dengan kualitas tinggi dan desain menarik.
              </p>

              <div className="footer_social flex items-center gap-3">
                <Link className="p-3 rounded-full border-[#EB89B5] inline-block border-[1px]">
                  <Facebook size="1.5rem" color="#EB89B5" />
                </Link>

                <Link className="p-3 inline-block">
                  <Twitter size="1.5rem" color="#EB89B5" />
                </Link>

                <Link className="p-3 inline-block">
                  <Instagram size="1.5rem" color="#EB89B5" />
                </Link>

                <Link className="p-3 inline-block">
                  <Youtube size="1.5rem" color="#EB89B5" />
                </Link>
              </div>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#EB89B5] font-inter font-medium uppercase">
                Kategori
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    sofa
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    kursi berlengan
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    kursi sayap
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    kursi meja
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    kursi kayu
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    bangku taman
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#EB89B5] font-inter font-medium uppercase">
                dukungan
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    bantuan & dukungan
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    syarat & kententuan
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    kebijakan privasi
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#EB89B5] font-inter font-normal capitalize">
                    bantuan
                  </Link>
                </li>
              </ul>
            </div>

            <div className="newsletter">
              <h3 className="text-xl text-[#EB89B5] font-inter font-medium uppercase">
                buletin
              </h3>
              <form
                action="#"
                className="max-w-[424px] w-full flex items-center gap-2"
              >
                <input
                  type="email"
                  placeholder="Email Anda.."
                  className="max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2"
                />
                <button
                  type="submit"
                  className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#EB89B5] rounded-lg cursor-pointer"
                >
                  Langganan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom w-full h-[75px] flex items-center justify-center ">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base text-[#EB89B5] font-normal font-inter">
                @ 2025 Blogy- Designed & Develop{" "}
                <span className="text-[#EB89B5]">Lifeonthecode</span>
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              <p className="flex items-center gap-2 text-[#EB89B5] text-xl">
                Bank Note <Banknote size="2rem" />
              </p>

              <p className="flex items-center gap-2 text-[#EB89B5] text-xl">
                Credit Card <CreditCard size="2rem" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
