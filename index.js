const breeds = [];
const url = 'https://api.thecatapi.com/v1/breeds';

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_Ycsbz69IAUsiIVTbhpcT4WobBLTQ6eFEy68Qu9HMG2L0eZFuKnZpQyxmcPyNCEjE";

// STEP 1: Create an async function "initialLoad" that does the following: 

async function initialLoad () {
    // Retrieve a list of breeds from the cat API using fetch
    try {
        const url = await fetch(url);

         // Create options and append them to the breedSelect



    } catch(error){
        console.error
    }
}