import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 product$!: Observable<Product>;
 id!: number;
 constructor(private route : ActivatedRoute,
    private ps : ProductService,
    private router : Router
 ){}
  ngOnInit(): void {
   /*const id=Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
if(!isNaN(id)){
      this.product$ = this.ps.getProductsById(id);
    }*/
    this.route.paramMap.subscribe(params =>{
      this.id=Number(params.get('id'));
      console.log(this.id);
        if(!isNaN(this.id)){
      this.product$ = this.ps.getProductsById(this.id);
    }
    })
  }
  goBack():void{
    setTimeout(()=>{
      this.router.navigate(['/products']);
    },2000)
}
nextItem():void{
  this.id += 1;
  this.router.navigate(['/products',this.id]);
}
prevItem():void{
  this.id -= 1;
  this.router.navigate(['/products',this.id]);
}
}

