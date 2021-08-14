import styled from "styled-components";
import React from "react";

//2 cách này hoàn toàn tương đương nhau
// export const Link = (props) => {
//     return <a className={props.className}>
//         {props.children}
//     </a>
// };
// let {className,children} = props;

export const Link = ({className,children,...restProps}) => (
    <a className={className} {...restProps}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
    background-color: yellow;
    color: palevioletred;
    font-weight: bold;
`
