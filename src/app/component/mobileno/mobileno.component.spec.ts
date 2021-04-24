import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobilenoComponent } from './mobileno.component';

describe('MobilenoComponent', () => {
  let component: MobilenoComponent;
  let fixture: ComponentFixture<MobilenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilenoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobilenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
