import axios from "axios"


export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>('http://server.arbihmgo.beget.tech/rest/gallery.php')
        return data
    } 
}