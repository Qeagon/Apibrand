import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BrandService {

  constructor(private http: HttpClient ) {}

  getBrand(name: string) {

    return this.http.get(
      'https://api.brandfetch.io/v2/brands/${name}',
      {
        headers: {
          Authorization: 'bearer iKEwRi_-GEh6Y-Uh5ZhnFikGlJhKTulTM-5jOD27zKIbwXLAygDPDeorQv0tFbrmY3UXhy_lECfDbujrh1Yqcg'

        }
      }


    )


  }
  
}
