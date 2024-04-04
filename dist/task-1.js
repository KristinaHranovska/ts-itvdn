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
    const sizeIceCream = (_a = prompt("Який розмір морозива Ви бажаєте великий чи маленький")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
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
    const filling = (_b = prompt("Яку начинку Ви бажаєте додати\nШоколад\nКарамель\nЯгоди")) === null || _b === void 0 ? void 0 : _b.toLowerCase().trim().replace(/,/g, "").split(/\s+/);
    if (filling) {
        filling === null || filling === void 0 ? void 0 : filling.forEach((taste) => {
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
    }
    else {
        alert("Нажаль ми отримали невірні данні спробуйте ще раз");
        return;
    }
    const addFilling = confirm("Ви бажаєте додати маршмелоу");
    let answerForMarshmallow;
    if (addFilling) {
        totalPrice += defaultPrice.filling.marshmallow;
        answerForMarshmallow = "так";
    }
    else {
        answerForMarshmallow = "ні";
    }
    alert(`Ваше замовлення:\nРозмір стаканчика: ${sizeIceCream},\nНаповнення: ${filling},\nМаршмелоу ${answerForMarshmallow}.\nЗагальна сума замовлення скаладє ${totalPrice} грн`);
}
getIceCreamPrice();
//# sourceMappingURL=task-1.js.map