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
    var button = document.getElementById("quantity").value;
    let m = button.match(/^[0-9]+$/);
    if (m !== null && button > 0)
    {
        let v = document.getElementById("select").value;
        let rez = "Общая сумма: " + productTypes.get(v) * button;
        document.getElementById("result").innerHTML = rez;
    }
    else 
    {
        alert("Неправильно введено количесво товара!");
    }
}
