import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    NgbTooltipModule.forRoot(),
    NgbModalModule.forRoot()
  ],
  exports: [NgbDropdownModule, NgbTooltipModule, NgbModalModule]
})
export class AppBootstrapModule {}