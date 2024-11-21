// form and color input
const form = document.getElementById('colorForm'); // form element with its id 
const colorInput = document.getElementById('colorInput'); // color input element by its id

// checks if color value is saved in local storage 
const savedColor = localStorage.getItem('selectedColor');  // retrieve saved color from local 
if (savedColor) {     // check if the color was saved 
    console.log(`Previously saved color: ${savedColor}`); // Log the saved color if it exists
    colorInput.value = savedColor; // Set the saved color as the default value in the input field
}
// event listener to handle form submission 
form.addEventListener('submit', (event) => {   // event listener to handle form submission
    event.preventDefault(); // Prevent the default form submission 
    const selectedColor = colorInput.value; // Get the current value of the color input
    console.log(`Selected color: ${selectedColor}`); // Output the selected color to the console
    localStorage.setItem('selectedColor', selectedColor); // Save the color value to local storage
});
