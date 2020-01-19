var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let product = document.querySelectorAll(".product");
var deleteButton = document.querySelectorAll(".btn-delete");
let totalSum = 0;
let sumaFilas = 0;
let multiplicacion = 0;


// Iteration 1.1 - updateSubtot
function updateSubtot($product) {
  let priceUnit = document.querySelector(`.pu span`).innerHTML;
  let quantityProduct = document.querySelector(`.qty label input`).value;
  let subTotal = priceUnit*quantityProduct;

  //let subTotal.innerHTML = document.querySelector(`.subtot span`)
  return document.querySelector(`.subtot span`).innerHTML = subTotal;
}

// Iteration 1.2 - Call updateSubtot
function calcAll() {

  totalSum = 0;
  let allItems =document.querySelectorAll( `.product`);
  // En teoría sería para cada fila de la tabla, pero sólo lo hace en el primero

  allItems.forEach(productRow => {
    totalSum = updateSubtot(productRow);
    // sumaFilas = sumaFilas + totalSum;
  });
  console.log(`totalSum = ${totalSum} y SumaFilas = ${sumaFilas}`)

  // totalSum.innerHTML = document.querySelector(`h2 span`);
  return document.querySelector(`h2 span`).innerHTML = totalSum; 
}
$calc.onclick = calcAll;

// Iteration 2 - Add another product
/*
let table = document.querySelector('.table')
table.childNodes.forEach(row => updateSubtot(row))*/