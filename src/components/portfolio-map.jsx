import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet'
import { useMap } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import {HiOutlineExternalLink} from 'react-icons/hi'
import {useRef, useState, useEffect } from 'react';
import L from 'leaflet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { auto, aviation, beauty, restaurants, education, gyms, laundry, medDental, multipurpose, offices, other, outreach, pets, residences, retail, storage, supermarkets, worship } from '../data/portfolio_data';

require('leaflet/dist/leaflet.css');
require('leaflet/dist/leaflet.js');

const goldIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-gold.png'),
	shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const redIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-red.png'),
	shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const greenIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-green.png'),
	shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const orangeIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-orange.png'),
	shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const yellowIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-yellow.png'),
	shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const violetIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-violet.png'),
	shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const greyIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-grey.png'),
	shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const blackIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-black.png'),
	shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

export default function PortfolioMap({handleCounting}) {
    const [diningChecked, setDining] = useState(true)
    const [outreachChecked, setOutreach] = useState(true)
    const [aviationChecked, setAviation] = useState(true)
    const [officeChecked, setOffice] = useState(true)
    const [otherChecked, setOther] = useState(true)

    const mapRef = useRef(null);
    // const markerRef = useRef(null);

    function countAndSend(){
        const count = auto.length + aviation.length + beauty.length + restaurants.length + education.length + gyms.length + laundry.length + medDental.length + multipurpose.length + offices.length + other.length + outreach.length + pets.length + residences.length + retail.length + storage.length + supermarkets.length + worship.length;
        console.log(count)
        handleCounting(count);
    };

    //zoom in to the marker if name clicked on sidebar
    function handleSetView(lat, lng){
        mapRef.current.setView([lat, lng], 18)

        //would need a unique ref for every element
        // const marker = markerRef.current;
        // if (marker) {
        //   marker.openPopup();
        // }
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

    function MapEvents(){
        const map = useMap()
        map.on('overlayadd', e => {
            // console.log(e.name)
            if(e.name.includes('Aviation Projects')) {
                setAviation(true)
            }
            if(e.name.includes('Dining Projects')) {
                setDining(true)
            }
            if(e.name.includes('Office Projects')) {
                setOffice(true)
            }
            if(e.name.includes('Outreach Projects')) {
                setOutreach(true)
            }
            if(e.name.includes('Other Projects')) {
                setOther(true)
            }
        })

        map.on('overlayremove', e => {
            // console.log(e.name)
            if(e.name.includes('Aviation Projects')) {
                setAviation(false)
            }
            if(e.name.includes('Dining Projects')) {
                setDining(false)
            }
            if(e.name.includes('Office Projects')) {
                setOffice(false)
            }
            if(e.name.includes('Outreach Projects')) {
                setOutreach(false)
            }
            if(e.name.includes('Other Projects')) {
                setOther(false)
            }
        })
        return null
    }

    useEffect(() => {
        countAndSend()
    }, []);

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

        {/* used for layer control overlay state */}
        <MapEvents/>

        <LayersControl position="topright">
        <LayersControl.Overlay name={`Aviation Projects (${aviation.length})`} checked={aviationChecked}>
            <LayerGroup>
                {aviation.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-aviation-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'aviation')}}}
                        icon={redIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>
        
        <LayersControl.Overlay name={`Dining Projects (${restaurants.length})`} checked={diningChecked}>
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

        <LayersControl.Overlay name={`Office Projects (${offices.length})`} checked={officeChecked}>
            <LayerGroup>
                {offices.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-offices-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'offices')}}}
                        icon={orangeIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Outreach Projects (${outreach.length})`} checked={outreachChecked}>
            <LayerGroup>
                {outreach.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-outreach-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'outreach')}}}
                        icon={greenIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>
        
        <LayersControl.Overlay name={`Other Projects (${other.length})`} checked={otherChecked}>
            <LayerGroup>
                {other.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-other-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'other')}}}
                        icon={goldIcon}
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
            {aviationChecked && aviationChecked && (
                    <section>
                    <h2 className='mapsb-header' id='aviation-color'>Aviation</h2>
                    <hr style={{marginTop:0}}/>
                    {aviation.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-aviation-${index}`} id={`sb-aviation-${index}`} className='mapsb-item aviation-item'>
                        <h3 className='mapsb-name' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name}{item.smallText && ` ${<small>{item.smallText}</small>}`}</h3>
                        <p className='mapsb-details'>{item.year} {item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Aviation Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

                {diningChecked && diningChecked && (
                    <section>
                    <h2 className='mapsb-header' id='dining-color'>Dining</h2>
                    <hr style={{marginTop:0}}/>
                    {restaurants.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-dining-${index}`} id={`sb-dining-${index}`} className='mapsb-item dining-item'>
                        <h3 className='mapsb-name' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year} {item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Dining Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

                {officeChecked && officeChecked && (
                    <section>
                    <h2 className='mapsb-header' id='office-color'>Offices</h2>
                    <hr style={{marginTop:0}}/>
                    {offices.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-office-${index}`} id={`sb-offices-${index}`} className='mapsb-item office-item'>
                        <h3 className='mapsb-name' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Office Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

                {outreachChecked && outreachChecked && (
                    <section>
                    <h2 className='mapsb-header' id='outreach-color'>Outreach</h2>
                    <hr style={{marginTop:0}}/>
                    {outreach.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-outreach-${index}`} id={`sb-outreach-${index}`} className='mapsb-item outreach-item'>
                        <h3 className='mapsb-name' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Outreach Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

                {otherChecked && otherChecked && (
                    <section>
                    <h2 className='mapsb-header' id='other-color'>Other Notable Projects</h2>
                    <hr style={{marginTop:0}}/>
                    {other.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-other-${index}`} id={`sb-other-${index}`} className='mapsb-item other-item'>
                        <h3 className='mapsb-name' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Other Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}
            </div>
        </div>
        </div>
    )
}