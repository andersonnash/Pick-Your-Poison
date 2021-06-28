const button = document.querySelector('button')
const button2 = document.querySelector('button')
const section = document.querySelector('.your-drink')
const dataContainer = document.querySelector("#data-container")
const mybutton = document.getElementById("myBtn")


// Get data from cocktail named
async function fetchData(name) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    const response = await axios.get(url)
    // console.log(response)
    // console.log(response.data.drinks)
    const drinksArray = Object.values(response.data.drinks)
    // console.log(drinksArray)
    showDrinkData(drinksArray)
    return response
  } catch (error) {
    console.error(error)
    let errorMsg = document.createElement('h1')
    errorMsg.textContent = 'Check Spelling and Try Again!'
    dataContainer.append(errorMsg)
  }   
}
// fetchData('gin')


// Get data from alcohol 
async function alcData(name) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
    const response = await axios.get(url)
    const alcsArray = Object.values(response.data.drinks)
    showAlcData(alcsArray)
    return response
  } catch (error) {
    console.error(error)
  }   
}
// alcData('vodka')


function showAlcData(data){
  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
    const alcDiv = document.createElement('div')
    alcDiv.classList.add("alcDiv")
    section.append(alcDiv)

    const alcName = document.createElement('h3')
    alcName.textContent = `${data[i].strDrink}`
    console.log(data[i].strDrink)
    alcDiv.append(alcName)

    const drinksImg = document.createElement('img')
    drinksImg.setAttribute('src', data[i].strDrinkThumb)
    console.log(data[i].strDrinkThumb)
    drinksImg.classList.add('drinksImg')
    alcDiv.append(drinksImg)
  }
}

function showDrinkData(data) {
  for (let i = 0; i < data.length; i++) {

    const drinkDiv = document.createElement('div')
    drinkDiv.classList.add('drinkDiv')
    section.append(drinkDiv)

    const drinkName = document.createElement('h3')
    drinkName.textContent = `${data[i].strDrink}`
    drinkDiv.append(drinkName)

    const drinksImg = document.createElement('img')
    drinksImg.classList.add('drinksImg')
    drinksImg.setAttribute('src', data[i].strDrinkThumb)
    drinksImg.classList.add('drinksImg')
    drinkDiv.append(drinksImg)

    const inst = document.createElement('h4')
    inst.textContent = `${data[i].strInstructions}`
    console.log(data[i].strInstructions)
    drinkDiv.append(inst)


      let measurments = []
      let ingredients = []

      for (let measurment in data[i]) {
        if (measurment.includes("strMeasure") && data[i][measurment] != null) {
          measurments.push(data[i][measurment])
        }
      }

    for (let ingredient in data[i]) {
      console.log(data[i][ingredient])
        if (ingredient.includes('strIngredient') &&  data[i][ingredient] != null) {
          ingredients.push(data[i][ingredient])  
      }
    }
    for (let i = 0; i < ingredients.length; i++){
      const ing = document.createElement('p')
      ing.textContent = `${ingredients[i]}: ${measurments[i]}`
      drinkDiv.append(ing)
    }
  }
}



const form = document.querySelector('.drink-data')
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = document.querySelector('#blank').value
  document.querySelector('#blank').value = ""
  fetchData(data)

  removeDrink()
})
  
const alc = document.querySelector('.alc-data')
alc.addEventListener("submit", (e) => {
  e.preventDefault()
  const data2 = document.querySelector("#blank2").value
  document.querySelector("#blank2").value = ""
  alcData(data2)

  removeDrink()
})

function removeDrink() {
  while (section.lastChild) {
    section.removeChild(section.lastChild)
  }
}

// Got this from W3 Schools
window.onscroll = function () { scrollFunction() }
function scrollFunction() {
  if (document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}