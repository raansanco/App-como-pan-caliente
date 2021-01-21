import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarritovacioPage } from './carritovacio.page';

describe('CarritovacioPage', () => {
  let component: CarritovacioPage;
  let fixture: ComponentFixture<CarritovacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritovacioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarritovacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
