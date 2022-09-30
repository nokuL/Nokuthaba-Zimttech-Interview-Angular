import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LostItemOverviewComponent } from './lost-item-overview/lost-item-overview.component';
import { NewUserOverviewComponent } from './new-user-overview/new-user-overview.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {path : 'newUser' , component: NewUserComponent},
  {path:  'newUserOverview', component: NewUserOverviewComponent},
  {path: 'lostItemOverview', component: LostItemOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
