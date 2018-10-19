import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatSelectModule, MatDialogModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PagesRoutes } from './pages.routing';
import { BlankComponent } from './blank/blank.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EditComponent } from './edit/edit.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './project/addproject/addproject.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprojectComponent } from './project/editproject/editproject.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  declarations: [
    BlankComponent,
    InvoiceComponent,
    TimelineComponent,
    EditComponent,
    PricingComponent,
    ProjectComponent,
    AddprojectComponent,
    ProfileComponent,
    EditprojectComponent,
  ],
  entryComponents: [
    AddprojectComponent,
    EditprojectComponent
  ]
})

export class PagesModule {}
