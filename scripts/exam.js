const DATA = [
    {
        question: '1. Какая переменная записана неверно?',
        answers: [
            {
                id: '1', // уникальный!!!
                value: 'а) var num = "STRING";',
                correct: false,
            },
            {
                id: '2',
                value: 'б) var isDone = 0;',
                correct: false,
            },
            {
                id: '3',
                value: 'в) var b = false;',
                correct: false,
            },
            {
                id: '4',
                value: 'г) var number = 12,5;',
                correct: true,
            },
        ]
    },
    {
        question: '2. В чем отличие между локальной и глобальной переменной?',
        answers: [
            {
                id: '5',
                value: 'а) Отличий нет',
                correct: false,
            },
            {
                id: '6',
                value: 'б) Локальные видны повсюду, глобальные только в функциях',
                correct: false,
            },
            {
                id: '7',
                value: 'в) Глобальные можно переопределять, локальные нельзя',
                correct: false,
            },
            {
                id: '8',
                value: 'г) Локальные можно переопределять, глобальные нельзя',
                correct: false,
            },
            {
                id: '9',
                value: 'д) Глобальные видны повсюду, локальные только в функциях',
                correct: true,
            }
        ]
    },
    {
        question: '3. Какой метод позволяет изменять порядок элементов массива на противоположный:',
        answers: [
            {
                id: '10',
                value: 'а) join()',
                correct: false,
            },
            {
                id: '11',
                value: 'б) sort()',
                correct: false,
            },
            {
                id: '12',
                value: 'в) reverse()',
                correct: true,
            }
        ]
    },
    {
        question: '4. Что такое условный оператор?',
        answers: [
            {
                id: '13',
                value: 'а) Конструкция, что выполняет код несколько раз',
                correct: false,
            },
            {
                id: '14',
                value: 'б) Конструкция для создания определенной переменной',
                correct: false,
            },
            {
                id: '15',
                value: 'в) Оператор сравнения значений',
                correct: true,
            }
        ]
    },
    {
        question: '5. Какие значения можно хранить в переменных?',
        answers: [
            {
                id: '16',
                value: 'а) Только числа и строки',
                correct: false,
            },
            {
                id: '17',
                value: 'б) Строки, числа с точкой и простые числа',
                correct: false,
            },
            {
                id: '18',
                value: 'в) Строки, числа с точкой, простые числа и булевые выражения',
                correct: true,
            }
        ]
    },
    {
        question: '6. В чем разница между confirm и prompt?',
        answers: [
            {
                id: '19',
                value: 'а) Они ничем не отличаются',
                correct: false,
            },
            {
                id: '20',
                value: 'б) confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением',
                correct: false,
            },
            {
                id: '21',
                value: 'в) prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением',
                correct: true,
            }
        ]
    },
    {
        question: '7. Где верно указан запуск всплывающего окна?',
        answers: [
            {
                id: '22',
                value: 'а) new alert ("Hi")',
                correct: false,
            },
            {
                id: '23',
                value: 'б) info ("Hi")',
                correct: false,
            },
            {
                id: '24',
                value: 'в) Нет верных вариантов',
                correct: false,
            },
            {
                id: '25',
                value: 'г) alert ("Hi")',
                correct: true,
            },
        ]
    },
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
                <li>
                    <label>
                        <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                        ${answer.value}
                    </label>                        
                </li>
        `)
        .join('');

    questions.innerHTML = `
        <div class="quiz-questions-item">
            <div class="quiz-questions-item__question">${DATA[index].question}</div>
            <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
        </div>
    `;
};    
    

const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid';
        } else if (answer.correct) {
            classname = 'answer--valid';
        }

        return classname;
    };


    const getAnswers = (questionIndex) =>  DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item__question">${question.question}</div>
                <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
            </div>
        `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `Вопрос ${currentStep} из ${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        
        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults();
        } else {
            renderQuestions(Number(questions.dataset.currentStep) + 1);
        }

        btnNext.disabled = true;
    }

    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0);
console.log(renderQuestions(0));