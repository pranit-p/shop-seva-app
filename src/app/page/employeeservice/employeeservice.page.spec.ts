import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeservicePage } from './employeeservice.page';

describe('EmployeeservicePage', () => {
  let component: EmployeeservicePage;
  let fixture: ComponentFixture<EmployeeservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
