import Axios from 'axios'
export class Airtable{
    private URL: string = `https://api.airtable.com/v0/${process.env.QUIZZER_BASE}`;
    constructor(){
    }
    async fetchAQuiz(id: string){
        try {
            let data = await Axios({
                url: this.URL + `/quizzes`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
                }
            })

            return data.data
        } catch (error) {
            throw error
        }
    }
}