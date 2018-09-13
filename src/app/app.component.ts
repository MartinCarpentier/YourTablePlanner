import { Component, OnInit } from '@angular/core';
import { EventHandlerFactory } from '../utils/event-handler-factory';

import { CanvasRenderer } from '../drawing/renderer';

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
        public eventHandlerFactory: EventHandlerFactory,
        private renderer: CanvasRenderer) 
    {
        this.chairs = 12;
    }

    ngOnInit() {
        var drawDiv = document.getElementById("DrawSpotId");

        this.renderer.Render(drawDiv);
    }
}
