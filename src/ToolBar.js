import React from 'react'
import {fabric } from 'openseadragon-fabricjs-overlay'


const ToolBar = ({overlay}) => {

    const addRectangle = () => {
        if (overlay) {
            let rect = new fabric.Rect({
                left: 50,
                top: 50,
                fill: 'rgba(0, 0, 0, 0',
                stroke: 'red',
                strokeWidth: 5,
                width: 100,
                height: 100,
            })
            overlay.fabricCanvas().add(rect)
        }
    }

    const addTriangle = () => {
        if (overlay) {
            let tri = new fabric.Triangle({
                left: 50,
                top: 50,
                fill: 'rgba(0, 0, 0, 0',
                stroke: 'red',
                strokeWidth: 5,
                width: 100,
                height: 100,
            })
            overlay.fabricCanvas().add(tri)
        }
    }

    const addCircle = () => {
        if (overlay) {
            let tri = new fabric.Circle({
                radius: 30,
                left: 50,
                top: 50,
                fill: 'rgba(0, 0, 0, 0',
                stroke: 'red',
                strokeWidth: 4,
                width: 200,
                height: 200,
            })
            overlay.fabricCanvas().add(tri)
        }
    }

    return (
        <ul className='shapeList'>
            <li>
                <button className='btn' onClick={addRectangle}>Rectangle</button>
            </li>
            <li>
                <button className='btn' onClick={addTriangle}>Triangle</button>
            </li>
            <li>
                <button className='btn' onClick={addCircle}>Circle</button>
            </li>
        </ul>
    )
}

export default ToolBar
