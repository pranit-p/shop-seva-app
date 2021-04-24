import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewslistComponent } from './newslist.component';

describe('NewslistComponent', () => {
  let component: NewslistComponent;
  let fixture: ComponentFixture<NewslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
