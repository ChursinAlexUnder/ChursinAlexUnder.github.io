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
    let c = document.getElementById("quantity").value;
    let m = c.match(/^[0-9]+$/);
    if (m !== null && c > 0)
    {
        let v = document.getElementById("select").value;
        let rez = "Общая сумма: " + productTypes.get(v) * c;
        document.getElementById("result").innerHTML = rez;
    }
    else 
    {
        alert("Неправильно введено количесво товара!");
    }
}
