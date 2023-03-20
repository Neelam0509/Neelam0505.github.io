import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ReviewComponent } from '../product/review/review.component';
import { SpecificationsComponent } from '../product/specifications/specifications.component';
import { VerifyGuard } from '../product/verify.guard';



const routes : Routes =[

  {path :'',component:ProductListComponent,title:' Mysite | products'},
  {path:':id',component:ProductDetailComponent,
  canActivate:[VerifyGuard],
  children:[
    {path:'review',component:ReviewComponent},
    {path:'specifications',component:SpecificationsComponent}
  ],
  title:'Mysite| pro_detail'},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class ProductRoutingModule { }
