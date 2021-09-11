const hamburgerBtn = document.querySelector("#hamburger-toggle");
const hamburgerIcon = document.querySelector("#hamburger");
const body = document.querySelector("body");
const ZOOM_LEVEL = 14;

const hamburgerImgSource = {
    false: "./assets/shared/mobile/icon-hamburger.svg",
    true: "./assets/shared/mobile/icon-close.svg",
};

function handleHam() {
    hamburgerIcon.classList.toggle("open");
    body.classList.toggle("open");
    let isOpen = hamburgerIcon.classList.contains("open");

    hamburgerIcon.src = hamburgerImgSource[isOpen];
}

if (body.classList.contains("locations-body")) {
    const countries = [
        {
            name: "canada",
            id: "canada-map",
            coordinates: [43.6478, -79.37712],
        },
        {
            name: "australia",
            id: "australia-map",
            coordinates: [-30.329531, 149.788193],
        },
        {
            name: "uk",
            id: "uk-map",
            coordinates: [40.514278, -107.547401],
        },
    ];
    const createMapLayer = (map) => {
        return L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            {
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
                accessToken:
                    "pk.eyJ1IjoiamV1cmltb3JlbCIsImEiOiJja3RnOHFhZXcwZnVvMm9wZnQ1eWpxNzl5In0.9qTve39y7gvSgB7mK-7Myg",
            }
        ).addTo(map);
    };

    const createMapMarker = (map, coordinates) => {
        return L.marker(coordinates).addTo(map);
    };

    const createMap = ({ name, id, coordinates }) => {
        let map = L.map(id).setView(coordinates, ZOOM_LEVEL);
        createMapLayer(map);
        createMapMarker(map, coordinates);
    };

    countries.forEach((country) => createMap(country));
}

hamburgerBtn?.addEventListener("click", handleHam);