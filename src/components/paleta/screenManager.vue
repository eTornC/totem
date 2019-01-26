<template>
  <div id="screenManager">
    <div class="row">
      <div class="col-2 sidebar">
        <div class="sidenav">
          <br>
          <button type="button"  class="btn btn-primary boton">Add Colum</button>
          <button type="button" class="btn btn-primary boton">Add row</button>
          <div v-on:click="get_posision" row="0" column="0">prova</div>
        </div>
      </div>
      <div v-html="html" class="col-10" id="show">{{html}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "screenManager",

  data() {
    return {
      msg:'hola',
      html: null,
      select: {
        row:null,
        column:null,
      },
      pantalla_layout: {
        rows: [
          {
            columns: [
              {
                id: "store1",
                text: "col 10",
                width: 12,
                color: "green",
                row: 0,
                col: 0
              }
            ]
          }
        ]
      }
    };
  },
  created() {
    this.mount();
  },
  methods: {
    get_posision(event) {
      console.log(event.target); // Output : Select span|i|a element
      this.select.row = event.target.getAttribute("row");
      this.select.column = event.target.getAttribute("column");
      console.log(this.select.row + ", "+ this.select.column ); 
    },
    createRow(r) {
      return (
        '<div class="row">' + '{{msg}}'+
        this.parse(r) +
        "</div>"
      );
    },
    createColumn(c) {
      return (
        '<div v-on:click="get_posision" style="background-color : ' +
        c.color +
        "; height :400px" +
        '" class="col-' +
        c.width +
        '" id="' +
        c.id +
         '" row="' +
        c.row +
        '" column="' +
        c.col +
        '">' +
        (c.text ? c.text : "") +
        this.parse(c) +
        "</div>"
      );
    },
    parse(s) {
      let S = "";
      if (s.rows) {
        for (let i in s.rows) {
          S += this.createRow(s.rows[i]);
        }
      }
      if (s.columns) {
        for (let i in s.columns) {
          S += this.createColumn(s.columns[i]);
        }
      }
      return S;
    },
    mount() {
      this.html = this.parse(this.pantalla_layout);
    },
    addevent() {
      $(".screen-row").attr('v-on:click'+'get_class');
      $(".screen-column").html('v-on:click'+'get_class');
    }
  }
};
</script>

<style>
.row {
  height: 900px;
  border: 1px solid #eee;
}
.sidebar {
  border: 1px solid #eee;
}

.boton {
  width: 200px;
  margin: 10px;
}
</style>
