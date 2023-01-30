import {Component, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {StudentService} from "../services/studentservice.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  erreurMessage! : string;
  student! : any;
  constructor(private http:HttpClient,private studentservice:StudentService ) {
  }

  ngOnInit(): void {
    this.studentservice.getStudent().subscribe({
      next:(data)=>{
        this.student=data;
        console.log(data);
      },error:(err)=>{
        this.erreurMessage=err.message;
        console.log(err);
      }
    })
  }



}
