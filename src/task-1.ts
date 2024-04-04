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

  const sizeIceCream: string | undefined = prompt(
    "Який розмір морозива Ви бажаєте великий чи маленький"
  )?.toLowerCase();

  switch (sizeIceCream) {
    case "великий":
      totalPrice += defaultPrice.bigCap;
      break;
    case "маленький":
      totalPrice += defaultPrice.smallCap;
      break;
    default:
      alert("Нажаль ми отримали невірні данні спробуйте ще раз");
      return;
  }

  const filling: string[] | undefined = prompt(
    "Яку начинку Ви бажаєте додати\nШоколад\nКарамель\nЯгоди"
  )
    ?.toLowerCase()
    .trim()
    .replace(/,/g, "")
    .split(/\s+/);

  if (filling) {
    filling?.forEach((taste) => {
      switch (taste) {
        case "карамель":
          totalPrice += defaultPrice.filling.caramel;
          break;
        case "ягоди":
          totalPrice += defaultPrice.filling.berries;
          break;
        case "шоколад":
          totalPrice += defaultPrice.filling.chocolate;
          break;
      }
    });
  } else {
    alert("Нажаль ми отримали невірні данні спробуйте ще раз");
    return;
  }

  const addFilling: boolean = confirm("Ви бажаєте додати маршмелоу");
  let answerForMarshmallow: string;
  if (addFilling) {
    totalPrice += defaultPrice.filling.marshmallow;
    answerForMarshmallow = "так";
  } else {
    answerForMarshmallow = "ні";
  }

  alert(
    `Ваше замовлення:\nРозмір стаканчика: ${sizeIceCream},\nНаповнення: ${filling},\nМаршмелоу ${answerForMarshmallow}.\nЗагальна сума замовлення скаладє ${totalPrice} грн`
  );
}
getIceCreamPrice();
