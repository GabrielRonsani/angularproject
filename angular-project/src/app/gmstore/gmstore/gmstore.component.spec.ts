import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmstoreComponent } from './gmstore.component';

describe('GmstoreComponent', () => {
  let component: GmstoreComponent;
  let fixture: ComponentFixture<GmstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
