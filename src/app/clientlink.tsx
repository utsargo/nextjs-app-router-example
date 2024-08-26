"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import {
    useParams,
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import useHashPath from "@/hooks/useHashPath";

const ClientLink = ({
    children,
    href,
    classNames,
}: {
    children: ReactNode;
    href: string;
    classNames?: string;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const param = useParams();
    const searchParams = useSearchParams();
    const hashPathId = useHashPath();
    const hashHref = href.substring(1);
    const actualPathName = hashHref === "" ? hashPathId : `#${hashPathId}`;

    return (
        <Link
            href={href}
            className={`${classNames} ${hashHref === actualPathName ? "text-red-500" : ""}`}
            onClick={() => (window.location.href = hashHref)}
        >
            {children}
        </Link>
    );
};

export default ClientLink;
