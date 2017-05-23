var coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: {
      beanCost: 10,
      price: 20
    },
    americano: {
      beanCost: 5,
      price: 10
    },
    doubleShot: {
      beanCost: 15,
      price: 30
    },
    frenchPress: {
      beanCost: 12,
      price: 24
    }
  },

  makeDrink: function (drinkType) {
    if (!(drinkType in coffeeShop.drinkRequirements)) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }
    if (this.drinkRequirements[drinkType].beanCost <= this.beans) {
      this.beans -= this.drinkRequirements[drinkType].price;
      this.money += this.drinkRequirements[drinkType].price;
    }
    else {
      console.log("sorry, no beans");
    }
    console.log(this.beans);
  },

  buySupplies: function (quantity) {
    this.beans += quantity;
    this.money -= quantity;
  },

  buyDrink: function (request) {
    this.makeDrink(request);
  }
}
console.log("Money: " + coffeeShop.money);
coffeeShop.buySupplies(50);
console.log("Money: " + coffeeShop.money);
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
console.log("Money: " + coffeeShop.money);