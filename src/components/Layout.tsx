import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div className="flex justify-center py-10">
                <div className="flex flex-col w-3/6">
                    {children}
                </div>
            </div>
        </>
    );
}