let mars = document.querySelector('form')
let sol = document.querySelector('#solId')
let gigaWatts = document.querySelector('#solInfo')
let marty = document.querySelector('#bubbaGump')
let earthHubba = document.querySelector('#solAtmosphere')
let y2k = document.querySelector('#jumpin')

const retrieveSol = async (hubba) => {
    // hubba.preventDefault()
    let id = document.getElementById("solId").value
    try {
        const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=E7BN5FDJDDhSkiBX2F8PyDGXebFdv6q4ZDx7xAIF`;
        let response = await fetch(apiURL);
        let solData = await response.json();
        let picture = sol.value
        console.log(solData.photos)
        let earthDate = solData.photos[picture].earth_date
        earthHubba.innerHTML = earthDate
        let FHAZ = solData.photos[picture].camera.name
        y2k.innerHTML = FHAZ
        marty.src = solData.photos[picture].img_src
    } catch (error) {
        console.log(error)
    }
};

gigaWatts.addEventListener('click', retrieveSol)
