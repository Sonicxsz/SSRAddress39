import axios from "axios"


export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>('https://90.156.209.94:3001/api/v1/images')
        return data
    },
  
}