import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContinuarcompraPage } from './continuarcompra.page';

describe('ContinuarcompraPage', () => {
  let component: ContinuarcompraPage;
  let fixture: ComponentFixture<ContinuarcompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuarcompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContinuarcompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
