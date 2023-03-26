import axios from "axios"


export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>('http://localhost:8081/php/rest/gallery.php')
        return data
    } 
}