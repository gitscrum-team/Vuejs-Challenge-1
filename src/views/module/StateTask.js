export const Task = class {
  constructor(
    imgUser = "",
    title = "",
    text = "",
    state = "text-white bg-success",
    time = new Date()
  ) {
    this.imgUser = imgUser;
    this.title = title;
    this.text = text;
    this.state = state;
    this.time = time;
  }
};

export const State = class {
  constructor(title = "") {
    this.title = title;
    this.listTask = new Array();
  }

  addTask(task = new Task()) {
    this.listTask.push(task);
  }
};
