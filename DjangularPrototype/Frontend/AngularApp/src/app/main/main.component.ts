import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import { CreateAccountComponent } from '../create-account/create-account.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:SharedService) { }

  

  User:any[] = [];

  ngOnInit(): void {
    this.displayUser();
    //this.CurrentUser = this.User[-1];
  }


  displayUser(){
    this.service.getEmpList().subscribe(data=>{
      this.User=data;
    })

    var val = this.User[-1];

    
  }
  
}
