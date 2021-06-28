# Pick-your-poison

# Project Overview

## Project Name
Pick Your Poison

https://andersonnash.github.io/Pick-your-poison/

## Project Description

This app will append the cocktial name, recipe description, and ingredient list to the browser. The user will be able to type a cocktail name and the app will return multiple cockails with the keyword name.

## API and Data Sample

www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

Cocktail DB API
```
"drinks": [
        {
            "idDrink": "11007",
            "strDrink": "Margarita",
            "strDrinkAlternate": null,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strInstructionsES": null,
            "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
            "strInstructionsFR": null,
            "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": null,
            "strIngredient6": null,
            "strIngredient7": null,
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": null,
            "strMeasure5": null,
            "strMeasure6": null,
            "strMeasure7": null,
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
            "strImageAttribution": "Cocktailmarler",
            "strCreativeCommonsConfirmed": "Yes",
            "dateModified": "2015-08-18 14:42:59"
```

## Wireframes

[Pick-Your-Poison][https://lucid.app/lucidchart/invitations/accept/inv_08549d47-19f1-4aab-838d-52bcee01d56d?viewport_loc=55%2C-63%2C1441%2C1059%2C0_0]


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Render image, recipe, and description on page 
- Allow user to search for specific cocktail 
- Flex Box Styling for Seaech Results
- Media Query for Mobile

#### PostMVP  

- incorporate a different function of the same API into the website.
- Add hover feature that will display a bartender mixing their cocktail
- Add links to amazon to purchase bar supplies
- Use local storage to save user favorites
- Add an "add to favorites button" that fades the coctktail image when clicked
- add a 21 and up to enter prompt

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | complete
|June 23| Pseudocode / actual code | complete
|June 24|MPV Initial Clickable Model  | complete
|June 25| Advanced Styling PVMP| complete
|June 28| Presentations | Incomplete

## Priority Matrix

[https://user-images.githubusercontent.com/82549011/122825569-5acdc580-d29f-11eb-9120-05bb8f58e087.png]

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 6hrs| 6hrs | 6hrs |
| Create Click Event to Render Data  | H | 3hrs |  1hr | 1hrs  |
| Create Dynamic HTML | H | 3hrs| 3hrs | 3hrs |
| Create CSS | H | 3hrs| 4hrs | 4hrs |
| Appending Drink Data | H | 3hrs| 2hrs | 2hrs |
| Appending Drink Image | H | 1hrs| 1hrs | 1hrs |
| Formatting Images| H | 3hrs| 1.5hrs | 1.5hrs|
| Flex Box Styling | H | 2hrs| 3hrs | 3hrs |
| Flex Box for search results| H | 2hrs| 2hrs | 2hrs|
| Advanced CSS| H | 3hrs| 6hrs | 6hrs|
| Remove Search When New Search is Initialized| H | 3hrs| 2hrs |2hrs |
| Media Query| H | 2hrs| 1.5hrs | 1.5hrs|
| Getting rid of Null| H | 3hrs| 6hrs | 6hrs|
| Adding GitHub Logo and Link| H | 1hr| 1hrs |2hrs |
| Total | H | 30hrs|  | 40hrs |

## Code Snippet

```// This is the code that will remove null values

    // Create empty array for measurments 
    // Create empty array for ingredients
      let measurments = []
      let ingredients = []

      //Push measurments into the measurments array with a for in loop - 
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
```

## Change Log
I have a bunch of PVMPs that I couldnt get done because adding another function to the site took longer than expected. 
