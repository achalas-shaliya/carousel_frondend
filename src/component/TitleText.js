import React from 'react'

export const TitleText = ({ title, subTitle }) => {
    return (
        <div class='text-on-image'>
            <h3>{title}</h3>
            <p>{subTitle}</p>
        </div>
    )
}
