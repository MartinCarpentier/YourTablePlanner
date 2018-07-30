import { Component, OnInit } from '@angular/core';
import { CircularTable } from '../models/circularTable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventHandlerFactory } from '../utils/event-handler-factory';

import { EditGuestComponent } from './modal/edit-guest/edit-guest.component';
import { EditTableComponent } from './modal/edit-table/edit-table.component';

declare var PIXI: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    chairs: any;

    constructor(
        public eventHandlerFactory: EventHandlerFactory) {
        this.chairs = 12;
    }

    ngOnInit() {
        var app = new PIXI.Application(900, 1260,
            {
                antialias: true,
                backgroundColor: 0xFFFFF
            }
        );
        var drawDiv = document.getElementById("DrawSpotId");
        drawDiv.appendChild(app.view);

        let tableX1 = (900 / 4);
        let tableX2 = (900 / 3);

        let table1 = new CircularTable(tableX1, 100, 9, 40, this.eventHandlerFactory);
        let table2 = new CircularTable(tableX1 * 2, 100, 9, 40, this.eventHandlerFactory);
        let table3 = new CircularTable(tableX1 * 3, 100, 9, 40, this.eventHandlerFactory);
        let table4 = new CircularTable(tableX2, 300, 9, 40, this.eventHandlerFactory);
        let table5 = new CircularTable(tableX2 * 2, 300, 9, 40, this.eventHandlerFactory);
        let table6 = new CircularTable(tableX1, 500, 9, 40, this.eventHandlerFactory);
        let table7 = new CircularTable(tableX1 * 2 , 500, 9, 40, this.eventHandlerFactory);
        let table8 = new CircularTable(tableX1 * 3, 500, 9, 40, this.eventHandlerFactory);

        app.stage.addChild(table1.getContainer());
        app.stage.addChild(table2.getContainer());
        app.stage.addChild(table3.getContainer());
        app.stage.addChild(table4.getContainer());
        app.stage.addChild(table5.getContainer());
        app.stage.addChild(table6.getContainer());
        app.stage.addChild(table7.getContainer());
        app.stage.addChild(table8.getContainer());
    }
}
