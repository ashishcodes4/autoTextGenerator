const category = document.querySelector("#category");
const subCategory = document.querySelector('#subCategory');

category.addEventListener('change', changeSubcategory);

console.log(category);
console.log(subCategory);


function changeSubcategory() {
    if(this.value === 'Event Details') {
        subCategory.innerHTML = "<option value='general'>General</option><option value='Agenda Items'>Agenda Items</option><option value='Pricing'>Pricing</option><option value='Travel'>Travel</option>"
    }
}



