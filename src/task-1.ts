/*ви можете використати пакет concurrently для запуску кількох команд одночасно в скрипті start. 
Спершу встановіть цей пакет, якщо ви ще цього не зробили, використовуючи npm:
npm install concurrently --save-dev
*/

type Price = {
  smallCap: number;
  bigCap: number;
  filling: {
    chocolate: number;
    caramel: number;
    berries: number;
    marshmallow: number;
  };
};
const defaultPrice: Price = {
  smallCap: 10,
  bigCap: 25,
  filling: {
    chocolate: 5,
    caramel: 6,
    berries: 10,
    marshmallow: 5,
  },
};
function getIceCreamPrice(): void {
  let totalPrice: number = 0;
  const sizeIceCream = prompt(
    "Який розмір морозива Ви бажаєте big чи small"
  )?.toLowerCase();

  switch (sizeIceCream) {
    case "big":
      totalPrice += defaultPrice.bigCap;
      break;
    case "small":
      totalPrice += defaultPrice.smallCap;
      break;
    default:
      alert("Нажаль ми отримали невірні данні спробуйте ще раз");
      return;
  }

  const filling = prompt(
    "Яку начинку Ви бажаєте додати\nChocolate\nCaramel\nPerries"
  )?.toLowerCase();

  switch (filling) {
    case "caramel":
      totalPrice += defaultPrice.filling.caramel;
      break;
    case "berries":
      totalPrice += defaultPrice.filling.berries;
      break;
    case "chocolate":
      totalPrice += defaultPrice.filling.chocolate;
      break;
    default:
      alert("Нажаль ми отримали невірні данні спробуйте ще раз");
      return;
  }

  const addFilling = confirm("Ви бажаєте додати маршмелоу");
  addFilling
    ? alert((totalPrice += defaultPrice.filling.marshmallow))
    : alert(totalPrice);
}
getIceCreamPrice();
