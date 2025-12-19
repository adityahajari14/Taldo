export default function CoreValues() {
    const values = [
        {
            title: "Integrity",
            description: "We do what we say, and we honour every commitment."
        },
        {
            title: "Transparency",
            description: "Every step, fee, and requirement is documented and explained upfront."
        },
        {
            title: "Empathy",
            description: "We support each nurse as an individual, understanding the emotional and professional challenges of relocating abroad."
        },
        {
            title: "Accountability",
            description: "We take responsibility for the outcomes of our training, processes, and candidate support."
        },
        {
            title: "Impact",
            description: "We focus on life-changing opportunities that strengthen careers and healthcare systems."
        }
    ];

    return (
        <section className="px-[80px] py-[40px] w-full">
            <div className="flex flex-col gap-4">
                {/* Heading */}
                <h2 className="font-medium text-[44px] leading-[1.29] tracking-[-0.88px] text-black">
                    Our <span className="text-[#233cc5]">Core Values</span>
                </h2>

                {/* Values Grid */}
                <div className="flex gap-[20px]">
                    {values.map((value, index) => (
                        <div key={index} className="flex-1">
                            <div className="bg-[#8c9aeb] rounded-[12px] p-[16px] h-full flex flex-col gap-[8px] items-center text-center text-white">
                                <h3 className="font-medium text-[24px] leading-[1.29] tracking-[-0.48px]">
                                    {value.title}
                                </h3>
                                <p className="font-normal text-[20px] leading-[1.29] tracking-[-0.4px]">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
