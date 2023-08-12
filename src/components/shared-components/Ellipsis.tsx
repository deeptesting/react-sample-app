import React, { useEffect } from "react";
//import "../../Tooltip.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export interface IEllipsisProps {
    maxCharacterLen?: number;
    isTooltipRequired?: boolean;
    children: React.ReactNode;
}
export const Ellipsis: React.FC<IEllipsisProps> = (props): React.ReactElement => {

    const data = props.children as string;
    const limit = props.maxCharacterLen || 15;

    const renderData = data.length > limit ? `${data.substring(0, limit - 3)}...` : data;

    return (
        <>
            {props.isTooltipRequired === true &&
            
                <span className="tooltip1" data-bs-toggle="tooltip" title={data}>
                    {renderData}
                </span>
            }
            {
               !props.isTooltipRequired &&
               <>{renderData}</>
            }
        </>
    )
};


