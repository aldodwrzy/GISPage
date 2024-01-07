const dataGeoJson = await fetch('./api/data.json')
        .then(response => response.json())

export function main() {
        
    const tbody = document.getElementById("table-body");

    tbody.innerHTML = "";

    dataGeoJson.features.forEach((rowData, key) => {
        const row = document.createElement("tr");
        // row.classList.add('bg-white','border-b','transition','duration-300','ease-in-out','hover:bg-gray-100');

        const no = document.createElement("td");
        no.textContent = key + 1;
        no.classList.add('text-center');
        // no.classList.add('text-sm','text-gray-900','font-light','px-6','py-4','whitespace-nowrap');
        row.appendChild(no);

        const nama = document.createElement("td");
        nama.textContent = rowData.properties.name;
        // nama.classList.add('text-sm','text-gray-900','font-light','px-6','py-4','whitespace-nowrap');
        row.appendChild(nama);

        const type = document.createElement("td");
        type.textContent = rowData.geometry.type;
        // type.classList.add('text-sm','text-gray-900','font-light','px-6','py-4','whitespace-nowrap');
        row.appendChild(type);

        const coord = document.createElement("td");
        coord.textContent = JSON.stringify(rowData.geometry);
        // coord.classList.add('text-sm','text-gray-900','font-light','px-6','py-4','whitespace-nowrap');
        row.appendChild(coord);

        tbody.appendChild(row);
    });
}