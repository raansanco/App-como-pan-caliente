import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabcategoriasPage } from './tabcategorias.page';

describe('TabcategoriasPage', () => {
  let component: TabcategoriasPage;
  let fixture: ComponentFixture<TabcategoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabcategoriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabcategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
