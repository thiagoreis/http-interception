import { TestBed, inject } from '@angular/core/testing';

import { MyCustomInterceptorService } from './my-custom-interceptor.service';

describe('MyCustomInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCustomInterceptorService]
    });
  });

  it('should be created', inject([MyCustomInterceptorService], (service: MyCustomInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
