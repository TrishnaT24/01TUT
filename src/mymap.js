import "./mymap.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// create custom icon for regular markers
const customIcon = new Icon({
  iconUrl: require("./pages/shop/catering-images/catering2.jpeg"),
  iconSize: [38, 38] // size of the icon
});

// create custom icon for restaurant markers
const restaurantIcon = new Icon({
  iconUrl: require("../src/hall.png"), // path to the restaurant icon
  iconSize: [38, 38] // size of the icon
});

// create custom icon for hospital markers
const hospitalIcon = new Icon({
  iconUrl: require("../src/decor.png"), // path to the hospital icon
  iconSize: [38, 38] // size of the icon
});

// create custom icon for park markers
const parkIcon = new Icon({
  iconUrl: require("../src/catering.png"), // path to the park icon
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: <span class="cluster-icon">${cluster.getChildCount()}</span>,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
/*const markers = [
  {
    geocode: [19.1249, 72.8361],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [19.1075, 72.8263],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [19.0968, 72.8517],
    popUp: "Hello, I am pop up 3"
  },
  {
    geocode: [19.1439, 72.8428],
    popUp: "Hello, I am pop up 4"
  }
];
*/

// restaurants
const restaurants = [
  {
    geocode: [19.155001, 72.849998],
    name: "A.P MARRIAGE GROUND",
    link: "https://www.google.com/maps/place/A.P+MARRIAGE+GROUND/@19.2717066,72.8748649,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b060577a762d:0x1327793489fb2e92!8m2!3d19.2717016!4d72.8774398!16s%2Fg%2F11gfnb7qxw?entry=ttu",
    popUp: "A.P MARRIAGE GROUND",
  },
  {
    geocode: [19.1175, 72.8223],
    name: "Mannat Ground Marriage Hal",
    link: "https://www.google.com/maps/place/Mannat+Ground+Marriage+Hall/@19.4138934,72.8094495,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7a95a4d8f2b79:0x631543889ba5e4c!8m2!3d19.4138884!4d72.8120244!16s%2Fg%2F11ddxg2865?entry=ttu",
    popUp: "Mannat Ground Marriage Hal",
  },
  {
    geocode: [19.1941, 72.8370],
    name: "Vishwakarma Hall",
    link: "https://www.google.com/maps/place/Vishwakarma+Hall/@19.3804442,72.8272906,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7aec030165c91:0xa0db69760c10dbc5!8m2!3d19.3804392!4d72.8298655!16s%2Fg%2F1hd_507sf?entry=ttu",
    popUp: "Vishwakarma Hall",
  }
];

// hospitals
const hospitals = [
  {
    geocode: [19.1225, 72.8350],
    name: "Jagdamb Decorations",
    link: "https://www.google.com/maps/place/Jagdamb+Decorations/@19.3783227,72.8267214,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7af19acd483ed:0xf88cf236e085cdcb!8m2!3d19.3783177!4d72.8292963!16s%2Fg%2F11vbtk1zky?entry=ttu",
    popUp: "Jagdamb Decorations",
  },
 
  {
    geocode: [19.1998, 72.8432],
    name: "Jashn Events",
    link: "https://www.google.com/maps/place/Jashn+Events/@19.3794795,72.8241926,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7aebfe6aaaaab:0x34493deb9caad1e7!8m2!3d19.3794745!4d72.8267675!16s%2Fg%2F11hdsfm1sn?entry=ttu",
    popUp: "Jashn Events",
  },
  {
    geocode: [19.1380, 72.8621],
    name: "Evergreen Decorators",
    link: "https://www.google.com/maps/place/Evergreen+Decorators/@19.1152283,72.8559152,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c8319c0bbc1f:0xf5466332ba07092f!8m2!3d19.1152232!4d72.8584901!16s%2Fg%2F1thxp32p?entry=ttu",
    popUp: "Evergreen Decorators",
  }
];

// parks
const parks = [
  {
    geocode: [19.1101, 72.8325],
    name: "Sabri Caterers",
    link: "https://www.google.com/maps/place/Sabri+Caterers/@19.3793741,72.8278705,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7afb14678611b:0x2a6306ba2bc83436!8m2!3d19.3793691!4d72.8304454!16s%2Fg%2F11h34wxbh1?entry=ttu",
    popUp: "Sabri Caterers",
  },
  {
    geocode: [19.1050, 72.8318],
    name: "HUSSEIN CATERERS",
    link: "https://www.google.com/maps/place/HUSSEIN+CATERERS/@19.3763274,72.8223664,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7af7a97385b61:0x102879909fdec449!8m2!3d19.3763224!4d72.8249413!16s%2Fg%2F11v3_3p563?entry=ttu",
    popUp: "HUSSEIN CATERERS",
  },
  {
    geocode: [19.1902, 72.8905],
    name: "JIM CATERERS ",
    link: "https://www.google.com/maps/place/JIM+CATERERS/@19.3698495,72.8155352,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7af380b299f33:0x812fbe4e7305c32a!8m2!3d19.3698445!4d72.8181101!16s%2Fg%2F11ghsb2pbv?entry=ttu",
    popUp: "JIM CATERERS",
  },
  
];

export default function Mymap() {
  return (
    <MapContainer center={[19.1136, 72.8697]} zoom={13}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
       
      </MarkerClusterGroup>

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the restaurants */}
        {restaurants.map((restaurant) => (
          <Marker position={restaurant.geocode} icon={restaurantIcon}>
            <Popup>
              <div>
                <p>{restaurant.popUp}</p>
                <a href={restaurant.link} target="_blank" rel="noopener noreferrer">View location</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the hospitals */}
        {hospitals.map((hospital) => (
          <Marker position={hospital.geocode} icon={hospitalIcon}>
            <Popup>
              <div>
                <p>{hospital.popUp}</p>
                <a href={hospital.link} target="_blank" rel="noopener noreferrer">View location</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the parks */}
        {parks.map((park) => (
          <Marker position={park.geocode} icon={parkIcon}>
            <Popup>
              <div>
                <p>{park.popUp}</p>
                <a href={park.link} target="_blank" rel="noopener noreferrer">View location</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
//{markers.map((marker) => (
//<Marker position={marker.geocode} icon={customIcon}>
//<Popup>{marker.popUp}</Popup>
//</Marker>
  //))}