import { Component } from '@angular/core';
import { TaskService } from './shared/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  completed = false;
  task = 0;
  today = new Date();
  constructor(protected tasks: TaskService) {}

  updateTaskNumber(num) {
    this.task = num;
  }

  addTask(taskTitle) {
    this.tasks.addToList(taskTitle.value);
    taskTitle.value = '';
    this.changeTab(false);
  }

  removeTask(id: string) {
    this.tasks.removeTask(id);
  }

  toggle(id: string, isChecked) {
    this.tasks.toggleChecked(id, !isChecked);
  }

  changeTab(val: boolean) {
    this.completed = val;
  }
}
