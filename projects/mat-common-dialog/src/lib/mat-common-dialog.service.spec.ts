import { TestBed } from '@angular/core/testing';

import { MatCommonDialogService } from './mat-common-dialog.service';

describe('MatCommonDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatCommonDialogService = TestBed.get(MatCommonDialogService);
    expect(service).toBeTruthy();
  });
});
