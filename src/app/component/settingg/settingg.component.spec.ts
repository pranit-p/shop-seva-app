import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettinggComponent } from './settingg.component';

describe('SettinggComponent', () => {
  let component: SettinggComponent;
  let fixture: ComponentFixture<SettinggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettinggComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettinggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
