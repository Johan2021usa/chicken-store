import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit/*, AfterViewInit*/{

  constructor(
    private readonly productService:ProductoService
  ){}


  async ngOnInit(): Promise<void> {
    // const { product, error } = await this.productService.getAllProducts();
    // if (error) {
    //   console.error('Error fetching products:', error);
    // } else {
    //   console.log('Products:', product);
    // }

    // const data = await this.productService.getAllProductsFun();
    // console.log('Products function:', data);

    const dataAll = await this.productService.getAllProducts();
    console.log("Direct products:", dataAll.product);

    const uniProduct = await this.productService.getProductById(2);
    console.log("Get product by id:", uniProduct);
  }

  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }



}
