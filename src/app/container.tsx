import type { ReactNode } from "react";

const Container = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={`mx-auto w-full max-w-7xl px-4 ${className}`}>
            {children}
        </div>
    );
};

export default Container;
