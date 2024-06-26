// Использую асинхронную функцию для удобства
async function executePromises() {
    try {
        const result1 = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(3), 0);
        });

        console.log(result1);

        const result2 = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(result1 ** 4), 8000);
        });

        console.log(result2);

        const result3 = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(result2 ** 4), 8000);
        });

        console.log(result3);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

// Вызов функции для выполнения цепочки промисов
executePromises();
