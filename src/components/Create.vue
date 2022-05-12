<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Create Note</div>
      <div class="card-body">
        <form v-on:submit.prevent="addNote">
          <div class="form-group">
            <label for="title">Title:</label>
            <input
              v-model="note.title"
              type="text"
              name="title"
              id="title"
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
            />
            <small id="helpId" class="text-muted">Title</small>
          </div>
          <div class="form-group">
            <label for="body">Content</label>
            <input
              v-model="note.content"
              type="text"
              class="form-control"
              name="body"
              id="body"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted">Content</small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Add</button>
            <router-link :to="{ name: 'show' }" class="btn btn-warning"
              >Cancel</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {},
    };
  },
  methods: {
    addNote() {
      let saveNote = { title: this.note.title, content: this.note.content };
      fetch("http://your_backend_host:your_backend_port", {
        method: "POST",
        body: JSON.stringify(saveNote),
      })
        .then((res) => res.json())
        .then((data) => {
          this.$router.push("/show");
        });
    },
  },
};
</script>

