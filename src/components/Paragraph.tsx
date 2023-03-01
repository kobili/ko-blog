import { ReactNode } from "react";

interface ParagraphProps {
    children: ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
    return (
        <>
            <p className="my-3">
                {children}
            </p>
        </>
    );
}