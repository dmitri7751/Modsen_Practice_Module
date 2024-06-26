function processNumber(data) {
    return new Promise((resolve, reject) => {
        // Проверяем, является ли data числом
        if (typeof data !== 'number') {
            reject(new Error('Error: Parameter is not a number'));
        } else if (data % 2 !== 0) {
            setTimeout(() => resolve('Odd'), 1000); // Возвращаем 'Odd' через 1 секунду
        } else {
            setTimeout(() => resolve('Even'), 2000); // Возвращаем 'Even' через 2 секунды
        }
    });
}

// Пример использования функции
processNumber(5)
    .then(result => {
        console.log(result); // Выведет 'Odd' через 1 секунду
    })
    .catch(error => {
        console.error(error.message); // Выведет ошибку, если параметр не число
    });

processNumber(8)
    .then(result => {
        console.log(result); // Выведет 'Even' через 2 секунды
    })
    .catch(error => {
        console.error(error.message); // Выведет ошибку, если параметр не число
    });

processNumber('test')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message); // Выведет ошибку, так как параметр не число
    });
