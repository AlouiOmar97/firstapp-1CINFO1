import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatchsComponent } from './list-matchs.component';

describe('ListMatchsComponent', () => {
  let component: ListMatchsComponent;
  let fixture: ComponentFixture<ListMatchsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMatchsComponent]
    });
    fixture = TestBed.createComponent(ListMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
