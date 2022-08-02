// Steps in mind
/*::::::::::::::::::::::::::::::::::

1. prothome api call korbo
2. data gulo all card hishabe dekhabo
3. search er input theke text nibo 
4. Search text k url er last a implement korbo
5. Preloader add korbo
6. ager data clear kore dibo

============================*/
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style = displayStyle;
}
function searchText(toggleSpinner) {

    const searchBtn = document.getElementById('search-btn').addEventListener('click',
        function () {
            const searchInput = document.getElementById('search-input').value;
            if (isNaN(searchInput) == true) {
                document.getElementById('search-input').value = '';
                return loadDrinks(searchInput);
            } else if (isNaN(searchInput) == false) {
                document.getElementById('search-input').value = '';
                return loadDrinks(searchInput)
            } else { console.log('Please give a valid input') }

        })
    toggleSpinner('block');

    // console.log(searchInput)

}
searchText()
function loadDrinks(searchInput) {

    if (isNaN(searchInput) == true) {
        const nameUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
        const searchByName = fetch(nameUrl)
            .then(res => res.json())
            .then(data => displayMeals(data.drinks))
    } else if (isNaN(searchInput) == false) {
        const idUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${searchInput}`;
        fetch(idUrl)
            .then(res => res.json())
            .then(data => displayMeals(data.drinks))
    } else { console.log('Naire vai nai') }


}

function displayMeals(drinks, toggleSpinner) {

    drinks.forEach(drink => {
        // console.log(drink)
        const { strDrinkThumb, strDrink, strInstructions } = drink;
        const wrapper = document.getElementById('drinks-wrapper');
        const div = document.createElement('div');
        wrapper.textContent = '';

        div.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img src="${strDrinkThumb}" class="card-img-top" alt="${strDrink}">
                    <div class="card-body">
                        <h5 class="card-title">${strDrink}</h5>
                        <p class="card-text">${strInstructions}</p>
                    </div>
                </div>
            </div>
        `;
        div.classList.add('col');
        wrapper.appendChild(div);
        toggleSpinner('none')

    });
}

loadDrinks()