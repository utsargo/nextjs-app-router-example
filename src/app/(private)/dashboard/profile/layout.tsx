import type { ReactNode } from "react";
const ProfileLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="border border-green-700">
            <aside>Profile Dashboard</aside>
            {children}
        </div>
    );
};

export default ProfileLayout;
