import { Injectable } from '@angular/core';
import { Pipe } from '@angular/core';
import { BehaviorSubject, catchError, delay, filter, interval, map, max, min, Observable, of, retry, Subject, Subscription } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Product } from '../product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {




  value$ = of(1,2,3);
  //to create own observalble
  myobserve$ = new Observable(observer =>
    {
      observer.next(1);
      observer.next(2);
      observer.complete();
      observer.next('hello');
      observer.next([2,3,4]);
    })
    numbers$ = of(1,2,3,4,5);
myinterval$ = interval(2000);sub$! : Subscription;subject$ = new BehaviorSubject<number>(0);//creating subject
private cartCount=0;
   cartCount$ = new BehaviorSubject<number>(0);
  constructor(private http : HttpClient) {
    //console.log(this.value);
    //this.value$.subscribe(val => console.log(val));
  // this.myobserve$.subscribe(val => console.log(val));
//    this.myobserve$.subscribe({
//     next : val => console.log(val),
//     error : err => console.log(err),
//     complete : () => console.log('completed')
//  });
// this.numbers$
// .pipe(
//   filter(val =>val % 2 == 0),
//   map(val => val+val),
//   delay(5000),
//   min(),
//  )
//.subscribe(val => console.log(val));
//this.myinterval$.subscribe(val => console.log(val));
//this.sub$=this.myinterval$.subscribe(val => console.log(val));
//this.myinterval$.subscribe(val => console.log(val));

// setTimeout(()=>{
//   if(this.sub$){
//     this.sub$.unsubscribe();
//   }},5000);

  this.subject$.subscribe(val => console.log('A-',val)); //subscribe subject
  this.subject$.next(1); //pass data using next method
  this.subject$.next(2);
  this.subject$.next(3);
  this.subject$.subscribe(val => console.log('B',val));
  this.subject$.next(4);
  this.subject$.next(5);


  }
 getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/products`)
    .pipe(
      delay(1000)

    );
   }
   getProductsById(id:number):Observable<Product>{
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
   }



increment():void{
    this.cartCount += 1;
    console.log(this.cartCount);
    this.cartCount$.next(this.cartCount);
  }
}
