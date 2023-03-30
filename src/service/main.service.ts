import axios from "axios"


export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>('/rest/gallery.php')
        return data
    } 
}