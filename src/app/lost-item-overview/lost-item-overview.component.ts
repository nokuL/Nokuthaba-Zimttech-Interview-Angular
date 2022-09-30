import { Component, OnInit } from '@angular/core';
import { LostItemModel } from '../models/LostItem';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lost-item-overview',
  templateUrl: './lost-item-overview.component.html',
  styleUrls: ['./lost-item-overview.component.css']
})
export class LostItemOverviewComponent implements OnInit {

  constructor(
    private route : ActivatedRoute

  ) { }

  lostItem : LostItemModel

  ngOnInit(): void {
    this.lostItem = new LostItemModel()
    this.route.queryParams.subscribe((params : any)=>{
    
            this.lostItem.userName = params.userName
            this.lostItem.itemDescription = params.itemDescription
            this.lostItem.dateOfLoss = params.dateOfLoss
            this.lostItem.province = params.province

    }
    )

  }
}
