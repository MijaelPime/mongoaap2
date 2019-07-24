const placesList = document.querySelector(".select-ListUserAll");

const url = `http://localhost:8090/api/places`;
const config = {
    method: 'get'
}
fetch(url, config)
    .then(function (response){
        return response.json();
    })
    .then(function (responseJson){
        const places = responseJson.places;
        printPlaces(places);
    });

function printPlaces(places){
    for(lugares of places){
        placesList.innerHTML += `
        <div class="wrapper">
            <div>
                <span>Nombre: ${lugares.name}</span><div class="back"></div>
            </div>
        </div> 
        `;
    }
}
