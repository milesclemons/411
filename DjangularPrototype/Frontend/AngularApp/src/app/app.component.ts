import { Component,  OnInit , Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularApp';

  constructor(private service:SharedService ) { }

  /** 
  public username!: string;
  public favfood!: string;
  public foodurljson!: any;
  public foodimage!: string;
  
  

  
  create() {
    
    const usr= this.username;
    const food= this.favfood!;
    
    this.foodurljson = this.service.getFoodPic(this.favfood).subscribe(res=>{
      alert(res.toString())});
    
    const obj = JSON.parse(this.foodurljson);

    this.foodimage = obj.image;
    
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

 

  */


  ngOnInit(): void {

    
  }

  
}
