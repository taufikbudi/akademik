import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendaftaranduaPage } from './pendaftarandua.page';

describe('PendaftaranduaPage', () => {
  let component: PendaftaranduaPage;
  let fixture: ComponentFixture<PendaftaranduaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranduaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendaftaranduaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
