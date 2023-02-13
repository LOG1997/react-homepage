import React from 'react'
import { ISvgProps } from '@/types/components'
import './index.scss'
export default function SvgIcon(props: ISvgProps) {
    const { name, prefix = "icon", iconStyle = { width: "20px", height: "20px", fill: "currentColor", color: "#fff" } } = props;
    const symbolId = `#${prefix}-${name}`;
    return (
        <svg className="svg-style" aria-hidden="true" style={iconStyle}>
            <use href={symbolId} />
        </svg>
    )
}
