import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiograohyComponent } from './biograohy.component';

describe('BiograohyComponent', () => {
  let component: BiograohyComponent;
  let fixture: ComponentFixture<BiograohyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiograohyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiograohyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
