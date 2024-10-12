import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const questions = [
  {
    question: "Which subject do you enjoy the most?",
    options: ["Math", "Science", "Literature", "Art"]
  },
  {
    question: "How do you prefer to work?",
    options: ["Alone", "In small groups", "In large teams", "With the public"]
  },
  {
    question: "What's most important to you in a career?",
    options: ["High salary", "Work-life balance", "Making a difference", "Continuous learning"]
  }
]

export function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getCareerSuggestion = () => {
    // This is a simple suggestion logic. In a real application, you'd want more sophisticated matching.
    if (answers[0] === "Math" && answers[1] === "Alone") return "Data Scientist"
    if (answers[0] === "Science" && answers[2] === "Making a difference") return "Environmental Scientist"
    if (answers[0] === "Literature" && answers[1] === "With the public") return "Journalist"
    if (answers[0] === "Art" && answers[2] === "Continuous learning") return "UX Designer"
    return "Career Counselor"
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Career Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <div>
            <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h3>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="quiz-option"
                    value={option}
                    onChange={() => handleAnswer(option)}
                    className="mr-2"
                  />
                  <label htmlFor={`option-${index}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-4">Based on your answers, you might enjoy a career as a:</h3>
            <p className="text-2xl font-bold text-indigo-600">{getCareerSuggestion()}</p>
            <Button onClick={() => {setCurrentQuestion(0); setAnswers([]); setShowResult(false)}} className="mt-4">
              Retake Quiz
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}