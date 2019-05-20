<template>
  <div v-if="store" class="turn_list">
    <div class="store" @click="normalTurn(store)">
      <img :src="urls.host + urls.routes.prefix + store.photo_path" class="img-card md-image">
      <h1 class="mb-3 mt-3 store__titel">{{ store.name }}</h1>

      <!--div class="store__footer">
        <h3 class="store_queue_person">Hi ha * persones a la cua</h3>
        <div class="time_content">
          <img class="store_queue_time_icon" src="../../assets/time_icon.png" alt="time">
          <h3 class="store_queue_time">* min</h3>
        </div>
      </div-->
    </div>
  </div>
</template>


<script>
import urls from "../../api/config.js";
import axios from "axios";

export default {
  props: {
    storeId: Number
  },
  data() {
    return {
      urls,
      actualTurn: 0,
      resfescar: null,
      resfescarWaiting: null,
      store: null,
      turnWaiting: []
    };
  },
  methods: {
    getStore() {
      const url =
        urls.host + urls.routes.prefix + urls.routes.store + "/" + this.storeId;
      console.log(url);
      axios
        .get(url)
        .then(res => {
          this.store = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    normalTurn(store) {
      const url =
        urls.host +
        urls.routes.prefix +
        urls.routes.store +
        "/" +
        store.id +
        "/turn";
      console.log(url);
      axios
        .post(url)
        .then(res => {
          console.log(res);

          this.$swal({
            type: "success",
            title: "Imprimir tiquet T " + res.data.turn.number,
            showConfirmButton: false,
            timer: 2500
          });
          console.log("Imprimir tiquet T " + res.data.turn.number);
          this.imprimirTicket(store.name, res.data.turn.number);
          //this.$swal('Imprimir tiquet' + JSON.stringify(res.data));
        })
        .catch(err => {
          this.$swal("Failako");
        });
    },
    imprimirTicket(storeName, number) {
      console.log("store nombre= " + storeName + ", numbre=" + number);
      const url =
        urls.impresoraHost + urls.routes.print + "/" + storeName + "/" + number;
      console.log("print Host: " + url);

      axios
        .post(url)
        .then(res => {
          console.log(res);
          //this.$swal('Imprimir tiquet' + JSON.stringify(res.data));
        })
        .catch(err => {
          this.$swal("Impresora Error");
        });
    }
  },
  computed: {
    computedActualTurn() {
      switch (this.actualTurn.type) {
        case "VIP":
          return "V" + ("0" + this.actualTurn.number).slice(-2);
        case "NORMAL":
          return "T" + ("0" + this.actualTurn.number).slice(-2);
        case "MOBILE":
          return "M" + ("0" + this.actualTurn.number).slice(-2);
        default:
          return "NO TURNS";
      }
    }
  },
  created() {
    this.getStore();
    this.resfescar = null;
    this.resfescarWaiting = null;

    //this.resfescar = setInterval(this.updateActualTurn, 1000);
    //this.resfescarWaiting = setInterval(this.updateTurnWaiting, 1000);
  }
};
</script>

<style scoped>
.main {
  height: 100%;
}
</style>


<style>
.col {
  padding: 0 !important;
}
.row {
  margin: 0;
}
.turn_list {
  background-color: #eee;
  font-family: sans-serif;
  text-align: left;
}

/* store name*/
.turn_list .store_name_content {
  height: 70px;
  width: 100%;
  display: flex;
}
.turn_list .store_name {
  background-color: #aaa;
  width: 100%;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  border-radius: 5px;
}

/* turn list*/
.turn_list .store_turn_content {
  height: 85%;
  width: 100%;
  display: flex;
}
.turn_list .store_turn {
  width: 100%;
  font-size: 3rem;
}
.turn_list .store_turn ul {
  list-style: none;
  padding: 0px 20px;
  margin: 0;
}
.turn_list .store_turn ul li {
  border-bottom: solid 1px black;
  color: grey;
  margin: 0;
}
.actual {
  font-size: 6rem;
  color: black;
}
</style>
<style>
.flexxx {
  display: flex;
  flex-wrap: wrap;
}

.header {
  position: relative;
  width: 100%;
  height: 100px;
  color: #5e6270;
}
.logo {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
}
.header__titel {
  font-size: 4em;
  margin: 30px auto;
}

.store {
  position: relative;
  width: 450px;
  height: 300px;
  border-radius: 3px;
  background-color: #eee;
}
.store__titel {
  color: #4c5261;
  font-size: 3.5em;
  font-weight: 400;
  text-align: center;
}

.store h1 {
  margin: 0 !important;
}

.img-card {
  height: 80%;
  width: 100%;
  margin: auto;
}

.store__footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 60px;
  color: #6a6e71;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.store_queue_person {
  font-size: 1.5em;
  width: 60%;
  margin-left: 20px;
  justify-self: flex-start;
}

.time_content {
  display: flex;
  align-items: center;
  width: 25%;
}

.store_queue_time_icon {
  width: 35px;
}
.store_queue_time {
  margin: 0;
  font-size: 1.5em;
}
.boton_Torn {
  position: absolute;
  bottom: 60px;
  width: 100%;
  margin-left: 0px;
}
</style>
