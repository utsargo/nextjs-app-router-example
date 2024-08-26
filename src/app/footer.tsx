import Container from "./container";

const Footer = () => {
    return (
        <footer className="mt-auto bg-slate-950 text-slate-50">
            <Container className="flex items-center justify-center">
                <p className="text-xl">
                    Copyright &copy; {new Date().getFullYear()} Utsargo Roy |
                    All rights reserved
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
