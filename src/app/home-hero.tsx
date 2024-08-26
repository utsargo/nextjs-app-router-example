import Container from "./container";
import Link from "next/link";
const HomeHero = () => {
    return (
        <section className="flex h-96 w-full scroll-m-24" id="start">
            <Container className="flex flex-col items-center justify-center gap-4">
                <h1 className="mb-2 text-6xl font-bold text-slate-900">
                    Welcome to my blog.
                </h1>

                <p className="text-2xl font-semibold text-slate-700">
                    This is a simple blog created using Next.js and Tailwind
                    CSS.
                </p>

                <Link
                    href="/blogs"
                    className="rounded-lg bg-slate-950 px-4 py-2 text-slate-50 hover:bg-slate-800"
                >
                    Read the blog
                </Link>
            </Container>
        </section>
    );
};

export default HomeHero;
