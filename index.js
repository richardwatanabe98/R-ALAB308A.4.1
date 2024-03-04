
// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");


//======================== PART 1: API ===============================
// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_Ycsbz69IAUsiIVTbhpcT4WobBLTQ6eFEy68Qu9HMG2L0eZFuKnZpQyxmcPyNCEjE";
// =====================================================================================



//// ==================== PART 2: TASKS ==================================================
// STEP 1: Create an async function "initialLoad" that does the following: 

async function initialLoad () {
    // Retrieve a list of breeds from the cat API using fetch
    try {
        const url = await fetch('https://api.thecatapi.com/v1/breeds');
        const response = await url.json();

         // Create options for each of these breeds, and append them to the breedSelect
         response.forEach((breeds) => {
            const option = document.createElement('option');
            option.value = breeds.id;
            option.textContent = breeds.name;
            breedSelect.appendChild(option);

            

         });
    } catch(error){
        console.error('Error fetching or processing data:', error);
    }
}

/// function should run immediately in console... check in browser and run the console log command

// ================================================================================