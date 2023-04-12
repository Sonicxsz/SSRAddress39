import axios from "axios"


export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>('http://45.12.236.249:3001/api/v1/images')
        return data
    },
  
}