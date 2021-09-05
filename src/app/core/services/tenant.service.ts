import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor() { }

  private tenantHeaderSource = new BehaviorSubject<string>('');
  private tenantIdSource = new BehaviorSubject<number>(null);
  
  tenantHeader$ = this.tenantHeaderSource.asObservable();
  tenantId$ = this.tenantIdSource.asObservable();

  setTenantHeader(tenantHeader: string){
    this.tenantHeaderSource.next(tenantHeader);
  }

  getTenantHeader(){
    return this.tenantHeaderSource.value;
  }

  setTenantId(tenantId: number){
    this.tenantIdSource.next(tenantId);
  }

  getTenantId(){
    return this.tenantIdSource.value;
  }
}
