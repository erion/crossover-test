import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ProjectDetail } from '../heroes/hero-details/hero-details.component';
import { ProjectsListComponent } from '../projects/projects-list.component';
//import { DashboardComponent } from '../heroes/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsListComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: ProjectDetail }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
