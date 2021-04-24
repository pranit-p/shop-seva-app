import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaonComponent } from './gaon.component';

describe('GaonComponent', () => {
  let component: GaonComponent;
  let fixture: ComponentFixture<GaonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
