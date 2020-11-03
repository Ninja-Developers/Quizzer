import Axios from 'axios'
export class Airtable{
    private URL: string = "ttps://api.airtable.com/v0";
    constructor(){
    }
    async fetchAQuiz(id: string){
        Axios({
            url: this.URL,

        })
    }
}