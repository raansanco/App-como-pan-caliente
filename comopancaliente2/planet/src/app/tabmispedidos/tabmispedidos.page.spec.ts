import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabmispedidosPage } from './tabmispedidos.page';

describe('TabmispedidosPage', () => {
  let component: TabmispedidosPage;
  let fixture: ComponentFixture<TabmispedidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmispedidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabmispedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
