<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Notes</div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="note in notes" :key="note.id">
              <td>{{ note.id }}</td>
              <td>{{ note.title }}</td>
              <td>{{ note.content }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <router-link
                    :to="{ name: 'edit', params: { id: note.id } }"
                    class="btn btn-success"
                    >Edit</router-link
                  >
                  <button
                    type="button"
                    v-on:click="deleteNote(note.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 class="card-title"></h4>
      <p class="card-text"></p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      notes: {},
    };
  },
  created() {
    this.showNotes();
  },
  methods: {
    async showNotes() {
      await fetch("http://your_backend_host:your_backend_port")
        .then((res) => res.json())
        .then((data) => {
          this.notes = data;
        })
        .catch(console.error);
    },

    deleteNote(id) {
      fetch("http://your_backend_host:your_backend_port" + id, {
        method: "DELETE",
      }).then((res) => res.json());
      this.$router.push("/show");
    },
  },
};
</script>
