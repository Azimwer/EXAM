// Выбираем наш section по id
let mathSection = document.getElementById("math-section");

// Создаём элементы
let StartButton = document.createElement("button");
StartButton.textContent = "Начать тест";
StartButton.className = "btn btn-primary mb-4"; // добавляем стили для кнопки
mathSection.appendChild(StartButton);

let AnsInput = document.createElement("input");
// AnsInput.type = "number";
AnsInput.className = "input input-bordered w-full max-w-xs mb-4";
AnsInput.style.display = "none";

mathSection.appendChild(AnsInput);

let ResButton = document.createElement("button");
ResButton.textContent = "Ответить";
ResButton.className = "btn btn-success mb-4";
ResButton.style.display = "none";
mathSection.appendChild(ResButton);

let questPassage = document.createElement("p");
questPassage.className = "text-lg font-bold mb-4";
mathSection.appendChild(questPassage);


// Массив с вопросами
const questions = [
    { quest: "4 + 4", answer: 8 },
    { quest: "5 * 6", answer: 30 },
    { quest: "12 / 3", answer: 4 },
    { quest: "7 - 2", answer: 5 },
    { quest: "3 + 9", answer: 12 },
    { quest: "6 * 6", answer: 36 },
    { quest: "8 + 8", answer: 16 },
    { quest: "15 / 3", answer: 5 },
    { quest: "9 - 3", answer: 6 },
    { quest: "10 + 5", answer: 15 }
];

let currentQuestion = 0;

// Функция для начала теста
StartButton.onclick = function() {
    StartButton.style.display = "none";
    AnsInput.style.display = "inline";
    ResButton.style.display = "inline";
    currentQuestion = 0;
    showQuestion();
};

// Функция для отображения вопроса
function showQuestion() {
    questPassage.textContent = questions[currentQuestion].quest;
}

// Функция проверки ответа
ResButton.onclick = function() {
    const userAnswer = parseInt(AnsInput.value);
    if (userAnswer === questions[currentQuestion].answer) {
        currentQuestion++;
        AnsInput.value = "";

        if (currentQuestion >= questions.length) {
            const restart = confirm("Поздравляем! Вы завершили тест. Хотите сыграть снова?");
            if (restart) {
                currentQuestion = 0;
                showQuestion();
            } else {
                questPassage.textContent = "Тест завершён. Спасибо за игру!";
                AnsInput.style.display = "none";
                ResButton.style.display = "none";
            }
        } else {
            showQuestion();
        }
    } else {
        alert("Неправильный ответ. Попробуйте снова.");
    }
};
