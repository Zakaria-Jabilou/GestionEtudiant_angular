import {Component, OnInit} from '@angular/core';
import {AbsenceService} from "../services/absence.service";

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit{
private absence : any;
  constructor(private sup:AbsenceService) {
  }

  ngOnInit(): void {
    this.sup.getAbsence().subscribe(data=> {
      this.absence = data;
      console.log(this.absence);
    },err=>{
      console.log(err);
    })
  }

}
