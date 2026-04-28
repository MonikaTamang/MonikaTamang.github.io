"use client";

import { useEffect, useState } from "react";

export default function IntroWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`transition-all duration-1000 ease-out ${show
                    ? "opacity-100 scale-100 blur-0"
                    : "opacity-0 scale-95 blur-sm"
                }`}
        >
            {children}
        </div>
    );
}