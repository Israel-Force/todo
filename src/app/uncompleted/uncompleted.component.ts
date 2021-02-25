import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TaskService } from '../todo/shared/task.service';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
  styleUrls: ['./uncompleted.component.scss'],
})
export class UncompletedComponent extends TodoComponent implements OnInit {
  @Output() update = new EventEmitter<number>();
  taskArray: any[];
  constructor(tasks: TaskService) {
    super(tasks);
  }

  ngOnInit(): void {
    this.tasks
      .getList()
      .snapshotChanges()
      .subscribe((items) => {
        this.taskArray = [];
        items.forEach((item) => {
          let task = item.payload.toJSON();
          task['id'] = item.key;
          if (task['completed'] === false) this.taskArray.push(task);
        });
        this.update.emit(this.taskArray.length);
      });
  }
}
