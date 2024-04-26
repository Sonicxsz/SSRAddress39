import { func } from "@/common/hooks/withMessage"
import axios from "axios"

// http://localhost:3001/api/v1/items
// https://server.xn--39-6kcqf9di.xn--p1ai/api/v1/images
// https://server.xn--39-6kcqf9di.xn--p1ai/mail
export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>('https://server.xn--39-6kcqf9di.xn--p1ai/api/v1/images')
        return data
    },
    async  formSend<T extends object>(data: T, load:func, err:func, succ:func){
        load()
        const response = await fetch('http://localhost:3001/mail', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        })
        if(response.status !== 200){ 
          err()
        }
        else{
          succ()
        }
    }
}
