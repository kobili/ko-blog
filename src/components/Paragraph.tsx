interface ParagraphProps {
    children: string;
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