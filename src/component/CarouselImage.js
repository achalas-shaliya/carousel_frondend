import React from 'react'

export const CarouselImage = ({ imgUrl }) => {
    return (
        <div className="head-image">
            <img src={imgUrl} alt="Freedom Blog" width="500" heigh="500" />
        </div>
    )
}
