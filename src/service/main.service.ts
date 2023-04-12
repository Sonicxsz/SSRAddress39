import axios from "axios"


export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>('http://localhost:3001/api/v1/images')
        return data
    },
  
}