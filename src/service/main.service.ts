import { func } from "@/common/hooks/withMessage"
import { API } from "@/common/config/api"
import axios from "axios"

export const mainService = {
    async getImages(){
        const {data} = await axios.get<string[]>(API.images)
        return data
    },
    async  formSend<T extends object>(data: T, load:func, err:func, succ:func){
        load()
        const response = await fetch(API.mail, {
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
