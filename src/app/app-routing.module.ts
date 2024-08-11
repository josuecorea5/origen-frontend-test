import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFootageComponent } from './components/list-footage/list-footage.component';
import { DetailFootageComponent } from './components/detail-footage/detail-footage.component';

const routes: Routes = [
  {
    path: '',
    component: ListFootageComponent
  },
  {
    path: 'details/:id',
    component: DetailFootageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
