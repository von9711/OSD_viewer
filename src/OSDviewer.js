import React, {useState, useEffect} from 'react'
import {OpenSeadragon, initOverlay, fabric} from 'openseadragon-fabricjs-overlay'
import ToolBar from './ToolBar'

const OSDviewer = ({image}) => {
    const [viewer, setViewer] = useState(null)
    const [overlay, setOverlay] = useState(null)

    useEffect(() => {
        if (image && viewer) {
            viewer.open(image.source)
            if (overlay) {
                overlay.fabricCanvas().clear()
            }
            setOverlay(viewer.fabricjsOverlay({ scale: 1000 }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image])


    //creates a openseadragon viewer instance and assigned it to viewer
    const InitOpenseadragon = () => {
        viewer && viewer.destroy()
        setViewer(
            OpenSeadragon({
                id: "openSeaDragon",
                prefixUrl: "osd-images/",
                animationTime: 0.5,
                blendTime: 0.1,
                constrainDuringPan: true,
                maxZoomPixelRatio: 2,
                minZoomLevel: 1,
                visibilityRatio: 1,
                zoomPerScroll: 2,
                showNavigationControl: true,
            })
        )
    }

    //runs after mounting, calls initialization fucion and destroys the viewer after unmounting.
    useEffect(() => {
        InitOpenseadragon()
        initOverlay(OpenSeadragon, fabric)
        return () => {
            viewer && viewer.destroy()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <ToolBar overlay={overlay} />
            {/* viewer will be formed inside this div (same id is used in OpenSeaDragon() function) */}
            <div id="openSeaDragon"></div>
        </div>
    )
}

export default OSDviewer
