const button = document.querySelector('button')
const section = document.querySelector('.your-drink')
const dataContainer = document.querySelector("#data-container")
console.log(dataContainer)


async function fetchData(name) {
  try {
    // const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    const response = await axios.get(url)
    console.log(response)
    console.log(response.data.drinks)
    const drinksArray = Object.values(response.data.drinks)
    console.log(drinksArray)
    showDrinkData(drinksArray)
    return response
  } catch (error) {
    console.error(error)
    let errorMsg = document.createElement('h1')
    errorMsg.textContent = 'Why Are You Still Awake?'
    dataContainer.append(errorMsg)
  }   
}

async function alcData(name) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
    const response = await axios.get(url)
    console.log(response)
    console.log(response.data.drinks)
    // const drinksArray = Object.values(response.data.drinks)
    // console.log(drinksArray)
    // showDrinkData(drinksArray)
    // return response
  } catch (error) {
    console.error(error)
  }   
}
alcData('gin')

function showAlcData(data){
  for (let i = 0; i < data.length; i++) {
    const alcDiv = document.createElement('div')
    section.append(alcDiv)

    const alcName = createElement('h3')
    alcName.textContent = `${data[i].strDrink}`
    console.log(data[i].strDrink)
    alcDiv.append(alcName)

    const drinksImg = document.createElement('img')
    drinksImg.setAttribute('src', data[i].strDrinkThumb)
    console.log(data[i].strDrinkThumb)
    drinksImg.classList.add('drinksImg')
    drinkDiv.append(drinksImg)


  }
}

// (! || '')

function showDrinkData(data) {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i])

    const drinkDiv = document.createElement('div')
    // console.log(drinkDiv)
    drinkDiv.classList.add('drinkDiv')
    section.append(drinkDiv)

    const drinkName = document.createElement('h3')
    drinkName.textContent = `${data[i].strDrink}`
    console.log(data[i].strDrink)
    drinkDiv.append(drinkName)

    // const drinkPic = document.createElement('img')
    // drinkPic.setAttribute('src', data[i].imageURL)
    // console.log(data[i].imageURL)
    // // console.log(drinkPic)

    const drinksImg = document.createElement('img')
    drinksImg.setAttribute('src', data[i].strDrinkThumb)
    // < img; src = `${data.strDrinkThumb}`;style ="height: 250px; width: auto">
    console.log(data[i].strDrinkThumb)
    drinksImg.classList.add('drinksImg')
    drinkDiv.append(drinksImg)

    //Create empty array for measurments 
    let measurments = []

    //Create empty array for ingredients
    let ingredients = []

    //Push measurments into the measurments array with a for in loop - inside of loop use control flor - if statment make sure it has.includes() str
    // for (measurments in array) {
    //   if (measurments === strMeasure && measurments) includes; " " || '';
    // }
    //Push ingredients into the ingredients array with a for in loop

    //For Loop (i < measurmenets.length) 
    //create a p element within the for loop - textContent of ele use `${}`
    //ingredients[i] 
    //measurments[i]




    const ing1 = document.createElement('p')
    ing1.textContent = `${data[i].strIngredient1}:`
    console.log(data[i].strIngredient1)
    drinkDiv.append(ing1)

    const ing2 = document.createElement('p')
    ing2.textContent = `${data[i].strIngredient2}:`
    console.log(data[i].strIngredient2)
    drinkDiv.append(ing2)

    const ing3 = document.createElement('p')
    ing3.textContent = `${data[i].strIngredient3}:`
    console.log(data[i].strIngredient3)
    drinkDiv.append(ing3)

    const ing4 = document.createElement('p')
    ing4.textContent = `${data[i].strIngredient4}:`
    console.log(data[i].strIngredient4)
    drinkDiv.append(ing4)

    // const ing5 = document.createElement('p')
    // ing5.textContent = `${data[i].strIngredient5}:`
    // console.log(data[i].strIngredient5)
    // drinkDiv.append(ing5)

    // const ing6 = document.createElement('p')
    // ing6.textContent = `${data[i].strIngredient6}:`
    // console.log(data[i].strIngredient6)
    // drinkDiv.append(ing6)

    const inst = document.createElement('h4')
    inst.textContent = `${data[i].strInstructions}`
    console.log(data[i].strInstructions)
    // inst.classList.add('inst')
    drinkDiv.append(inst)


    const meas1 = document.createElement('li')
    meas1.textContent = `${data[i].strMeasure1}`
    console.log(data[i].strMeasure1)
    ing1.append(meas1)

    const meas2 = document.createElement('li')
    meas2.textContent = `${data[i].strMeasure2}`
    console.log(data[i].strMeasure2)
    ing2.append(meas2)

    const meas3 = document.createElement('li')
    meas3.textContent = `${data[i].strMeasure3}`
    console.log(data[i].strMeasure3)
    ing3.append(meas3)

    const meas4 = document.createElement('li')
    meas4.textContent = `${data[i].strMeasure4}`
    console.log(data[i].strMeasure4)
    ing4.append(meas4)



    // return !value
    // if (strIngredient6 === null) {
    //   console.log('')
    // } else {
    //   console.log(strIngredient6)
    // }

  }
}


// const form = document.querySelector("#drink-form")

// form.addEventListener('click', (e) => {
//   e.preventDefault()
//   console.log(inputValue)

//   // removeCountry(dataContainer)
//   fetchData(inputValue)
//   document.querySelector('#drink-search').value = ''
// })

button.addEventListener('click', () => {
  // const inputValue = document.querySelector('#blank').value
  let data = document.querySelector('#blank').value
  console.log(data)
  fetchData(data)
  // alcData(data)
  removeDrink()
  return data
})

// button.addEventListener('submit', () => {
//   // const inputValue = document.querySelector('#blank').value
//   let data = document.querySelector('#blank2').value
//   console.log(data)
//   // fetchData(data)
//   alcData(data)
//   // removeDrink()
//   return data
// })

function removeDrink() {
  while (section.lastChild) {
    section.removeChild(section.lastChild)
  }
}

