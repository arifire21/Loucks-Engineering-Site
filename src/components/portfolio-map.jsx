// import markerIconPng from "../../public/images/marker-icon.png"
// import {Icon} from 'leaflet'
import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import {HiOutlineExternalLink} from 'react-icons/hi'
import { useEffect, useRef } from 'react';

import { restaurants } from '../data/portfolio_data';

require('leaflet/dist/leaflet.css');
require('leaflet/dist/leaflet.js');

export default function PortfolioMap() {
    useEffect(() => {
        if (typeof window !== "undefined") {
        // let content = document.getElementById('grid-content')
        // let sb = document.getElementById('map-sidebar')
        // let sbWrap = document.getElementById('sidebar-wrapper')        

        // sb.style.height = content.clientHeight + 'px'
        // // sbWrap.style.height = content.clientHeight + 'px'
        // // console.log(content.clientHeight)
        // console.log(sb.style.height)
        }
      }, []);

    const mapRef = useRef(null);
    const markerRef = useRef(null);

    //zoom in to the marker if name clicked on sidebar
    function handleFlyTo(lat, lng){
        mapRef.current.flyTo([lat, lng], 18)

        const marker = markerRef.current;
        if (marker) {
          marker.openPopup();
        }
    }

    //scroll to and highlight thing in sidebar 
    function handlePopupClick(index, type){
        if (typeof window !== "undefined") {
            let sidebarElem = document.getElementById(`sb-${type}-${index}`)
            sidebarElem.scrollIntoView({behavior:'smooth', block:'start'})
            sidebarElem.classList.add('mapsb-highlight')

            setTimeout(() => {
                // console.log("Delayed for 1 second.");
                sidebarElem.classList.remove('mapsb-highlight')
            }, 1000);
        }
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

        <LayersControl position="topright">
        <LayersControl.Overlay name="Dining Projects" checked>
            <LayerGroup>
                {restaurants.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-dining-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'dining')}}}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>
        </LayersControl>
        </MapContainer>

        <div id='map-sidebar'>
            <div id='sidebar-wrapper'>
                <section>
                <h2 className='mapsb-header'>Dining</h2>
                {restaurants.map((item, index) => {
                    return(
                    //id needed for handlePopupClick
                    <div key={`sb-dining-${index}`} id={`sb-dining-${index}`} className='mapsb-item'>
                    <h3 className='mapsb-name' onClick={() => handleFlyTo(item.coords[0], item.coords[1])}>{item.name}</h3>
                    { item.website &&
                        <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                    }
                    { item.image &&
                        <img className='mapsb-img' src={item.image} alt={`LEI Dining Portfolio: ${item.name}`} />
                    }
                    <hr/>
                    </div>
                    )
                })}
                </section>
            </div>
        </div>
        </div>
    )
}