<template>
  <div 
    class="cont-form">
        <v-text-field
        v-model="name"
        label="Complete Name"
        required
        ></v-text-field>
        <v-switch
            v-model="check"
            label="avaliable"
            hide-details
        ></v-switch>
        <v-btn @click="sendPark(listPark.listSites.length+1,this.name, this.check)">
            Send
        </v-btn>
  </div>
</template>

<script>
import axios from 'axios';
import {useParking} from '../../store/parkingSites'
export default {
    data: ()=>({
        name: "",
        check: Boolean,
    }),
    setup(){
        const listPark = useParking();
        const sendPark = async (numb, name, check)=>{
            if(check === true){
                check = true
            } else{
                check = false
            }
        const url = 'https://parking-back-end.onrender.com/sites/park'
        const data = {
            number: numb,
            name: name,
            avaliable: check,
            date: {
                hour:`${new Date().getHours()}:${new Date().getMinutes()}`,
                fecha: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
                }
        }
        const post = await axios.post( url , data);
        return post
    }
    return{
        sendPark,listPark
    }
    }
}
</script>

<style scoped>
.cont-form{
    margin: 3vw auto;
    width: 50vw;
}
</style>