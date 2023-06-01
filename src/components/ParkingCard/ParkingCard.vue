
<template>
  <ul class="cartCont">
    <li v-for="site in listPark.listSites"
        :key="site.id"
        class="cartSite">
        <v-btn
            class="crossDelete"
            @click="delettePark(site.number)">
                X
        </v-btn>
        <p class="number">
            {{site.number}}
        </p>
        <div v-if="site.avaliable" class="free">
            Free
        </div>
        <div v-else class="Busy">
            {{site.name.charAt(0).toUpperCase()}}{{ site.name.slice(1).toLowerCase()}}
        </div>
        <v-btn :to="{name:'update-comp', params: {id:site.number} }" class="btnUpdate">UPDATE</v-btn>
        <p class="dateText">{{site.date.hour}}</p>
        <p class="dateText">{{site.date.fecha}}</p>
    </li>
</ul>
</template>

<script>
import axios from 'axios';
import {useParking} from '../../store/parkingSites';
export default {
    setup() {
        const listPark = useParking();
        listPark.getData()
        const delettePark = async (idPark) => {
            const confirmar = confirm('¿Seguro?');
            if (confirmar) {
                try {
                    const url = 'https://parking-back-end.onrender.com/sites/park/' + idPark;
                    const del = await axios.delete(url)
                    listPark.getData();
                    return del
                } catch {
                    alert('no conecta');
                }
            }
        }
        return {
          listPark,
          delettePark,
        }
    }
}
</script>

<style scoped>
.cartCont {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
  grid-gap: 2vw;
  padding: 5vw;
  list-style: none;
}

.cartSite {
  text-align: center;
  padding: 0.5vw 0vw;
  background-color: rgba(13, 13, 46, 0.527);
  border-radius: 0.5vw;
  color: white;
}

.dateText {
  margin: 0.5vw auto;
  font-size: 1.3vw;
}

.crossDelete {
  width: 1vw;
  height: 2vw;
  font-size: 1vw;
  background-color: rgb(190, 7, 7);
  margin: 0vw 1vw;
  padding: 0;
}

.number {
  font-size: 4vw;
  font-weight: 600;
}

.status {
  font-size: 1.5vw;
  padding: 0.5vw;
}

.free {
  background-color: green;
}

.busy {
  background-color: red;
}

.btnUpdate {
  font-size: 1.2vw;
  padding: 0.5vw;
  margin-top: 0.5vw;
}
</style>