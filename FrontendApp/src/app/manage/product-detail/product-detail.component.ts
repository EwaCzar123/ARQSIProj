import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productFormGroup: FormGroup;

  @Input() productDetail: Product; 
  
  constructor() { }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      description: new FormControl(),
    })
  }

  onSubmit() {
    
  }
}
