import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransdetailComponent } from './transdetail.component';

describe('TransdetailComponent', () => {
  let component: TransdetailComponent;
  let fixture: ComponentFixture<TransdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
