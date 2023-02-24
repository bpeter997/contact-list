import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedContactDialogComponent } from './detailed-contact-dialog.component';

describe('DetailedContactDialogComponent', () => {
  let component: DetailedContactDialogComponent;
  let fixture: ComponentFixture<DetailedContactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedContactDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
