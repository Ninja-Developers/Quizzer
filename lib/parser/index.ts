/**
 * console.log(this.individualQuestions[i].children[0].children[0].children[0].children[0].children[0].children[1].children[0].value)
 * 
 */

export interface Quiz {
    question: string,
    options: Array<string>,
    answer: number
}

export class FormParser {
    private ref: any;
    private individualQuestions: Array<any>;
    constructor(ref: any) {
        this.ref = ref
        this.individualQuestions = this.ref.current.children
    }

    genForm() {
        for (let i = 0; i < this.individualQuestions.length; i++) {
            let fields = this.getFields(this.individualQuestions[i])
            console.log(fields)
        }
    }
    private getFields(qDiv: any): Quiz {
        let questionDiv = qDiv.children[0].children[0].children[0];

        let optionDiv = qDiv.children[0].children[0].children[2];

        let answerDiv = qDiv.children[0].children[0].children[3]

        let quiz: Quiz = {
            question: questionDiv.children[0].children[0].children[1].children[0].value,
            options: this.getoptionFields(optionDiv),
            answer: this.getAnswerFields(answerDiv)
        }
        return quiz
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