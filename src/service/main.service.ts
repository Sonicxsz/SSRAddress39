import axios from "axios"


export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>('https://server.xn--39-6kcqf9di.xn--p1ai/api/v1/images')
        return data
    },
  
}