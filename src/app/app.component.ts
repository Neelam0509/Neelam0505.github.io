import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "./services/product.service";

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
})
 export class AppComponent implements OnInit{
  title ="mystore"

  primary=true;

  themecolor={
    'bg-purple':true,
    'bg-primary':false
  };

  toggletheme()
  {
    this.primary= !this.primary;

    this.themecolor = {
      'bg-purple': this.primary,
      'bg-primary': !this.primary

    };
  }

  cartCount=0;
  constructor(private pro_ser : ProductService){}
  ngOnInit(): void {
    this.pro_ser.cartCount$.subscribe(count =>{
      console.log(count);
      this.cartCount = count;
    })
  }

  getcartCount():void{
    //this.cartCount=this.pro_ser.cartCount;

  }

 }
