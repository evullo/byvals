import {CSSProperties, ReactElement} from "react";
import { Link } from "react-router-dom";

export interface LinkCardProps {
    className?: string | '',
    style?: CSSProperties | Record<string, never>,
    link: string,
    linkText: string,
    logo: ReactElement
}

export default function LinkCard(props: LinkCardProps) {
    return(
        <Link to={props.link} target='_blank' className={`group ${props.className}`} style={props.style} >
            <div className="absolute transition-all duration-700 group-hover:opacity-0 group-hover:transform
                            group-hover:-translate-y-5 group-hover:scale-110 group-hover:skew-x-6 group-hover:blur-md">
                {props.logo}
            </div>
            <div className="opacity-0 transition-all duration-1000 ease group-hover:opacity-100">
                <p className={`text-xs font-bold text-center md:text-sm lg:text-md`}>
                    {props.linkText}
                </p>
            </div>
        </Link>
    )
}