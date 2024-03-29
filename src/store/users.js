import axios from 'axios';
import { defineStore } from 'pinia';

export const useUsers = defineStore('useUser', {
    state:()=>({
        listUsers: []
    }),
    actions:{
        async getUsers(){
            try {
            const url = "https://parking-back-end.onrender.com/";
            const rData = await axios.get(url);
            this.listUsers = rData.data;
            } catch{
                err => console.log(err);
            }
        },
        addUser: async (naMe, dNi, aGe, pHone, eMail)=>{
            try {
                const url = "https://parking-back-end.onrender.com/send";
                const data = {
                    name: naMe,
                    age: aGe,
                    dni: dNi,
                    phone: pHone,
                    mail: eMail
                };
                const post = await axios.post(url,data);
                return post
            }catch {
                err => console.log(err);
            }
        }
    }
})