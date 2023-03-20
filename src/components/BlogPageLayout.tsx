import type { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
    children: ReactNode;
}
export default function BlogPageLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="flex justify-center py-10">
                <div className="flex flex-col w-3/6">
                    <div className="mb-10">
                        <Link href="/" className="text-blue-500 drop-shadow-sm">Back home</Link>
                    </div>
                    
                    {children}

                    <div className="mt-10">
                        <Link href="/" className="text-blue-500 drop-shadow-sm">Back home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}