let carrousel = "<h2>CARROUSEL</h2>";
document.querySelector(".carrousel").innerHTML = carrousel;

let prices = [500, 1000, 600, 750, 2100, 1700];
let offers = [{price: 500, description: "250g Cafe Excelso Colombia"},
              {price: 1000, description: "500g Cafe Excelso Colombia"},
              {price: 1500, description: "2Kg Cafe Excelso Colombia"},
              {price: 1700, description: "500g Cafe Guanes Genuino Colombia"},
              {price: 1300, description: "250g Cafe Kona Hawaii Premium "},
              {price: 700, description: "250g Cafe Guanes Genuino Colombia"}, ];
for (let i = 0; i < prices.length; i++) {
  document.querySelector(".offers").innerHTML += `
        <div class='offers-item'>
            <img src='https://placeimg.com/200/200/tech'>
            <div class='price'>
                <h2>$ ${offers[i].price}</h2>
                <p>${offers[i].description}</p>
            </div>
        </div>`;
}