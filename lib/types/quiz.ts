export interface Question{
    question: string
}

export interface Options{
    options: Array<string>
}

export interface Answer{
    answer: number
}

export interface Quiz extends Question, Options, Answer {
    
}