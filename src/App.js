import React, { useState, useEffect } from 'react'
import OSDviewer from './OSDviewer'
import SideBar from './SideBar'

function App() {
  const [images, setImages] = useState([])

  const [selectedImage, setSelectedImage] = useState();

  const selectImage = (slide) => {
    setSelectedImage(slide.slide);
  };

  //fetches asynchronously images from url
  const getImages = async () => {
    const response = await fetch("https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/info.json")
    let image = await response.json();
    setImages(image.groups)
  }

  //runs after mounting
  useEffect(() => {
    getImages();
  }, [])

  return (
    <div className="container">
      <div className='label'>
        {/* sidebar for image titles from where you can choose which image to display */}
        <SideBar images={images} selectImage={selectImage} />
      </div>
      <div className='osdContainer'>
        <OSDviewer image={selectedImage} />
      </div>
    </div>
  )
}

export default App;
