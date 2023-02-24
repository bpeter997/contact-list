import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactViewComponent } from './add-contact-view.component';

describe('AddContactViewComponent', () => {
  let component: AddContactViewComponent;
  let fixture: ComponentFixture<AddContactViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
