import { notFound } from 'next/navigation';
import Image from 'next/image';
import blogs from '@/data/blogs.json';
import OtherBlogs from '@/components/OtherBlogs';

interface BlogPost {
    id: string;
    title: string;
    date: string;
    image: string;
    content: {
        intro: string;
        paragraphs: string[];
        bulletPoints: string[];
    };
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id) as BlogPost | undefined;

    if (!blog) {
        notFound();
    }

    return (
        <main className="flex flex-col w-full bg-background min-h-screen">
            <div className="relative w-full max-w-[1280px] mx-auto pt-8 md:pt-12 pb-16 md:pb-20">
                {/* Share Section - Desktop Only */}
                <div className="hidden xl:flex absolute right-20 top-40 flex-col gap-[18px] items-center z-10">
                    <p className="font-normal text-base leading-[22.4px] text-black mb-1">
                        Share
                    </p>
                    <button
                        className="w-[46px] h-[46px] hover:opacity-70 transition-opacity"
                        aria-label="Share on Twitter"
                    >
                        <Image
                            src="/blog/Twitter.svg"
                            alt="Twitter"
                            width={46}
                            height={46}
                        />
                    </button>
                    <button
                        className="w-[46px] h-[46px] hover:opacity-70 transition-opacity"
                        aria-label="Share on Facebook"
                    >
                        <Image
                            src="/blog/Facebook.svg"
                            alt="Facebook"
                            width={46}
                            height={46}
                        />
                    </button>
                    <button
                        className="w-[46px] h-[46px] hover:opacity-70 transition-opacity"
                        aria-label="Share on LinkedIn"
                    >
                        <Image
                            src="/blog/LinkedIn.svg"
                            alt="LinkedIn"
                            width={46}
                            height={46}
                        />
                    </button>
                    <button
                        className="w-[46px] h-[46px] hover:opacity-70 transition-opacity"
                        aria-label="Share via Email"
                    >
                        <Image
                            src="/blog/Mail.svg"
                            alt="Mail"
                            width={46}
                            height={46}
                        />
                    </button>
                </div>

                {/* Main Content */}
                <article className="max-w-[1060px]">
                    {/* Title */}
                    <h1 className="font-normal text-[32px] md:text-[42px] leading-[1.48] text-black mb-4 md:mb-6">
                        {blog.title}
                    </h1>

                    {/* Date */}
                    <p className="font-normal text-lg md:text-xl leading-[1.4] text-black mb-10 md:mb-14">
                        {blog.date}
                    </p>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-[16/9] md:aspect-[1060/600] rounded-[15px] overflow-hidden mb-10 md:mb-14 bg-gray-200">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                        {/* Intro */}
                        <p className="font-medium text-xl md:text-3xl leading-[1.42] text-black mb-8 md:mb-10 max-w-[1137px]">
                            {blog.content.intro}
                        </p>

                        {/* Paragraphs */}
                        {blog.content.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="font-normal text-lg md:text-xl leading-[1.42] text-black max-w-[880px] mb-8 md:mb-10"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {/* Bullet Points */}
                        <div className="flex flex-col gap-5 md:gap-6 mt-2 md:mt-4">
                            {blog.content.bulletPoints.map((point, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-[4px] bg-black mt-3 shrink-0" />
                                    <p className="font-normal text-lg md:text-xl leading-[1.4] text-black max-w-[808px]">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Mobile Share Section */}
                <div className="xl:hidden flex flex-row gap-4 items-center justify-center mt-12 md:mt-16 pt-8 border-t border-gray-300">
                    <p className="font-normal text-base leading-[22.4px] text-black">
                        Share:
                    </p>
                    <button
                        className="w-[40px] h-[40px] hover:opacity-70 transition-opacity"
                        aria-label="Share on Twitter"
                    >
                        <Image
                            src="/blog/Twitter.svg"
                            alt="Twitter"
                            width={40}
                            height={40}
                        />
                    </button>
                    <button
                        className="w-[40px] h-[40px] hover:opacity-70 transition-opacity"
                        aria-label="Share on Facebook"
                    >
                        <Image
                            src="/blog/Facebook.svg"
                            alt="Facebook"
                            width={40}
                            height={40}
                        />
                    </button>
                    <button
                        className="w-[40px] h-[40px] hover:opacity-70 transition-opacity"
                        aria-label="Share on LinkedIn"
                    >
                        <Image
                            src="/blog/LinkedIn.svg"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                        />
                    </button>
                    <button
                        className="w-[40px] h-[40px] hover:opacity-70 transition-opacity"
                        aria-label="Share via Email"
                    >
                        <Image
                            src="/blog/Mail.svg"
                            alt="Mail"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
            </div>

            {/* Other Blogs Section */}
            <OtherBlogs blogs={blogs} currentBlogId={id} heading='Other Blogs' limit={6} />
        </main>
    );
}
