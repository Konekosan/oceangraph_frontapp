import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBarErrorComponent } from './message-bar-error.component';

describe('MessageBarErrorComponent', () => {
  let component: MessageBarErrorComponent;
  let fixture: ComponentFixture<MessageBarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageBarErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
