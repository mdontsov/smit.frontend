import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmitComponent } from './smit.component';

describe('SmitComponent', () => {
  let component: SmitComponent;
  let fixture: ComponentFixture<SmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
