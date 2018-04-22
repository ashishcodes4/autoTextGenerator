const category = document.querySelector("#category");
const subCategory = document.querySelector('#subCategory');

category.addEventListener('change', changeSubcategory);
subCategory.addEventListener('change', showSubCat);

console.log(category);


function changeSubcategory() {
    if (this.value === 'Event Details') {
        subCategory.innerHTML = "<option value='general'>General</option><option value='Agenda Items'>Agenda Items</option><option value='Pricing'>Pricing</option><option value='Travel'>Travel</option>"
    } 
    
    else if (this.value === 'Website') {
        subCategory.innerHTML = "<option value='event_website'>Event Website</option><option value='registration'>Registration</option><option value='surveys'>Survey</option><option value='onsite'>Onsite</option><option value='question'>Questions</option>"
    }

    else if (this.value === 'Promotion') {
        subCategory.innerHTML = "<option value='web'>Web</option><option value='email'>Email</option>"
    }

    else if (this.value === 'Invitee') {
        subCategory.innerHTML = "<option value='manage'>Manage</option><option value='quickAction'>Qucik Action</option><option value='import'>Import</option><option value='assign'>Assign</option>"
    }

    else if (this.value === 'Reporting') {
        subCategory.innerHTML = "<option value='reporting'>Reporting</option>"
    }
}

function showSubCat() {
    console.log(subCategory);
}



