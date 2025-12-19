import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="flex flex-col gap-[47px] px-[80px] py-[40px] w-full">
            {/* Text Content */}
            <div className="flex flex-col gap-[17px]">
                {/* Heading */}
                <h2 className="font-medium text-[44px] leading-[1.29] tracking-[-0.88px] text-black">
                    <span className="text-[#233cc5]">Who</span> We Are
                </h2>

                {/* Description */}
                <div className="font-normal text-[20px] leading-[1.29] tracking-[-0.4px] text-black">
                    <p className="mb-0">
                        Taldo is a healthcare talent accelerator helping Indian nurses build long-term, successful careers in Germany. Through our flagship program, Gateway to Germany, we prepare nurses with the language skills, professional readiness, and cultural understanding needed to integrate confidently into the German healthcare system.
                    </p>
                    <p className="mt-0">
                        We believe global mobility should be transparent, ethical, and supportive. With this foundation, Taldo bridges India's skilled nursing workforce with Germany's urgent need for qualified healthcare professionals.
                    </p>
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-[437px] rounded-[12px] overflow-hidden">
                <Image
                    src="/about/who-we-are.webp"
                    alt="German flag with historic building"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
}
