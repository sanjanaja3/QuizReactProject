import { useState } from 'react'

const questions = [
  {
    q: 'What is React?',
    options: ['Library', 'Framework', 'Language'],
    ans: 0,
    exp: 'React is a JavaScript library for UI.'
  },
  {
    q: 'What is useState?',
    options: ['Hook', 'Component', 'API'],
    ans: 0,
    exp: 'useState is a React Hook.'
  }
]

export default function Quiz() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const selectOption = (i) => {
    if (i === questions[index].ans) {
      setScore(score + 1)
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1)
    } else {
      setFinished(true)
    }
  }

  return (
    <div className="card">
      {!finished ? (
        <>
          <h3>{questions[index].q}</h3>
          {questions[index].options.map((opt, i) => (
            <button key={i} onClick={() => selectOption(i)}>
              {opt}
            </button>
          ))}
        </>
      ) : (
        <>
          <h2>Score: {score}/{questions.length}</h2>
          <h3>Explanations:</h3>
          {questions.map((q, i) => (
            <p key={i}>{q.exp}</p>
          ))}
        </>
      )}
    </div>
  )
}
