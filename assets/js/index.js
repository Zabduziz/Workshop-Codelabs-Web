import {
    getCategory,
    getCategoryFoodByName,
    getFullDetail
} from './function.js'

const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category')
var idMeal = urlParams.get('idMeal')

if(category){
    await getCategoryFoodByName(category)
}
if(idMeal){
    await getFullDetail(idMeal)
}

await getCategory()