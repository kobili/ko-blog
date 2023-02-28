import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col items-center w-3/6">
                    {children}
                </div>
            </div>
        </>
    );
}