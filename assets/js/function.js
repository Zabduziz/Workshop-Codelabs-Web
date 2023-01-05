// https://www.themealdb.com/api/json/v1/1/categories.php
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}

export async function getCategory(){
    $.ajax({
        url : 'https://www.themealdb.com/api/json/v1/1/categories.php',
        type : 'GET', // GET POST PUT PATCH DELETE
        dataType : 'json',
        success : function (response){
            response.categories.map((item) => {
                renderGetCategories(item)
            })
        }, fail: function(err){
            console.error(err.message)
        }
    })
}

export async function getCategoryFoodByName(category){
    $.ajax({
        url : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        type : 'GET',
        dataType : 'json',
        success : function (response){
            removeElementFoodCategory()
            response.meals.map((item) => {
                renderGetCategoriesByName(item)
            })
        }
    })
}

export async function getFullDetail(idMeal){
    $.ajax({
        url : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
        type : 'GET',
        dataType : 'json',
        success : function (response){
            removeElementFoodCategory()
            removeElementFoodDetail()
            response.meals.map((item) => {
                renderFullDetail(item)
            })
        }
    })
}

function removeElementFoodDetail(){
    $('#food-detail').remove()
}

function removeElementFoodCategory(){
    $('#food-category').remove()
}

// Render Element
function renderGetCategories(item){
    $('#food-category').append(
        `<div class="category">
            <a href="?category=${item.strCategory}">
            <img src="${item.strCategoryThumb}">
            <h3>${item.strCategory}</h3></a>
            <p>${item.strCategoryDescription}</p>
            </a>
        </div>`
    )
}

function renderGetCategoriesByName(item){
    $('#food-detail').append(
        `<div class="category2">
            <a href="?idMeal=${item.idMeal}">
            <img src="${item.strMealThumb}" class="photo">
            <h3>${item.strMeal}</h3>
        </div>`
    )
}

function renderFullDetail(item){
    $('#food-full').append(
        `<div class="full">
            <div class="photocard">
                <img src="${item.strMealThumb}" class="photo">
            </div>
            <h1>${item.strMeal}</h1>
            <h2>${item.strCategory}</h2>
            <p>${item.strInstructions}</p>
            <h4>Source : <a href="${item.strSource}">${item.strSource}<a/></h4>
        </div>`
    )
}