import { TestBed } from '@angular/core/testing';

import { AptofMatCommonDialogService } from './mat-common-dialog.service';

describe('MatCommonDialogService', () => {
  let service: AptofMatCommonDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AptofMatCommonDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
