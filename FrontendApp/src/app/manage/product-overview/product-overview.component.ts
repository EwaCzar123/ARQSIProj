import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs/internal/Observable';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  listProducts$: Observable<Product[]>;
  @Output() showDetailProduct = new EventEmitter<Product>();
  constructor(public productService: ProductServiceService) {
    console.log("construor");
    this.productService.getMachines().subscribe(res => {
      this.listProducts$ = of(res);
    })
   }

  ngOnInit() {
  }

  showDetail(product: Product) {
    this.showDetailProduct.emit(product);
  }

}
