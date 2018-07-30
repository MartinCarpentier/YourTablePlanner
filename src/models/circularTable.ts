import { Chair } from "./chair";
import { Drawable } from "./table";
import * as PIXI from 'pixi.js';
import { EventHandlerFactory } from "../utils/event-handler-factory";

export class CircularTable extends Drawable {
    amountOfChairs: number;
    radius: number;
    chairs: Chair[];

    constructor(x: number,
        y: number,
        amountOfChairs: number,
        radius: number,
        public eventFactory: EventHandlerFactory) {
        super();
        this.x = x;
        this.y = y;
        this.amountOfChairs = amountOfChairs;
        this.radius = radius;

        this.chairs = this.CreateChairs(amountOfChairs);
    }

    getContainer(): PIXI.Container {
        let container = new PIXI.Container();
        var tableGraphic = new PIXI.Graphics();

        let eventHandler = this.eventFactory.tableEventHandler;

        tableGraphic.beginFill(0x000000, 1);
        tableGraphic.drawCircle(this.x, this.y, this.radius);
        tableGraphic.endFill();

        // Opt-in to interactivity
        tableGraphic.interactive = true;

        // Shows hand cursor
        tableGraphic.buttonMode = true;

        // Pointers normalize touch and mouse
        let onClick = function (event: any): void {
            eventHandler.pointerDown("what");
        };

        tableGraphic.on('pointerdown', onClick);
        container.addChild(tableGraphic);

        for (let chair of this.chairs) {

            var chairContainer = chair.getContainer(this.x, this.y);

            container.addChild(chairContainer);
            console.log("Adding chair to container");
        }

        return container;
    }

    CreateChairs(amountOfChairs: number): Chair[] {
        let chairs = new Array<Chair>();
        let chairAngle = (360 / this.amountOfChairs)

        for (let i = 1; i <= this.amountOfChairs; i++) {
            let point = this.getXAndYOfChair(this.x, this.y, 40, i * chairAngle)
            // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
            chairs[i - 1] = new Chair(point.x, point.y, this.eventFactory);
            console.log("Creating a single chair");
        }
        return chairs;
    }

    getXAndYOfChair(x: number, y: number, tableRadius: number, angle: number) {
        console.log("Angle to find point for: " + angle);
        var chairPlacement = { x, y };
        var hypotenuse = tableRadius + 20;
        if (angle == 90)
            chairPlacement = { x: x + hypotenuse, y: y }
        else if (angle == 180)
            chairPlacement = { x: x, y: y - hypotenuse }
        else if (angle == 270)
            chairPlacement = { x: x - hypotenuse, y: y }
        else if (angle == 360)
            chairPlacement = { x: x, y: y + hypotenuse }
        else if (angle > 270) {
            let triangleAngle = angle - 270;

            var angleInRadians = triangleAngle * Math.PI / 180;
            var oppositeY = Math.sin(angleInRadians) * hypotenuse;
            var buttomX = Math.cos(angleInRadians) * hypotenuse;

            chairPlacement = { x: x - buttomX, y: y + oppositeY }
        }
        else if (angle > 180) {
            let triangleAngle = angle - 180;

            var angleInRadians = triangleAngle * Math.PI / 180;
            var oppositeY = Math.sin(angleInRadians) * hypotenuse;
            var buttomX = Math.cos(angleInRadians) * hypotenuse;

            chairPlacement = { x: x - oppositeY, y: y - buttomX }
        }
        else if (angle > 90) {
            let triangleAngle = angle - 90;

            var angleInRadians = triangleAngle * Math.PI / 180;
            var oppositeY = Math.sin(angleInRadians) * hypotenuse;
            var buttomX = Math.cos(angleInRadians) * hypotenuse;

            chairPlacement = { x: x + buttomX, y: y - oppositeY }
        }
        else {
            var angleInRadians = angle * Math.PI / 180;
            var oppositeY = Math.sin(angleInRadians) * hypotenuse;
            var buttomX = Math.cos(angleInRadians) * hypotenuse;

            chairPlacement = { x: x + oppositeY, y: y + buttomX }
        }

        console.log("x was: " + chairPlacement.x);
        console.log("y was: " + chairPlacement.y);
        return chairPlacement;
    }
}