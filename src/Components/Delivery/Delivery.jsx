import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
    return (
        <div className="lg:container bg-white mx-auto shadow-md p-7 rounded-2xl">
            <div className="grid grid-cols-4">
                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><Percent size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Diskon</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Promo baru setiap minggu</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><Truck size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Pengantaran Gratis</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">100% Gratis untuk semua Pesanan</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><Clock3 size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Dukungan Terbaik 24/7</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Kami peduli dengan pengalaman Anda</p>
                        </div>
                    </div>
                </div>


                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><ShieldCheck size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Pembayaran Aman</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">100% Metode Pembayaran Aman</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;