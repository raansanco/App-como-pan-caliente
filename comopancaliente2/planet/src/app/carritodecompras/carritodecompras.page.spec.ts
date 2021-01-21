import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarritodecomprasPage } from './carritodecompras.page';

describe('CarritodecomprasPage', () => {
  let component: CarritodecomprasPage;
  let fixture: ComponentFixture<CarritodecomprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritodecomprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarritodecomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
