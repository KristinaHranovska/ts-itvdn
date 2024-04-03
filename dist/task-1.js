const defaultPrice = {
    smallCap: 10,
    bigCap: 25,
    filling: {
        chocolate: 5,
        caramel: 6,
        berries: 10,
        marshmallow: 5,
    },
};
function getIceCreamPrice() {
    var _a, _b;
    let totalPrice = 0;
    const sizeIceCream = (_a = prompt("Який розмір морозива Ви бажаєте big чи small")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
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
    const filling = (_b = prompt("Яку начинку Ви бажаєте додати\nChocolate\nCaramel\nPerries")) === null || _b === void 0 ? void 0 : _b.toLowerCase();
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
//# sourceMappingURL=task-1.js.map