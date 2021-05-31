"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
var newExam = new exam_1.Exam();
newExam.addQuestion({
    caption: 'Which one is a data structur name?',
    answers: ['queue', 'house', 'enum'],
    correctIndex: 0,
});
newExam.addQuestion({
    caption: 'Which one is a design pattern name?',
    answers: ['singelton', 'nvc', 'array'],
    correctIndex: 0,
});
newExam.addQuestion({
    caption: 'Which one is a protected word?',
    answers: ['num', 'temp', 'var'],
    correctIndex: 2,
});
newExam.addQuestion({
    caption: 'Which one is a name of popular algorithm?',
    answers: ['dijkstra', 'moonlight', 'stack'],
    correctIndex: 0,
});
newExam.print();
console.log("Your grade is: " + newExam.grade([0, 0, 2, 0]));
//# sourceMappingURL=main.js.map