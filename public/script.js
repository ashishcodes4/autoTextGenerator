const category = document.querySelector("#category");
const subCategory = document.querySelector("#subCategory");
const mode = document.querySelector("#modes");

category.addEventListener("change", changeSubcategory);
subCategory.addEventListener("change", showSubCat);
mode.addEventListener("change", showText);

console.log(category);

function changeSubcategory() {
  if (this.value === "Event Details") {
    subCategory.innerHTML =
      "<option value='null'></option><option value='general'>General</option><option value='Agenda Items'>Agenda Items</option><option value='Pricing'>Pricing</option><option value='Travel'>Travel</option>";
  } else if (this.value === "Website") {
    subCategory.innerHTML =
      "<option value='null'></option><option value='event_website'>Event Website</option><option value='registration'>Registration</option><option value='surveys'>Survey</option><option value='onsite'>Onsite</option><option value='question'>Questions</option>";
  } else if (this.value === "Promotion") {
    subCategory.innerHTML =
      "<option value='null'></option><option value='web'>Web</option><option value='email'>Email</option>";
  } else if (this.value === "Invitee") {
    subCategory.innerHTML =
      "<option value='null'></option><option value='manage'>Manage</option><option value='quickAction'>Qucik Action</option><option value='import'>Import</option><option value='assign'>Assign</option>";
  } else if (this.value === "Reporting") {
    subCategory.innerHTML =
      "<option value='null'></option><option value='reporting'>Reporting</option>";
  }
}

function showSubCat() {
  console.log(this.value);
}

function showText() {
  console.log(this.value);
}

//fetch the data from the server

$.get("/data", res => {
  res.map(el => {
    $("#data").append(
      `
      <h3>${el.title}</h3>
      <p>${el.body}</p>
    `
    );
  });
});
