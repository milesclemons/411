import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private service:SharedService) { }

  public username!: string;
  public favfood!: string;
  public foodurljson!: any;
  public foodimage!: string;

  
  
  create() {
    /** 
    const usr= this.username;
    const food= this.favfood!;
    
    this.foodurljson = this.service.getFoodPic(this.favfood).subscribe(res=>{
      alert(res.toString())});
    
    const obj = JSON.parse(this.foodurljson);

    this.foodimage = obj.image;
    */
    this.addEmployee();
    

  }

  addEmployee(){
    this.foodurljson = this.service.getFoodPic(this.favfood);
    
    

    var val = {EmployeeName:this.username,
               EmployeeFood:this.favfood,
               EmployeeFoodUrl:this.foodimage};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }


  ngOnInit(): void {
  }

}
