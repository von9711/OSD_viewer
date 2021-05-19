import React from 'react'

const SideBar = ({images, selectImage}) => {
    return (
        <div>
            <h2>Images</h2>
            {images.map((group, index) => {
                return (
                    <div key={index} className='imageLabel'>
                        <h3 key={index}>{group.name}</h3>
                        {group.slides.map((slide, index) => {
                            return (
                                <button
                                    className='btn'
                                    key={index.toString()}
                                    onClick={() => selectImage(slide)}
                                >
                                    {slide.name}
                                </button>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default SideBar
