console.log('test')

//DOM Objects
const pokeImage = document.querySelector('.sprite');
console.log(pokeImage);

const pokeName = document.querySelector('.name');
console.log(pokeName);



//calling API
const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); 
    const data = await response.json();
    console.log(data);

    //Parsing through data
    pokeImage.src = data['sprites']['front_default'];
    pokeName.textContent = data['name'];
  
}


//grabbing data from the form
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = form[0].value;
    pokemonData(inputValue);
    //removing value from text field after using it
    form[0].value = '';
})















