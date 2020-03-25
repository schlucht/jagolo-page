import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleFormComponent } from './bible-form.component';

describe('BibleFormComponent', () => {
  let component: BibleFormComponent;
  let fixture: ComponentFixture<BibleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
