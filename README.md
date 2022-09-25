# OSD Viewer

A Web based viewer for displaying Whole Slide Images with zoom, pan and basic annotations functionality.
- Uses dzi (Deep Zoomable Images) format for loading & showing slides.
- WSI (Whole Slide Images) File formats -> Trestle(.tif), Leica(.scn), Hamamatsu (.vms, .vmu, .ndpi), Philips (.tiff) etc.
- WSI is converted to dzi format using `libvips` library.

Download slides from `https://portal.gdc.cancer.gov/`

# Features

- Zoom-In/ Zoom-Out

![osd_1](https://user-images.githubusercontent.com/62811612/192135175-2840897d-5af8-41c4-b1ad-87b11d58fb43.gif)

- Change slides instantly

![osd_2](https://user-images.githubusercontent.com/62811612/192135589-edcaf18d-d47e-4b0f-aa40-fdab3597b283.gif)

- Use different shapes to annotate region of interest (ROI)
  - Rectangle/Square tool
   
   ![osd_3](https://user-images.githubusercontent.com/62811612/192136000-3dddc84d-4d24-4d52-be0d-58f75fef7e4d.gif)

  - Triangle, Circle tool

   ![osd_4](https://user-images.githubusercontent.com/62811612/192136043-c54527ab-8ee9-40dd-bfa8-0ff0102abdeb.gif)

# Technology Used
- React -> A JavaScript library for building user interfaces.
- Fabric.js -> a powerful and simple Javascript HTML5 canvas library.
- OpenSeadragon -> An open-source, web-based viewer for high-resolution zoomable images.
- OpenSeadragonFabricjsOverlay -> It allows you to add Fabric.js canvas overlay that pans and zooms with OpenSeadragon viewer.
- libvips -> A fast image processing library with low memory needs.
- Git -> A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.


# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
