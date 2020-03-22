import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TahunAjarPage } from './tahun-ajar.page';

describe('TahunAjarPage', () => {
  let component: TahunAjarPage;
  let fixture: ComponentFixture<TahunAjarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TahunAjarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TahunAjarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
