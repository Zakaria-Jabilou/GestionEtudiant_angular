import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {AbsenceComponent} from "./absence/absence.component";

const routes: Routes = [
  {
    path:"student",component:StudentComponent
  },
  {
    path:"absence",component:AbsenceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
