import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductoagregadoPage } from './productoagregado.page';

describe('ProductoagregadoPage', () => {
  let component: ProductoagregadoPage;
  let fixture: ComponentFixture<ProductoagregadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoagregadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoagregadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
