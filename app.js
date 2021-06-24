const button = document.querySelector('button')
const button2 = document.querySelector('button')
const section = document.querySelector('.your-drink')
const dataContainer = document.querySelector("#data-container")
// console.log(dataContainer)


async function fetchData(name) {
  try {
    // const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
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



async function alcData(name) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
    // console.log(url)
    const response = await axios.get(url)
    // console.log(response)
    // console.log(response.data.drinks)
    const alcsArray = Object.values(response.data.drinks)
    // console.log(alcsArray)
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
    alcDiv.classList.add("alvDiv")
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
    // console.log(data[i])

    const drinkDiv = document.createElement('div')
    // console.log(drinkDiv)
    drinkDiv.classList.add('drinkDiv')
    section.append(drinkDiv)

    const drinkName = document.createElement('h3')
    drinkName.textContent = `${data[i].strDrink}`
    // console.log(data[i].strDrink)
    drinkDiv.append(drinkName)

    const drinksImg = document.createElement('img')
    drinksImg.setAttribute('src', data[i].strDrinkThumb)
    // < img; src = `${data.strDrinkThumb}`;style ="height: 250px; width: auto">
    // console.log(data[i].strDrinkThumb)
    drinksImg.classList.add('drinksImg')
    drinkDiv.append(drinksImg)

    const inst = document.createElement('h4')
    inst.textContent = `${data[i].strInstructions}`
    console.log(data[i].strInstructions)
    // inst.classList.add('inst')
    drinkDiv.append(inst)

    // Create empty array for measurments 
    // Create empty array for ingredients
      let measurments = []
      let ingredients = []

      //Push measurments into the measurments array with a for in loop - inside of loop use control flor - if statment make sure it has.includes() str
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
    console.log(ingredients)
    console.log(measurments)
  }

  }
  button.addEventListener('click', () => {
    // const inputValue = document.querySelector('#blank').value
    let data = document.querySelector('#blank').value
    // console.log(data)
    
    fetchData(data)
    // alcData(data)
    removeDrink()
    return data
  })


button2.addEventListener('click', () => {
    // e.preventDefault
    // const inputValue = document.querySelector('#blank').value
    const data = document.querySelector('#blank2').value
    // console.log(data)
    alcData(data)
    removeDrink()
    return data
  })

  function removeDrink() {
    while (section.lastChild) {
      section.removeChild(section.lastChild)
    }
  }

