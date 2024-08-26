import Container from "./container";

const HomeAbout = () => {
    return (
        <section className="h-screen scroll-m-[48px] bg-slate-700" id="about">
            <Container className="flex flex-col items-center justify-around gap-8">
                <h2 className="mb-2 py-8 text-4xl font-bold text-slate-50">
                    About
                </h2>

                <p className="text-xl text-slate-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc eget sapien in arcu cursus ultrices. Sed nec
                    sollicitudin ligula. Nullam in justo euismod, tincidunt orci
                    at, ultrices purus. Sed nec sollicitudin ligula. Nullam in
                    justo euismod, tincidunt orci at, ultrices purus. Sed nec
                    sollicitudin ligula. Nullam in justo euismod, tincidunt orci
                    at, ultrices purus.
                </p>
                <p className="text-xl text-slate-50">
                    Nullam in justo euismod, tincidunt orci at, ultrices purus.
                    Sed nec sollicitudin ligula. Nullam in justo euismod,
                    tincidunt orci at, ultrices purus. Sed nec sollicitudin
                    ligula. Nullam in justo euismod, tincidunt orci at, ultrices
                    purus. Sed nec sollicitudin ligula. Nullam in justo euismod,
                    tincidunt orci at, ultrices purus.
                </p>
                <p className="text-xl text-slate-50">
                    Sed nec sollicitudin ligula. Nullam in justo euismod,
                    tincidunt orci at, ultrices purus. Sed nec sollicitudin
                    ligula. Nullam in justo euismod, tincidunt orci at, ultrices
                    purus.
                </p>
            </Container>
        </section>
    );
};

export default HomeAbout;
