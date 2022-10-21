import React from "react";
import ReactDOM from "react-dom";
import { Server, Model } from "miragejs";

import App from './App';

new Server({
  models: {
    toDo: Model,
  },
  seeds(server) {
    server.create("toDo", {
      title: "Meeting",
      description: "Meeting about frontend",
      status: false,
      date: new Date()
    });
    server.create("toDo", {
      title: "Coding",
      description: "Implementation of animated carousel",
      status: false,
      date: new Date()
    });
    server.create("toDo", {
      title: "Software Testing",
      description: "Login and logout functionality test",
      status: false,
      date: new Date()
    });
  },
  routes() {
    this.namespace = "api";
    this.timing = 2000; // milliseconds

    this.get("/toDo", (schema) => {
      return schema.toDos.all();
    });
    this.post("/toDo", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.toDos.create(attrs);
    });

    this.patch("/toDo/:id", (schema, request) => {
      let id = request.params.id;
      let toDo = JSON.parse(request.requestBody);
      return schema.db.toDos.update(id, toDo);
    });

    this.delete("/toDo/:id", (schema, request) => {
      let id = request.params.id;
      return schema.toDos.find(id).destroy();
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);