const menu = {

   
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

   
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.appetizers = desserts;
    },

           
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },


   
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },


    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name} and ${main.name} and ${dessert.name} and it costs ${totalPrice} dollars.`;
    }
};

//Appetizers
menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'calamari', 4.50);
menu.addDishToCourse('appetizers', 'garlic bread', 5.00);

//Main dishes
menu.addDishToCourse('mains', 'burger', 4.00);
menu.addDishToCourse('mains', 'salmon', 4.50);
menu.addDishToCourse('mains', 'pasta', 5.00);

//Desserts
menu.addDishToCourse('desserts', 'cannoli',4.00);
menu.addDishToCourse('desserts', 'cookie', 4.50);
menu.addDishToCourse('desserts', 'ice cream', 5.00);


const meal = menu.generateRandomMeal();

console.log(meal);