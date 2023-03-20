import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ReviewComponent } from '../product/review/review.component';
import { SpecificationsComponent } from '../product/specifications/specifications.component';
import { VerifyGuard } from '../product/verify.guard';
import { ProfileComponent } from '../profile/profile.component';


const routes : Routes =[
  {path :'home',component:HomeComponent,title: 'Mysite | home'},
  {path:'products',loadChildren:()=>import('../product/product.module').then(m => m.ProductModule)},
   {path:'profile',component:ProfileComponent, title:'Mysite | profile'},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
