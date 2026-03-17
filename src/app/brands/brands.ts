import { Component, OnInit } from '@angular/core';
import { BrandService } from '../services/brand';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-brands',
  imports: [CommonModule],
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class Brands implements OnInit { 

  brands:any[] = [];

  constructor(private brandService: BrandService){}

    ngOnInit(){
      this.loadBrands();
    }

    loadBrands(){

      const brandList = ['google.com','nike.com','spotify.com'];

      brandList.forEach(brand => {

        this.brandService.getBrand(brand).subscribe(data => {
          this.brands.push(data);
        });

      });

    }
  }


