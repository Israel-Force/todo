import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TaskService } from '../todo/shared/task.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent extends TodoComponent implements OnInit {
  @Output() changeView = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<number>();
  timeCompleted = new Date();
  completedTaskArray: any[];
  constructor(tasks: TaskService) {
    super(tasks);
  }

  ngOnInit(): void {
    this.tasks
      .getList()
      .snapshotChanges()
      .subscribe((items) => {
        this.completedTaskArray = [];
        items.forEach((item) => {
          let task = item.payload.toJSON();
          task['id'] = item.key;
          if (task['completed'] === true) this.completedTaskArray.push(task);
        });
        this.update.emit(this.completedTaskArray.length);
      });
  }

  changeTab() {
    this.changeView.emit(false);
  }

  redoTask(id, isChecked) {
    this.toggle(id, isChecked);
    this.changeTab();
  }
}
