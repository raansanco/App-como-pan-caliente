import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabproductosPage } from './tabproductos.page';

describe('TabproductosPage', () => {
  let component: TabproductosPage;
  let fixture: ComponentFixture<TabproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
