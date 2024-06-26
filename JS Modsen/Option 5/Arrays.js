function findMin(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Входной параметр должен быть массивом');
    }
    if (arr.length === 0) {
        throw new Error('Массив не должен быть пустым');
    }
    return Math.min(...arr);
}

// Примеры использования функции
try {
    console.log(findMin([3, 1, 5, 4, 2])); // 1
    console.log(findMin([-1, 0, 2, -3])); // -3
    console.log(findMin([10])); // 10
} catch (error) {
    console.error('Ошибка:', error.message);
}
