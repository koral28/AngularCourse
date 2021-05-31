import { Exam } from './exam'

let newExam = new Exam()
newExam.addQuestion({
  caption: 'Which one is a data structur name?',
  answers: ['queue', 'house', 'enum'],
  correctIndex: 0,
})
newExam.addQuestion({
  caption: 'Which one is a design pattern name?',
  answers: ['singelton', 'nvc', 'array'],
  correctIndex: 0,
})
newExam.addQuestion({
  caption: 'Which one is a protected word?',
  answers: ['num', 'temp', 'var'],
  correctIndex: 2,
})
newExam.addQuestion({
  caption: 'Which one is a name of popular algorithm?',
  answers: ['dijkstra', 'moonlight', 'stack'],
  correctIndex: 0,
})

newExam.print()

console.log(`Your grade is: ${newExam.grade([2, 2, 2, 2])}`)
