const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const btnSave = document.querySelector("#btn-save");
const btnClear = document.querySelector("#btn-clear");
const productList = document.querySelector("#product-list");
const totalOutput = document.querySelector("#total");

let total = 0;

const createNewProduct = (name, price) => {
  const ionCard = document.createElement("ion-card"); //Crea un elemento HTML de tipo ion-card
  const newProductItem = document.createElement("ion-card-content"); // Crea un elemento HTML de tipo ion-card-content
  newProductItem.textContent = name + ": $" + price; //Para agregar texto a newProductItem
  ionCard.appendChild(newProductItem); //Para hacer que newProductItem sea hijo de ionCard
  productList.appendChild(ionCard); //Para hacer que ionCard sea hijo de productList
};

//Para limpiar los campos de texto
btnClear.addEventListener("click", () => {
  productName.value = "";
  productPrice.value = "";
});

const presentAlert = () => {
  const alert = document.createElement("ion-alert");
  //Datos del alert
  alert.header = "Invalid Data";
  alert.subHeader = "Please verify your inputs";
  alert.message = "Incorrect name or price";
  alert.buttons = ["OK"];

  document.body.appendChild(alert); //para añadirlo al cuerpo del html este elemento alert
  return alert.present();//para mostrarlo encima de todos los elementos html
};
//Validar inputs
const isEmpty = (string) => {
  !string.trim().length;
};

//Para guardar los datos
btnSave.addEventListener("click", () => {
  const name = productName.value;
  const price = productPrice.value;
  //Validar inputs
  if (isEmpty(name) || isEmpty(price) || price <= 0) {
   presentAlert();
    return;
  }

  createNewProduct(name, price);
  total += +price;//+price para convertirlo a numero aunque sea un string
  totalOutput.textContent = total;
});
