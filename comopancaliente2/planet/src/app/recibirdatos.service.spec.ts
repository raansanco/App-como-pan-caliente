import { TestBed } from '@angular/core/testing';

import { RecibirdatosService } from './recibirdatos.service';

describe('RecibirdatosService', () => {
  let service: RecibirdatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecibirdatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
