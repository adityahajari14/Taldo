import Image from "next/image";

export default function Team() {
    return (
        <section className="px-[80px] py-[40px] w-full">
            <div className="flex flex-col gap-[31px]">
                {/* Header Section */}
                <div className="flex flex-col gap-[17px]">
                    {/* Heading */}
                    <h2 className="font-medium text-[44px] leading-[1.29] tracking-[-0.88px] text-black">
                        Meet the <span className="text-[#233cc5]">Team</span>
                    </h2>

                    {/* Description */}
                    <p className="font-normal text-[20px] leading-[1.29] tracking-[-0.4px] text-black">
                        Taldo is led by Nirav Devpura and Sweta Jain, a team that blends global business expertise with deep linguistic and cross-cultural understanding.
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="flex gap-[24px] w-full">
                    {/* Nirav Devpura */}
                    <div className="flex gap-[23px] flex-1">
                        {/* Image */}
                        <div className="relative w-[243.5px] h-[363px] rounded-[12px] overflow-hidden shrink-0">
                            <Image
                                src="/about/nirav-devpura.webp"
                                alt="Nirav Devpura"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-[4px] flex-1">
                            <h3 className="font-semibold text-[24px] leading-[1.29] tracking-[-0.48px] text-black">
                                Nirav Devpura
                            </h3>
                            <p className="font-normal text-[20px] leading-[1.29] tracking-[-0.4px] text-black">
                                Nirav brings years of experience building companies with structure, ethics, and long-term value. He oversees candidate strategy, partnerships, and the operational backbone of the program.
                            </p>
                        </div>
                    </div>

                    {/* Sweta Jain */}
                    <div className="flex gap-[23px] flex-1">
                        {/* Image */}
                        <div className="relative w-[243.5px] h-[363px] rounded-[12px] overflow-hidden shrink-0">
                            <Image
                                src="/about/sweta-jain.webp"
                                alt="Sweta Jain"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-[4px] w-[358px]">
                            <h3 className="font-semibold text-[24px] leading-[1.29] tracking-[-0.48px] text-black">
                                Sweta Jain
                            </h3>
                            <p className="font-normal text-[20px] leading-[1.29] tracking-[-0.4px] text-black">
                                Sweta is proficient in five international languages and plays a crucial role in linguistic training quality, cultural orientation, and candidate mentorship.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
