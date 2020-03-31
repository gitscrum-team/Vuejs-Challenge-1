<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col-6">
        <h3 class="font-weight-light text-white">Task Board</h3>
        <div class="small  text-light">Kanban Board</div>
      </div>
      <div class="col-6">
        <ul class="list-users">
          <li v-for="(user, key) in users" :key="key">
            <img
              :title="user.name"
              data-src="holder.js/75x75"
              class="rounded-circle img-thumbnail"
              alt="75x75"
              :src="user.img"
              data-holder-rendered="true"
              style="width: 42px; height: 42px;"
            />
          </li>
          <li>
            <button @click="addState()" class="btn btn-round">
              <i class="fa fa-plus"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="row bg-dark">
      <br />
      <draggable class="column" :list="listState" group="state" @change="log">
        <div
          v-for="(state, index) in listState"
          :key="index"
          class="col-4 activity"
        >
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-uppercase text-truncate py-2">
                <b>{{ state.title }}</b>
              </h6>
              <draggable
                class="list-group"
                :list="state.listTask"
                group="task"
                @change="log"
              >
                <div
                  class="list-group-item"
                  v-for="(element, key) in state.listTask"
                  :key="key"
                >
                  <div :class="'card draggable shadow-sm' + element.state">
                    <div class="card-body p-2">
                      <div class="card-title">
                        <div
                          style="width: 30px; height: 30px; position:absolute;"
                          class="rounded-circle left-right"
                        >
                          <i
                            @click="remover(index, key)"
                            style="cursor:pointer"
                            class="fa fa-trash"
                          ></i>
                        </div>
                        <img
                          :src="element.imgUser.img"
                          :title="element.imgUser.name"
                          style="width: 30px; height: 30px;"
                          class="rounded-circle float-right img-thumbnail"
                        />
                        <a href="" class="text-white lead font-weight-light">
                          {{ element.title }}
                        </a>
                      </div>
                      <p>{{ element.text }}</p>
                      <div class="card-footer text-muted">
                        <button
                          @click="edite(index, key)"
                          class="btn btn-light btn-sm"
                        >
                          Editar</button
                        >&nbsp;
                        <span class="text-white">{{
                          formateDate(element.time)
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
            <div class="card-footer text-muted">
              <i @click="add(state)" class="fa fa-plus-circle"></i>
            </div>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";
import draggable from "vuedraggable";
import { Task, State } from "./module/StateTask.js";
export default {
  components: {
    draggable
  },
  data() {
    return {
      //statel: new State("TO DO"),
      listState: [new State("TO DO")],
      users: [
        { name: "Clarie", img: require("@/assets/img/avatar-female-1.jpg") },
        { name: "Marry", img: require("@/assets/img/avatar-female-2.jpg") },
        { name: "Jessy", img: require("@/assets/img/avatar-female-3.jpg") },
        { name: "Julie", img: require("@/assets/img/avatar-female-4.jpg") },
        { name: "Simmon", img: require("@/assets/img/avatar-male-1.jpg") },
        { name: "Boby", img: require("@/assets/img/avatar-male-2.jpg") },
        { name: "Pedro", img: require("@/assets/img/avatar-male-3.jpg") },
        { name: "Dan", img: require("@/assets/img/avatar-male-4.jpg") }
      ],
      taskState: [
        { label: "inicio", value: "text-white bg-success" },
        { label: "espera", value: "text-white bg-warning" },
        { label: "parado", value: "text-white bg-danger" }
      ]
    };
  },
  methods: {
    ...mapActions({
      setState: "TaskBoard/setState"
    }),
    ...mapGetters({
      getListStates: "TaskBoard/getListStates"
    }),
    addState() {
      let self = this;
      Swal.fire({
        title: "Adicionar",
        input: "text",
        inputPlaceholder: ""
      }).then(rs => {
        if (rs.value || rs.value != "") {
          self.listState.push(new State(rs.value));
          self.setState(self.listState);
        }
        if (rs.value == "") {
          self.tituloObrigatorio();
        }
      });
    },
    tituloObrigatorio() {
      Swal.fire({
        title: "Alerta",
        text: "Titulo Obrigatorio"
      });
    },
    add(state) {
      let self = this;
      let options = "";
      self.users.forEach((o, i) => {
        options += "<option value='" + i + "'>" + o.name + "</option>";
      });
      let optionsState = "";
      self.taskState.forEach(o => {
        optionsState +=
          "<option value='" + o.value + "'>" + o.label + "</option>";
      });
      Swal.fire({
        title: "Adicionar",
        text: "deseja adicionar nova tarefa",
        type: "success",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success mr1",
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmar",
        buttonsStyling: false,
        html:
          '<select id="swal-select1" class="swal2-input">' +
          options +
          "</select>" +
          '<input id="swal-input1" placeholder="Titulo" class="swal2-input">' +
          '<textarea id="swal-input2" class="swal2-input" ></textarea>' +
          '<select id="swal-select2" class="swal2-input">' +
          optionsState +
          "</select>",
        focusConfirm: false,
        preConfirm: () => {
          let titulo = document.getElementById("swal-input1").value;
          if (titulo != "") {
            let select = document.getElementById("swal-select1").value;
            let user = self.users[select];
            state.listTask.push(
              new Task(
                user,
                titulo,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-select2").value
              )
            );
            self.setState(self.listState);
          } else {
            self.tituloObrigatorio();
          }
        }
      });
    },
    remover(stateId, userId) {
      let self = this;
      let task = self.listState[stateId].listTask;
      task.splice(userId, 1);
      self.listState[stateId].listTask = task;
      self.setState(self.listState);
    },
    edite(stateId, userId) {
      try {
        let self = this;
        let task = self.listState[stateId].listTask[userId];
        let options = "";
        self.users.forEach((o, i) => {
          options +=
            "<option  " +
            (task.imgUser.name == o.name ? "selected" : "") +
            " value='" +
            i +
            "'>" +
            o.name +
            "</option>";
        });
        let optionsState = "";
        self.taskState.forEach(o => {
          optionsState +=
            "<option  " +
            (task.state == o.value ? "selected" : "") +
            " value='" +
            o.value +
            "'>" +
            o.label +
            "</option>";
        });
        let content =
          '<select id="swal-select1" class="swal2-input">' +
          options +
          "</select>" +
          '<input id="swal-input1" placeholder="Titulo" value="' +
          task.title +
          '" class="swal2-input">' +
          '<textarea id="swal-input2" class="swal2-input" >' +
          task.text +
          "</textarea>" +
          '<select id="swal-select2" class="swal2-input">' +
          optionsState +
          "</select>";
        Swal.fire({
          // position: 'top-end',
          title: "Editar",
          text: "deseja adicionar nova tarefa",
          type: "success",
          showCancelButton: true,
          confirmButtonClass: "btn btn-success mr1",
          cancelButtonClass: "btn btn-danger",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Confirmar",
          buttonsStyling: false,
          html: content,
          focusConfirm: false,
          preConfirm: () => {
            let titulo = document.getElementById("swal-input1").value;
            if (titulo != "") {
              let select = document.getElementById("swal-select1").value;
              let newUser = self.users[select];
              task.imgUser = newUser;
              task.title = titulo;
              task.text = document.getElementById("swal-input2").value;
              task.state = document.getElementById("swal-select2").value;
              self.listState[stateId].listTask[userId] = task;
              self.setState(self.listState);
            } else {
              self.tituloObrigatorio();
            }
          }
          // footer: "teste"
        });
      } catch (err) {
        console.error(err);
      }
    },
    log(evt) {
      let self = this;
      self.setState(self.listState);
      console.log(evt);
    },
    formateDate(time) {
      return new Date(time).toLocaleDateString("pt-Br");
    }
  },
  mounted() {
    let listKanban = this.getListStates();
    if (listKanban.length > 0) {
      this.listState = listKanban;
    }
  }
};
</script>
<style lang="scss">
.div-etiqueta {
  min-width: 50px;
}

.card.draggable {
  margin-bottom: 1rem;
  cursor: grab;
}

.column {
  width: 280vw;
  position: relative;
  display: flex;
}

.droppable {
  background-color: var(--success);
  min-height: 120px;
  margin-bottom: 1rem;
}

.list-group {
  width: 100%;
}

.list-group-item {
  border: 0px solid rgba(0, 0, 0, 0.125) !important;
}

$sizes: 30px, 60px, 90px, 120px, 150px, 180px, 210px;

.list-users {
  display: flex;
  list-style: none;

  li {
    position: absolute;
    left: 0px;

    @for $i from 1 through 7 {
      &:nth-child(#{$i + 1}) {
        left: 30px * $i;
      }
    }

    &:nth-child(9) {
      top: 2%;
      left: 300px;
    }

    button {
      background-color: #6c757d;
      border-radius: 20px;
    }
  }
}
</style>
