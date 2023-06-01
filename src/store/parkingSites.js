import { defineStore } from 'pinia';
import axios from 'axios';

export const useParking = defineStore('parksApi',{
  state: ()=>({
    listSites: {}
  }),
  actions:{
    async getData (){
          const url = "https://parking-back-end.onrender.com/sites/park/";
          const r = await axios.get(url);
          this.listSites = await r.data;
    }
  }
})