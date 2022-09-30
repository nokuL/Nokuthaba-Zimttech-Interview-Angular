import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../models/userMOdel';
import { NewUserServiceService } from '../_services/new-user-service.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
  
})
export class NewUserComponent implements OnInit {

  constructor(
    private userService: NewUserServiceService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  DateSelected : any
  user : UserModel

  fetchDateSelected(){
    console.log("Date selected by user is "+ this.DateSelected)

  }



  ngOnInit(): void {
  

  }


  registerUser(newUserForm: NgForm) {
    this.userService.registerNewUser(newUserForm.value).subscribe(
      (response: any) => {
        const userMOdel: UserModel = response
        userMOdel.userFirstName = response.userFirstName
        console.log("Response LAST NAME >>>>>>>>>> " +response.userLastName)

        this.userAuthService.setRoles(response.role);
        this.userAuthService.setToken(response.jwtToken);
        console.log("USER MODEL BEFORE PARSING   "+userMOdel.userFirstName )
        console.log("USER MODEL BEFORE PARSING   "+userMOdel.userLastName )

        this.router.navigate(['/newUserOverview'], {queryParams:{firstName:response.userFirstName , lastName: response.userLastName, userName: response.userName }});




       // const role = response.role[0].roleName;
       // if (role === 'Admin') {
        //  this.router.navigate(['/admin']);
       // } else {
        //  this.router.navigate(['/user']);
        //}
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

