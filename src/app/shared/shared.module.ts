import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Convert } from './convert.pipe';
import { StarComponent } from './star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Convert,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
 exports : [
  Convert,
   StarComponent,
   FormsModule,
   ReactiveFormsModule

 ]
})
export class SharedModule { }
