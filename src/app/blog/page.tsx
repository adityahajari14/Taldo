import Link from 'next/link';
import Image from 'next/image';
import blogs from '@/data/blogs.json';

export default function BlogListingPage() {
    return (
        <main className="flex flex-col w-full bg-background">
            <div className="w-full max-w-[1280px] mx-auto px-6 py-12 md:py-16">
                <h1 className="font-normal text-[32px] md:text-[48px] leading-[1.3] text-black mb-12 md:mb-16">
                    Our Blog
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.id}
                            href={`/blog/${blog.id}`}
                            className="group flex flex-col gap-4 hover:opacity-80 transition-opacity"
                        >
                            <div className="relative w-full h-[240px] rounded-[15px] overflow-hidden bg-gray-200">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-normal text-sm md:text-base leading-[1.4] text-gray-600">
                                    {blog.date}
                                </p>
                                <h2 className="font-normal text-xl md:text-2xl leading-[1.4] text-black">
                                    {blog.title}
                                </h2>
                                <p className="font-normal text-base md:text-lg leading-[1.5] text-gray-700 line-clamp-2">
                                    {blog.content.intro}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
