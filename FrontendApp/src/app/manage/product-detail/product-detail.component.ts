import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productFormGroup: FormGroup;

  @Input() productDetail: Product; 
  
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      description: new FormControl(),
    })
  }

  onSubmit() {
    if(this.productDetail.id == undefined) {
      let machinee = new Product(this.productFormGroup.value.description);
    this.productService.addProduct(machinee).subscribe(res => {

    })
  }
  }
}
