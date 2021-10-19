import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignListComponent } from './sign-list/sign-list.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  { path: '', component: SignListComponent },
  { path: 'detail', component: SignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
