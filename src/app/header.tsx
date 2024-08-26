import Container from "./container";
import Link from "next/link";
import ClientLink from "./clientlink";
const Header = () => {
    return (
        <header className="fixed w-full bg-slate-950 text-slate-50">
            <Container className="flex items-center justify-between p-2">
                <div className="flex items-center justify-center gap-6">
                    <Link href="/" className="text-2xl font-bold">
                        Logo
                    </Link>
                    <ul className="flex items-center justify-start gap-2">
                        <li>
                            <ClientLink href="/#start">Home</ClientLink>
                        </li>
                        <li>
                            <ClientLink href="/#about">About</ClientLink>
                        </li>
                        <li>
                            <ClientLink href="/#contact">Contact</ClientLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link
                        href="/login"
                        className="px-4 py-2 text-lg text-slate-50"
                    >
                        Login
                    </Link>
                    <Link
                        href="/sign-up"
                        className="bg-slate-50 px-4 py-2 text-lg text-slate-950"
                    >
                        Sign UP
                    </Link>
                </div>
            </Container>
        </header>
    );
};

export default Header;
