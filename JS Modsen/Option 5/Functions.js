const findFirstUnique = (array) => {
    const countMap = {}; // объект для подсчета количества вхождений каждого элемента

    // первый проход по массиву для подсчета
    for (let num of array) {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }

    // второй проход по массиву для поиска первого неповторяющегося элемента
    for (let num of array) {
        if (countMap[num] === 1) {
            return num;
        }
    }

    return null; // если нет неповторяющихся элементов
};

// Пример использования функции
console.log(findFirstUnique([1, 5, 4, 6, 5, 4, 3, 1, 7])); //  результат: 6
console.log(findFirstUnique([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])); // : null (нет неповторяющихся элементов)
