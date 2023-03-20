import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  imgstyle={
    'width.px':'200',
    'height.px':'200'
  };




  products : Product[] =[]

constructor(private pro_ser : ProductService){}
ngOnInit(): void {
  this.pro_ser.getProducts().subscribe(products =>
    {
      this.products=products;
      this.filtered=products;
    })
}
addtocart(event:any,product:any){
  //console.log(event,product);
  //console.log("items added");
  this.pro_ser.increment();
}


private _filter='';
get filter():string{
  return this._filter;
}
set filter(fb:string){
  this._filter=fb;
  this.filterproducts(this._filter);
}
filtered : Product[]=this.products;
showimage = true;
filterproducts(searchvalue:string){
  this.filtered=this.products.filter(product =>{
    return product.name.toLowerCase().includes(searchvalue.toLowerCase());
  }
  )

}

onRatingClicked(rating:number):void{
  alert(`you clicked ${rating}`);
}

}
