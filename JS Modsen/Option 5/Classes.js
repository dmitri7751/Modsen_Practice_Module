class University {
    constructor(name) {
        this.name = name;
        this.faculties = [];
    }

    // Метод для добавления факультета
    addFaculty(facultyName) {
        if (!this.faculties.includes(facultyName)) {
            this.faculties.push(facultyName);
            console.log(`Факультет "${facultyName}" добавлен.`);
        } else {
            console.log(`Факультет "${facultyName}" уже существует.`);
        }
    }

    // Метод для удаления факультета
    removeFaculty(facultyName) {
        const index = this.faculties.indexOf(facultyName);
        if (index !== -1) {
            this.faculties.splice(index, 1);
            console.log(`Факультет "${facultyName}" удален.`);
        } else {
            console.log(`Факультет "${facultyName}" не найден.`);
        }
    }

    // Метод для отображения всех факультетов
    displayFaculties() {
        if (this.faculties.length === 0) {
            console.log("В университете нет ни одного факультета.");
        } else {
            console.log(`Факультеты университета "${this.name}":`);
            this.faculties.forEach(faculty => {
                console.log(faculty);
            });
        }
    }
}

// Создание экземпляра класса University
const myUniversity = new University("BSUIR");

// Примеры использования методов
myUniversity.addFaculty("Information technologies");
myUniversity.addFaculty("Math");
myUniversity.addFaculty("Physics");
myUniversity.displayFaculties();

myUniversity.removeFaculty("Math");
myUniversity.displayFaculties();
