async function fetchAndProcessData(url) {
    try {
        // Выполняем запрос к серверу
        const response = await fetch(url);

        // Проверяем успешность запроса
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Возвращаем полученные данные
        return data;
    } catch (error) {
        // Обработка ошибки, в случае, если что-то пошло не так
        console.error('Произошла ошибка при загрузке данных:', error.message);
        return { error: 'Ошибка при загрузке данных' };
    }
}