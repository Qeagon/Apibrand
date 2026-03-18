import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})

export class Brands { 

  brands = signal<any[]>([]);
  isLoading = signal<boolean>(true);

  apiKey = "ImetbBhiyi7IP_NSQvaAnF-MZW2CoOszpPk2UZR--PFF8BoLe6ZtOLHlSrh0POZjIMaQQlnp-x_ivi0pRKjHFw"

  ngOnInit(){
    this.loadBrands();
  }

  async loadBrands(){
    const brandList = ["google.com", "nike.com", "spotify.com", "github.com","slack.com"];

    const promises = brandList.map(brand => 
      fetch(`https://api.brandfetch.io/v2/brands/${brand}`, {
        headers:{
          Authorization: `Bearer ${this.apiKey}`
        }
      }).then(response => response.json())
    );

    const values = await Promise.all(promises);
    
    this.brands.set(values);
    this.isLoading.set(false);
  }

 
}