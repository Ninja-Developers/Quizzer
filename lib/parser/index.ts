
export interface Quiz {
    question: string,
    options: Array<string>,
    answer: number
}

export class FormParser {
    private ref: any;
    private individualQuestions: Array<any>;
    private data: Array<Quiz>;
    constructor(ref: any) {
        this.ref = ref
        this.individualQuestions = this.ref.current.children
    }

    genForm(): Array<Quiz> {
        let res: Array<Quiz> = []
        for (let i = 0; i < this.individualQuestions.length; i++) {
            let fields: Quiz = this.getFields(this.individualQuestions[i])
            res.push(fields)
        }

        this.data = res

        return this.data
    }
    private getFields(qDiv: any): Quiz {
        let questionDiv = qDiv.children[0].children[0].children[0];

        let optionDiv = qDiv.children[0].children[0].children[2];

        let answerDiv = qDiv.children[0].children[0].children[3]

        let quiz: Quiz = {
            question: this.getQuestionFeild(questionDiv),
            options: this.getoptionFields(optionDiv),
            answer: this.getAnswerFields(answerDiv)
        }
        return quiz
    }

    private getQuestionFeild(qDiv: any): string {
        return qDiv.children[0].children[0].children[1].children[0].value
    }

    private getoptionFields(oDiv: any): Array<string> {

        let arr: Array<string> = []

        let optDiv = oDiv.children[0].children[0].children

        for (let i = 0; i < optDiv.length; i++) {
            arr.push(optDiv[i].children[0].children[0].children[1].children[0].value)
        }

        return arr
    }

    private getAnswerFields(aDiv: any): number {
        let num: number = aDiv.children[0].children[0].children[0].children[0].children[0].children[1].value as number
        return num || 0
    }
}