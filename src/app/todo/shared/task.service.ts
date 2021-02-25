import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  todoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) {}

  getList() {
    this.todoList = this.firebasedb.list('task');
    return this.todoList;
  }

  addToList(task: string) {
    this.todoList.push({
      name: task,
      isChecked: false,
      completed: false,
      timeCompleted: null,
    });
  }

  toggleChecked(id: string, flag: boolean) {
    this.todoList.update(id, {
      isChecked: flag,
      completed: flag,
      timeCompleted: new Date(),
    });
  }

  removeTask(id: string) {
    this.todoList.remove(id);
  }
}
