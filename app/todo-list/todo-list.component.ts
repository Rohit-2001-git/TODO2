import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  studentli:any=[]

  constructor(private stu:StudentserviceService) { }

  ngOnInit(): void {
  this.studentli=this.stu.getdetails()
  }

}
