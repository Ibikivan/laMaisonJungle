export function addToCart(id, name, price, cart, updateCart, setIsOpen) {
    const isAlreadyIn = cart.find((plant) => plant.name === name);

    if (isAlreadyIn) {
        const newCart = cart.filter((plant) => plant.name !== name);

        updateCart([...newCart, {id, name, price, amount: isAlreadyIn.amount + 1}]);
    } else {
        updateCart([...cart, {id, name, price, amount: 1}]);
    };

    setIsOpen(true);
};

export function handleCare(type, value) {
    const valueLabel = {
        1: "peu",
        2: "modérement",
        3: "beaucoup"
    };

    return (`Requiert ${valueLabel[value]} ${type === "light" ? "de lumière" : "d'arrosage"}`)
};