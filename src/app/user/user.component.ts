import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../models/userMOdel';
import { ItemsService } from '../items.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message;
  constructor(private itemsService: ItemsService,   
      private route : ActivatedRoute,
      private router: Router

    ) { }

    userName : string
    firstName : string
  ngOnInit(): void {
    this.route.queryParams.subscribe((params : any)=>{
      console.log("............ USER FIRST NAME IN NET PAGE" + params.firstName)
    
      this.userName = params.firstName
      this.firstName = params.lastName

}
)
  }



  //this.lostItem.userName = params.userName
       //     this.lostItem.itemDescription = params.itemDescription
         //   this.lostItem.dateOfLoss = params.dateOfLoss
         //   this.lostItem.province 



  recordLostItem(lostItemForm: NgForm) {
    lostItemForm.value.userName = this.userName;
    console.log("USER NAME HERE HERE" + lostItemForm.value.userName)
    this.itemsService.recordLostItem(lostItemForm.value).subscribe(
      (response: any) => {
        const userMOdel: UserModel = response
        userMOdel.userFirstName = response.userFirstName
    

        this.router.navigate(['/lostItemOverview'], {queryParams:{userName:response.userName , itemDescription: response.itemDescription
          , dateOfLoss: response.dateOfLoss }});




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
