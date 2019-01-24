<template>
  <div class="py-5 px-5 flexxx justify-content-center">
    <div class="header">
      <img class="logo" src="../assets/caprabo_logo.png" alt="caprabo">
      <h1 class="header__titel">A quina parada vols demanar torn?</h1>
    </div>
    <template v-for="store in stores">
      <div :key="store.name" class="store my-5 mx-5" @click="normalTurn(store)">
        <img :src="urls.host + urls.routes.prefix + store.photopath" class="img-card md-image">
        <h1 class="mb-3 mt-3 store__titel">{{ store.name }}</h1>
        <!--
        <div class="boton_Torn row justify-content-center">
          <div class="mx-2">
            <button class="btn btn-primary" @click="normalTurn(store)">Demanar Turn</button>
          </div>
        </div>
        -->
        <div class="store__footer">
          <h3 class="store_queue_person">Hi ha * persones a la cua</h3>
          <div class="time_content">
            <img class="store_queue_time_icon" src="../assets/time_icon.png" alt="time">
            <h3 class="store_queue_time">* min</h3>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import urls from "../api/config";

import axios from "axios";

export default {
  components: {},
  data() {
    return {
      stores: [],
      urls: urls,
      showTurnsModal: false,
      storeModal: {}
    };
  },
  created() {
    const url = urls.host + urls.routes.prefix + urls.routes.stores;
    axios
      .get(url)
      .then(res => {
        this.stores = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    showTurnsListModal(store) {
      this.storeModal = store;
      this.showTurnsModal = true;
    },
    closeModal() {
      this.showTurnsModal = false;
    },
    normalTurn(store) {
      const url =
        urls.host +
        urls.routes.prefix +
        urls.routes.store +
        "/" +
        store.id +
        "/turn";

      axios
        .post(url)
        .then(res => {
          this.$swal({
            type: "success",
            title: "Imprimir tiquet T" + res.data.number,
            showConfirmButton: false,
            timer: 2500
          });
          console.log("Imprimir tiquet T" + res.data.number);
          //this.$swal('Imprimir tiquet' + JSON.stringify(res.data));
        })
        .catch(err => {
          this.$swal("Failako");
        });
    }
  }
};
</script>
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
  height: 400px;
  border-radius: 3px;
  background-color: #eee;
}
.store__titel {
  color: #4c5261;
  font-size: 3.5em;
  font-weight: 400;
}

.img-card {
  height: 68%;
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
  margin: 0;
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