// import markerIconPng from "../../public/images/marker-icon.png"
// import {Icon} from 'leaflet'
import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import { useEffect, useRef } from 'react';
require('leaflet/dist/leaflet.css');
require('leaflet/dist/leaflet.js');

export default function PortfolioMap() {
    useEffect(() => {
        if (typeof window !== "undefined") {
        let content = document.getElementById('grid-content')
        let sb = document.getElementById('sidebar-wrapper')

        sb.style.height = content.clientHeight + 'px'
        // console.log(content.clientHeight)
        }
      }, []);

    const mapRef = useRef(null);

    //zoom in to the marker if name clicked on sidebar
    function handleFlyTo(){
        // const {current = {}} = mapRef;
        // const {leafletElement: map} = current;
        // map.flyTo([26.236, -80.09], 14)

        mapRef.current.flyTo([26.236, -80.09], 18)
    }

    //scroll to and highlight thing in sidebar 
    function handlePopupClick(){
        //get by id
        //scrollintoview
        let test = document.getElementById('map-1')
        test.scrollIntoView({behavior:'smooth', block:'start'})
        test.style.backgroundColor = '#ff0000'
        //add class
        //timeout 2s
        //remove class
    }

    return(
        <div id='map-sidebar-container'>
        <MapContainer
            center={[26.786950120767685, -81.01376542392296]}
            zoom={7}
            scrollWheelZoom={true}
            id='map'
            ref={mapRef}
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <Marker position={[28.54, -81.38]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker> */}
        <LayersControl position="topright">
        <LayersControl.Overlay name="Dining Projects" checked>
            <LayerGroup>
                <Marker
                    position={[26.236, -80.09]}
                    eventHandlers={{ click: handlePopupClick }}
                >
                <Popup>
                    Oceanic
                </Popup>
                </Marker>
                <Marker position={[26.235, -80.09]}>
                <Popup>
                    Lucky Fish Beach bar & Grill
                </Popup>
                </Marker>
                <Marker position={[26.236697283043124, -80.09017001428346]}>
                <Popup>
                    How You Brewin'?
                </Popup>
                </Marker>
                <Marker position={[26.235869639172, -80.08943552222465]}>
                <Popup>
                    Baresco
                </Popup>
                </Marker>
            </LayerGroup>
        </LayersControl.Overlay>
        </LayersControl>
        </MapContainer>

        <div id='map-sidebar'>
            <div id='sidebar-wrapper'>
                <h2 className='mapsb-header'>Dining</h2>
                <h3 id='map-1' className='mapsb-name' onClick={handleFlyTo}>Oceanic</h3>
            </div>
        </div>
        </div>
    )
}