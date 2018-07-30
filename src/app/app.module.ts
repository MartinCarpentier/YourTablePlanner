import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditGuestComponent } from './modal/edit-guest/edit-guest.component';
import { EditTableComponent } from './modal/edit-table/edit-table.component';
import { ChairEventHandler } from '../utils/chair-event-handler';
import { TableEventHandler } from '../utils/table-event-handler';
import { EventHandlerFactory } from '../utils/event-handler-factory';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        EditGuestComponent,
        EditTableComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    providers: [ChairEventHandler,
        TableEventHandler,
        EventHandlerFactory],
    bootstrap: [AppComponent],
    entryComponents: [
        EditGuestComponent,
        EditTableComponent
    ]
})
export class AppModule { }
