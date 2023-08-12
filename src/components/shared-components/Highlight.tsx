import React, { useEffect } from "react";

export interface IHighlightProps {
    children: React.ReactNode
}
export const Highlight: React.FC<IHighlightProps> = (props): React.ReactElement => {
    return (
        <>
            <span style={{ backgroundColor: "yellow" }}>
                {props.children}
            </span>
        </>
    )
};


