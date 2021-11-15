import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  studentde :any=[]
  constructor(private stu:StudentserviceService) { }

  ngOnInit(): void {
    this.studentde=this.stu.getdetails()
  }

}
