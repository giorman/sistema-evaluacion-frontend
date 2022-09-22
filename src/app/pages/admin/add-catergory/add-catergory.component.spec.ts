import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatergoryComponent } from './add-catergory.component';

describe('AddCatergoryComponent', () => {
  let component: AddCatergoryComponent;
  let fixture: ComponentFixture<AddCatergoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatergoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
