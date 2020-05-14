import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionHomeComponent } from './colection-home.component';

describe('ColectionHomeComponent', () => {
  let component: ColectionHomeComponent;
  let fixture: ComponentFixture<ColectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
