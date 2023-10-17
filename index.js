
function fetchDataAndDisplay(region) {
    emptyDiv.innerHTML = '';

    let url = 'https://restcountries.com/v3.1/all';

    if (region !== 'all') {
        url = `https://restcountries.com/v3.1/region/${region}`;
    }

    const displayData = async () => {
        const res = await fetch(url);
        const result = await res.json();
        showData(result);
        
    }

    function showData(result) {
        console.log(result);
        result.forEach(item=>{
            console.log(item);
            let emptyDiv = document.getElementById("emptyDiv");
            let newDiv = document.createElement("div");
            newDiv.className = "bg-blue-500 text-black p-5 mt-2";
            newDiv.innerHTML = `    
            <img src= "${item.flags.png}" alt = "${item.flags.alt}">
            <p style= "margin-top: 10px;"> Country Name: <b>${item.name.common}</b></p>
            <h1>Capital Name: <b>${item.capital}</b></h1>
            <h3>Longitude: <b>${item.latlng[0]}</b></h3>
            <h3>Latitude: <b>${item.latlng[1]}</b></h3>
            <p>Population: <b>${item.population}</b></p>           
            `;
            emptyDiv.appendChild(newDiv);      
        })    
    }
    displayData();
}

//Show all country of the world
const all = document.getElementById('all');
all.addEventListener("click", () => {
    fetchDataAndDisplay('all');
});

//For Asia continent
const asiaButton = document.getElementById('asiaButton');
asiaButton.addEventListener("click", () => {
    fetchDataAndDisplay('asia');
});

//For Europe continent
const europeButton = document.getElementById('europeButton');
europeButton.addEventListener("click", () => {
    fetchDataAndDisplay('europe');
});

//For Africa
const africaButton = document.getElementById('africaButton');
africaButton.addEventListener("click", () => {
    fetchDataAndDisplay('africa');
});

//For South America
const americaButton = document.getElementById('americaButton');
americaButton.addEventListener("click", () => {
    fetchDataAndDisplay('americas');
});

//for North America
const northAmericaButton = document.getElementById('northAmericaButton');
northAmericaButton.addEventListener("click", () => {
    fetchDataAndDisplay('americas');
});

//for North Antarctica
const antarcticaButton = document.getElementById('antarcticaButton');
antarcticaButton.addEventListener("click", () => {
    fetchDataAndDisplay('Antarctic');
});

//for North Australia
const australiaButton = document.getElementById('australiaButton');
australiaButton.addEventListener("click", () => {
    fetchDataAndDisplay('Oceania');
});

