for (let i = 0; i < 10; i++) {
    var firstVal = 5;
    let secondVal = 3;
    const thirdVal = 8;
}

console.log(firstVal); // у var область видимости функциональная и глобальная

try {
    console.log(secondVal); // у let область видимости блочная
} catch (error) {
    console.log("secondVal: не доступна"); // let имеет блочную область видимости, будет ошибка
}

try {
    console.log(thirdVal); // у const область видимости блочная
} catch (error) {
    console.log("thirdVal: не доступна"); // const имеет блочную область видимости, будет ошибка
}
