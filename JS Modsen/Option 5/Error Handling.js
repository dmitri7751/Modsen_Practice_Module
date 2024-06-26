function accessUndefinedVariable() {
    try {
        // Попытка доступа к неопределенной переменной
        console.log(undefinedVariable);
    } catch (error) {
        // Обработка ошибки типа ReferenceError
        console.error('Ошибка перехвачена: переменная не определена');
        console.error(error.message);
    }
}

// Пример использования функции
accessUndefinedVariable();
