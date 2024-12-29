import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet'
import { useMap } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import {HiOutlineExternalLink} from 'react-icons/hi'
import {useRef, useState, useEffect } from 'react';
import L from 'leaflet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { auto, aviation, beauty, restaurants, education, gyms, laundry, medDental, multipurpose, offices, other, outreach, pets, residences, retail, storage, supermarkets, worship } from '../data/portfolio_data';
import { layerControlColors } from '../data/layercontrol_colors';

require('leaflet/dist/leaflet.css');
require('leaflet/dist/leaflet.js');

const redIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-red.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const magentaIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-magenta.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const orangeIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-orange.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const bloodOrangeIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-blood-orange.png'),
	////shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const goldIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-gold.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const yellowIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-yellow.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const mintIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-mint.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const greenIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-green.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const darkGreenIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-dark-green.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const tealIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-teal.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const blueIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-blue.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const navyIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-navy.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const lavenderIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-lavender.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const violetIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-violet.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const darkPurpleIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-dark-purple.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const greyIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-grey.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

const blackIcon = new L.Icon({
	iconUrl: require('../images/markers/marker-icon-2x-black.png'),
	//shadowUrl: require('../images/markers/marker-shadow.png'),
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

export default function PortfolioMap({handleCounting}) {
    const [didMount, setDidMount] = useState(false);
    const mapRef = useRef(null);
    // const markerRef = useRef(null);
    const homeCoords = [26.786950120767685, -81.01376542392296];
    const homeZoom = 7;

    const [aviationChecked, setAviation] = useState(true)
    const [autoChecked, setAuto] = useState(true)
    const [beautyChecked, setBeauty] = useState(true)
    const [diningChecked, setDining] = useState(true)
    const [educationChecked, setEducation] = useState(true)
    const [gymsChecked, setGyms] = useState(true)
    const [laundryChecked, setLaundry] = useState(true)
    const [medDentalChecked, setMedDental] = useState(true)
    const [multipurposeChecked, setMultipurpose] = useState(true)    
    const [outreachChecked, setOutreach] = useState(true)
    const [officeChecked, setOffice] = useState(true)
    const [otherChecked, setOther] = useState(true)
    const [petsChecked, setPets] = useState(true)
    const [residencesChecked, setResidences] = useState(true)
    const [retailChecked, setRetail] = useState(true)
    const [storageChecked, setStorage] = useState(true)
    const [supermarketsChecked, setSupermarkets] = useState(true)
    const [worshipChecked, setWorship] = useState(true)

    function countAndSend(){
        const count = auto.length + aviation.length + beauty.length + restaurants.length + education.length + gyms.length + laundry.length + medDental.length + multipurpose.length + offices.length + other.length + outreach.length + pets.length + residences.length + retail.length + storage.length + supermarkets.length + worship.length;
        console.log(count)
        handleCounting(count);
    };

    useEffect(() => {
        //if(mapRef.current) { //??? needed??
            setDidMount(true);
            countAndSend()
            console.log('init')
        //}
    }, []);

    //used for handling sidebar rendering
    function MapEvents(){
        const map = useMap();
        map.on('overlayadd', e => {
            // console.log(e.name)
            if(e.name.includes('Automotive')) {
                setAuto(true)
            }
            if(e.name.includes('Aviation')) {
                setAviation(true)
            }
            if(e.name.includes('Beauty')) {
                setBeauty(true)
            }
            if(e.name.includes('Education')) {
                setEducation(true)
            }
            if(e.name.includes('Dining')) {
                setDining(true)
            }
            if(e.name.includes('Gym')) {
                setGyms(true)
            }
            if(e.name.includes('Laundry')) {
                setLaundry(true)
            }
            if(e.name.includes('Medical/Dental')) {
                setMedDental(true)
            }
            if(e.name.includes('Multipurpose')) {
                setMultipurpose(true)
            }
            if(e.name.includes('Office')) {
                setOffice(true)
            }
            if(e.name.includes('Outreach')) {
                setOutreach(true)
            }
            if(e.name.includes('Other')) {
                setOther(true)
            }
            if(e.name.includes('Pet Care')) {
                setPets(true)
            }
            if(e.name.includes('Residences')) {
                setResidences(true)
            }
            if(e.name.includes('Retail')) {
                setRetail(true)
            }
            if(e.name.includes('Storage')) {
                setStorage(true)
            }
            if(e.name.includes('Supermarket')) {
                setSupermarkets(true)
            }
            if(e.name.includes('Worship')) {
                setWorship(true)
            }
        });

        map.on('overlayremove', e => {
            // console.log(e.name)
            if(e.name.includes('Automotive')) {
                setAuto(false)
            }
            if(e.name.includes('Aviation')) {
                setAviation(false)
            }
            if(e.name.includes('Beauty')) {
                setBeauty(false)
            }
            if(e.name.includes('Education')) {
                setEducation(false)
            }
            if(e.name.includes('Dining')) {
                setDining(false)
            }
            if(e.name.includes('Gym')) {
                setGyms(false)
            }
            if(e.name.includes('Laundry')) {
                setLaundry(false)
            }
            if(e.name.includes('Medical/Dental')) {
                setMedDental(false)
            }
            if(e.name.includes('Multipurpose')) {
                setMultipurpose(false)
            }
            if(e.name.includes('Office')) {
                setOffice(false)
            }
            if(e.name.includes('Outreach')) {
                setOutreach(false)
            }
            if(e.name.includes('Other')) {
                setOther(false)
            }
            if(e.name.includes('Pet Care')) {
                setPets(false)
            }
            if(e.name.includes('Residences')) {
                setResidences(false)
            }
            if(e.name.includes('Retail')) {
                setRetail(false)
            }
            if(e.name.includes('Storage')) {
                setStorage(false)
            }
            if(e.name.includes('Supermarket')) {
                setSupermarkets(false)
            }
            if(e.name.includes('Worship')) {
                setWorship(false)
            }
        })
        return null;
    }

    function zoomToHome(){
        console.log('c')
        mapRef.current.flyTo(homeCoords, homeZoom)
    }
    
    //checks if already in dom
    //or else creates multiple times when refreshed
    const HomeControl = () => {
        console.log('creating home button...')
        const map = useMap();
        if(!document.getElementById('customhomebtn')){
        // useEffect(() => {
            const homeControl = new L.Control({position: 'topleft'})
            homeControl.onAdd = () => {
                var btn = L.DomUtil.create('button');
                btn.ariaLabel = 'Zoom to Home Button';
                btn.id = 'customhomebtn'
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.54253 2.23214C8.40101 2.08388 8.20498 2 8.00002 2C7.79506 2 7.59902 2.08388 7.4575 2.23214L2.2075 7.73214C2.00024 7.94928 1.9424 8.26908 2.06049 8.54505C2.17858 8.82102 2.44984 9 2.75002 9H4V13C4 13.5523 4.44772 14 5 14H6C6.55228 14 7 13.5523 7 13V12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12V13C9 13.5523 9.44772 14 10 14H11C11.5523 14 12 13.5523 12 13V9H13.25C13.5502 9 13.8215 8.82102 13.9395 8.54505C14.0576 8.26908 13.9998 7.94928 13.7925 7.73214L8.54253 2.23214Z" fill="#0F172A"/>
                                </svg>` //source: https://github.com/tailwindlabs/heroicons/blob/master/src/16/solid/home.svg?short_path=6e4f528
    
                L.DomEvent.on(btn, 'click', zoomToHome, map)
    
                return btn;
            }
    
        homeControl.addTo(map);
    
        // Cleanup, remove on unmount
        return () => {
            map.removeControl(homeControl);
        };
        } else {
            console.log('btn already exists!')
        }
        //return null;
    }

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

    function colorRadios(){
        console.log("Delayed, wait for overlay load...");
        setTimeout(() => { 
            const layerRadios = document.getElementsByClassName('leaflet-control-layers-selector');
            for (let i = 0; i < layerRadios.length; i++) {
                layerRadios[i].style['accent-color'] = layerControlColors[i]
            }
        }, 500);
        console.log('Colors loaded!')
    }

    if(didMount){
    return(
        <div id='map-sidebar-container'>
        <MapContainer
            center={homeCoords}
            zoom={homeZoom}
            scrollWheelZoom={true}
            id='map'
            ref={mapRef}
            whenReady={colorRadios}
            // zoomControl={false}
            // attributionControl={false}
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* used for layer control overlay state */}
        <MapEvents/>

        <HomeControl/>

        <LayersControl position="topright">
        <LayersControl.Overlay name={`Automotive (${auto.length})`} checked={autoChecked}>
            <LayerGroup>
                {auto.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-auto-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'auto')}}}
                        icon={violetIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Aviation (${aviation.length})`} checked={aviationChecked}>
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

        <LayersControl.Overlay name={`Beauty (${beauty.length})`} checked={beautyChecked}>
            <LayerGroup>
                {beauty.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-beauty-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'beauty')}}}
                        icon={magentaIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Dining (${restaurants.length})`} checked={diningChecked}>
            <LayerGroup>
                {restaurants.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-dining-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'dining')}}}
                        icon={bloodOrangeIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Education (${education.length})`} checked={educationChecked}>
            <LayerGroup>
                {education.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-education-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'education')}}}
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

        <LayersControl.Overlay name={`Gym/Fitness (${gyms.length})`} checked={gymsChecked}>
            <LayerGroup>
                {gyms.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-gyms-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'gyms')}}}
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

        <LayersControl.Overlay name={`Laundry (${laundry.length})`} checked={laundryChecked}>
            <LayerGroup>
                {laundry.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-laundry-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'laundry')}}}
                        icon={yellowIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Medical/Dental (${medDental.length})`} checked={medDentalChecked}>
            <LayerGroup>
                {medDental.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-medDental-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'medDental')}}}
                        icon={mintIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Multipurpose (${multipurpose.length})`} checked={officeChecked}>
            <LayerGroup>
                {multipurpose.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-multipurpose-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'multipurpose')}}}
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

        <LayersControl.Overlay name={`Offices (${offices.length})`} checked={officeChecked}>
            <LayerGroup>
                {offices.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-offices-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'offices')}}}
                        icon={darkGreenIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Other (${other.length})`} checked={otherChecked}>
            <LayerGroup>
                {other.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-other-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'other')}}}
                        icon={tealIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Outreach (${outreach.length})`} checked={outreachChecked}>
            <LayerGroup>
                {outreach.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-outreach-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'outreach')}}}
                        icon={blueIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>
        
        <LayersControl.Overlay name={`Pet Care (${pets.length})`} checked={petsChecked}>
            <LayerGroup>
                {pets.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-pets-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'pets')}}}
                        icon={navyIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Residences (${residences.length})`} checked={residencesChecked}>
            <LayerGroup>
                {residences.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-residences-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'residences')}}}
                        icon={lavenderIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Retail (${retail.length})`} checked={retailChecked}>
            <LayerGroup>
                {retail.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-retail-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'retail')}}}
                        icon={violetIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Storage (${storage.length})`} checked={storageChecked}>
            <LayerGroup>
                {storage.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-storage-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'storage')}}}
                        icon={darkPurpleIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Supermarket (${supermarkets.length})`} checked={supermarketsChecked}>
            <LayerGroup>
                {supermarkets.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-supermarkets-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'supermarkets')}}}
                        icon={greyIcon}
                    >
                    <Popup>
                        {item.name}
                    </Popup>
                    </Marker>
                    )
                })}
            </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name={`Worship (${worship.length})`} checked={worshipChecked}>
            <LayerGroup>
                {worship.map((item, index) => {
                    return(
                    <Marker
                        key={`marker-worship-${index}`}
                        position={[item.coords[0], item.coords[1]]}
                        eventHandlers={{ click: () => {handlePopupClick(index, 'worship')}}}
                        icon={blackIcon}
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
            {autoChecked && autoChecked && (
                <section>
                <h2 className='mapsb-header' id='auto-color'>Automotive</h2>
                <hr style={{marginTop:0}}/>
                {auto.map((item, index) => {
                    return(
                    //id needed for handlePopupClick
                    <div key={`sb-auto-${index}`} id={`sb-auto-${index}`} className='mapsb-item'>
                    <h3 className='mapsb-name auto-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name}{item.smallText && ` ${<small>{item.smallText}</small>}`}</h3>
                    <p className='mapsb-details'>{item.year} {item.arch && ` - ${item.arch}`}</p>
                    { item.website &&
                        <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                    }
                    { item.image &&
                        <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Auto Portfolio: ${item.name}`} />
                    }
                    <hr/>
                    </div>
                    )
                })}
                </section>
            )}

            {aviationChecked && aviationChecked && (
                <section>
                <h2 className='mapsb-header' id='aviation-color'>Aviation</h2>
                <hr style={{marginTop:0}}/>
                {aviation.map((item, index) => {
                    return(
                    //id needed for handlePopupClick
                    <div key={`sb-aviation-${index}`} id={`sb-aviation-${index}`} className='mapsb-item'>
                    <h3 className='mapsb-name aviation-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name}{item.smallText && ` ${<small>{item.smallText}</small>}`}</h3>
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

            {beautyChecked && beautyChecked && (
                <section>
                <h2 className='mapsb-header' id='beauty-color'>Beauty</h2>
                <hr style={{marginTop:0}}/>
                {beauty.map((item, index) => {
                    return(
                    //id needed for handlePopupClick
                    <div key={`sb-beauty-${index}`} id={`sb-beauty-${index}`} className='mapsb-item'>
                    <h3 className='mapsb-name beauty-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name}{item.smallText && ` ${<small>{item.smallText}</small>}`}</h3>
                    <p className='mapsb-details'>{item.year} {item.arch && ` - ${item.arch}`}</p>
                    { item.website &&
                        <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                    }
                    { item.image &&
                        <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Beauty Portfolio: ${item.name}`} />
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
                    <div key={`sb-dining-${index}`} id={`sb-dining-${index}`} className='mapsb-item'>
                    <h3 className='mapsb-name dining-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
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

                {educationChecked && educationChecked && (
                    <section>
                    <h2 className='mapsb-header' id='education-color'>Education</h2>
                    <hr style={{marginTop:0}}/>
                    {education.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-education-${index}`} id={`sb-education-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name education-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name}{item.smallText && ` ${<small>{item.smallText}</small>}`}</h3>
                        <p className='mapsb-details'>{item.year} {item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Education Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

{gymsChecked && gymsChecked && (
                    <section>
                    <h2 className='mapsb-header' id='gym-color'>Gyms & Fitness</h2>
                    <hr style={{marginTop:0}}/>
                    {gyms.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-gyms-${index}`} id={`sb-gyms-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name gyms-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name}{item.smallText && ` ${<small>{item.smallText}</small>}`}</h3>
                        <p className='mapsb-details'>{item.year} {item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Gym/Fitness Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

{laundryChecked && laundryChecked && (
                    <section>
                    <h2 className='mapsb-header' id='laundry-color'>Laundry</h2>
                    <hr style={{marginTop:0}}/>
                    {laundry.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-laundry-${index}`} id={`sb-laundry-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name laundry-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI Laundry Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

{medDentalChecked && medDentalChecked && (
                    <section>
                    <h2 className='mapsb-header' id='medDental-color'>Medical & Dental</h2>
                    <hr style={{marginTop:0}}/>
                    {medDental.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-medDental-${index}`} id={`sb-medDental-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name medDental-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI medDental Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

{multipurposeChecked && multipurposeChecked && (
                    <section>
                    <h2 className='mapsb-header' id='multipurpose-color'>Multipurpose Spaces</h2>
                    <hr style={{marginTop:0}}/>
                    {multipurpose.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-multipurpose-${index}`} id={`sb-multipurposes-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name multipurpose-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI multipurpose Portfolio: ${item.name}`} />
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
                        <div key={`sb-office-${index}`} id={`sb-offices-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name office-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
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
                        <div key={`sb-outreach-${index}`} id={`sb-outreach-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name outreach-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
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
                        <div key={`sb-other-${index}`} id={`sb-other-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name  other-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
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

{petsChecked && petsChecked && (
                    <section>
                    <h2 className='mapsb-header' id='pets-color'>Pet Care</h2>
                    <hr style={{marginTop:0}}/>
                    {pets.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-pets-${index}`} id={`sb-pets-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name pets-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI pets Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

{residencesChecked && residencesChecked && (
                    <section>
                    <h2 className='mapsb-header' id='residences-color'>Residences</h2>
                    <hr style={{marginTop:0}}/>
                    {residences.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-residences-${index}`} id={`sb-residences-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name residences-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI residences Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

{retailChecked && retailChecked && (
                    <section>
                    <h2 className='mapsb-header' id='retail-color'>Retail Spaces</h2>
                    <hr style={{marginTop:0}}/>
                    {retail.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-retail-${index}`} id={`sb-retail-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name retail-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI retail Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )} 

{storageChecked && storageChecked && (
                    <section>
                    <h2 className='mapsb-header' id='storage-color'>Storage Spaces</h2>
                    <hr style={{marginTop:0}}/>
                    {storage.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-storage-${index}`} id={`sb-storage-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name storage-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI storage Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

{supermarketsChecked && supermarketsChecked && (
                    <section>
                    <h2 className='mapsb-header' id='supermarkets-color'>Supermarkets</h2>
                    <hr style={{marginTop:0}}/>
                    {supermarkets.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-supermarkets-${index}`} id={`sb-supermarkets-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name supermarkets-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI supermarkets Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

{worshipChecked && worshipChecked && (
                    <section>
                    <h2 className='mapsb-header' id='worship-color'>Worship</h2>
                    <hr style={{marginTop:0}}/>
                    {worship.map((item, index) => {
                        return(
                        //id needed for handlePopupClick
                        <div key={`sb-worship-${index}`} id={`sb-worship-${index}`} className='mapsb-item'>
                        <h3 className='mapsb-name worship-item' title='Go to marker...' onClick={() => handleSetView(item.coords[0], item.coords[1])}>{item.name} {item.smallText && <small>{item.smallText}</small>}</h3>
                        <p className='mapsb-details'>{item.year}{item.arch && ` - ${item.arch}`}</p>
                        { item.website &&
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">Visit Site <HiOutlineExternalLink/></a>
                        }
                        { item.image &&
                            <LazyLoadImage effect='blur' className='mapsb-img' src={item.image} alt={`LEI worship Portfolio: ${item.name}`} />
                        }
                        <hr/>
                        </div>
                        )
                    })}
                    </section>
                )}

            </div> {/* end wrapper */}
        </div>  {/* end div */}
        </div>  //end container
    )
    } // end if didMount is true

    else {
        return( <p>Loading!</p> )
    }
}