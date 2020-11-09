import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Guid } from './Guid';
import { BaseHttpService } from './base-http.service';
import { DownloadFileService, IDownloadResult } from './download-service';
import {
  mapCollection,
  mapSingle,
  mapIdentityCollection,
  mapIdentitySingle
} from './mappers';
import * as $models from './models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Category', http);
  }

  public addCategory(category: $models.ICategory): Observable<Guid> {
    return this.post<Guid>(`addCategory`, category);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Product', http);
  }

  public getProducts(): Observable<$models.Product[]> {
    return this.get<$models.IProduct[]>(`getProducts`).pipe(
      mapCollection($models.Product)
    );
  }
}