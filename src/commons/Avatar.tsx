import React from "react";

class AvatarParam {
    src!: string;
    size: number = 10;
    style?: React.CSSProperties;
}

function Avatar(params: AvatarParam){
    return (
        <img src={params.src}  style={{
            borderRadius: '50%',
            overflow: 'hidden',
            height: params.size + 'px',
            width: params.size + 'px',
            display: 'inline',
            ...params.style
        }}/>
    )
}


export default Avatar;