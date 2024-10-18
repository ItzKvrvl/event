
const drink={
    name: "Napoj Orzeźwiający",
    size: 500, //500ml
    price: 3.2
};

const drinks_table=[
    {
        name: "Monster",
        size: 500, //500ml
        price: 4.99
    },
    {
        name: "Woda niegazowana",
        size: 1000, //ml
        price: 1.5
    },
    {
        name: "tymbark jablko-mieta",
        size: 500, //500ml
        price: 3.5
    }
]; console.log(drinks_table.length);

function add_info(){
    console.log();
    console.log(drink.name);
    console.log(drink.size);
    console.log(drink.price);
}
add_info();

drinks_table.push(drink);
console.log();
console.log(drinks_table);