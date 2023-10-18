window.addEventListener('DOMContentLoaded', function (event)
{
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button");
    b.addEventListener("click", Price);
})

let productTypes = new Map();
productTypes.set("v1", 5000);
productTypes.set("v2", 15000);
productTypes.set("v3", 3000);

function Price() {
    event.preventDefault();
    let button = document.getElementById("quantity1").value;
    let m = button.match(/^[0-9]+$/);
    if (m !== null && button > 0)
    {
        let v = document.getElementById("select1").value;
        let rez = "Общая сумма: " + productTypes.get(v) * button;
        document.getElementById("result").innerHTML = rez;
    }
    else 
    {
        alert("Неправильно введено количесво товара!");
    }
}




const quantityInput = document.getElementById('quantity');
const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
const optionContainer = document.getElementById('optionContainer');
const optionSelect = document.getElementById('option');
const propertyContainer = document.getElementById('propertyContainer');
const propertyCheckbox = document.getElementById('property');
const totalPriceElement = document.getElementById('totalPrice');

function calculateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
    let optionPrice = 0;
    let propertyPrice = 0;
    selectedServiceType = document.querySelector('input[name="serviceType"]:checked').value;

  if (selectedServiceType === '7000') {
    optionPrice = parseInt(optionSelect.value);
  }
  else if (selectedServiceType === '1500')
  {
    if (propertyCheckbox.checked) {
        propertyPrice = 2000;
      }
  }
  const totalPrice = quantity * (parseInt(serviceType) + optionPrice + propertyPrice);

  totalPriceElement.textContent = totalPrice;
}

function handleServiceTypeChange() {
  selectedServiceType = document.querySelector('input[name="serviceType"]:checked').value;

  if (selectedServiceType === '15000') {
    optionContainer.style.display = 'none';
    propertyContainer.style.display = 'none';
  } else if (selectedServiceType === '7000') {
    optionContainer.style.display = 'block';
    propertyContainer.style.display = 'none';
  } else if (selectedServiceType === '1500') {
    optionContainer.style.display = 'none';
    propertyContainer.style.display = 'block';
  }
  calculateTotalPrice();
}

quantityInput.addEventListener('input', calculateTotalPrice);
serviceTypeInputs.forEach((input) => {
  input.addEventListener('change', () => {
    calculateTotalPrice();
    handleServiceTypeChange();
  });
});
optionSelect.addEventListener('change', calculateTotalPrice);
propertyCheckbox.addEventListener('change', calculateTotalPrice);

  