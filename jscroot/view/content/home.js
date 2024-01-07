import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.2/croot.js";

const dataGeoJson = await fetch('https://aldodwrzy.github.io/GISPage/api/data.json')
        .then(response => response.json())

export function main() {
        const point = dataGeoJson.features.filter((item) => item.geometry.type === 'Point')
        const lineString = dataGeoJson.features.filter((item) => item.geometry.type === 'LineString')
        const polygon = dataGeoJson.features.filter((item) => item.geometry.type === 'Polygon')
        setInner("point", point.length.toLocaleString());
        setInner("linestring",lineString.length.toLocaleString());
        setInner("poligon",polygon.length.toLocaleString());
        setInner("total",dataGeoJson.features.length.toLocaleString());
}
