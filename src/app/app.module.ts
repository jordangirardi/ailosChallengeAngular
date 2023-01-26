import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HeaderUserActionsComponent } from './components/header-user-actions/header-user-actions.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SideInfoBlockComponent } from './components/side-info-block/side-info-block.component';
import { AppRoutingModule } from './app-routing.module';
import { AddClientComponent } from './components/pages/add-client/add-client.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { InputComponent } from './components/input/input.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AccountOwnerFormComponent } from './components/pages/account-owner-form/account-owner-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientAddressFormComponent } from './components/pages/client-address-form/client-address-form.component';
import { ClientEarningsFormComponent } from './components/pages/client-earnings-form/client-earnings-form.component';
import { ClientLegallyResponsibleFormComponent } from './components/pages/client-legally-responsible-form/client-legally-responsible-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    NotificationsComponent,
    HeaderUserActionsComponent,
    SideInfoBlockComponent,
    AddClientComponent,
    CheckboxComponent,
    FileUploadComponent,
    InputComponent,
    ProgressBarComponent,
    AccountOwnerFormComponent,
    ClientAddressFormComponent,
    ClientEarningsFormComponent,
    ClientLegallyResponsibleFormComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatStepperModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
