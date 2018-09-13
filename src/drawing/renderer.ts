import { Injectable } from "@angular/core";
import { CircularTable } from "../models/circularTable";
import { EventHandlerFactory } from "../utils/event-handler-factory";

@Injectable({
    providedIn: 'root'
})
export class CanvasRenderer {
    constructor(private eventHandlerFactory: EventHandlerFactory)
    {
        
    }

    public Render(canvas : HTMLElement)
    {
        let width = 900;
        let height = 1260;

        var app = new PIXI.Application(width, height,
            {
                antialias: true,
                backgroundColor: 0xFFFFFF
            }
        );
        
        canvas.appendChild(app.view);
        
        this.drawBorder(app, width, height);
        this.addTitle(app, width);

        let tableX1 = (900 / 4);
        let tableX2 = (900 / 3);
        
        let moveY = 130;
        let table1 = new CircularTable(tableX1, 180+moveY, 9, 60, 2, this.eventHandlerFactory);
        let table2 = new CircularTable(tableX1 * 2, 360+moveY, 8, 60, 1, this.eventHandlerFactory);
        let table3 = new CircularTable(tableX1 * 3, 180+moveY, 8, 60, 3, this.eventHandlerFactory);
        let table4 = new CircularTable(tableX1, 540+moveY, 8, 60,4, this.eventHandlerFactory);
        let table5 = new CircularTable(tableX1 * 3, 540+moveY, 8, 60,5, this.eventHandlerFactory);
        let table6 = new CircularTable(tableX1, 900+moveY, 8, 60,7, this.eventHandlerFactory);
        let table7 = new CircularTable(tableX1 * 2, 720+moveY, 8, 60,6, this.eventHandlerFactory);
        let table8 = new CircularTable(tableX1 * 3, 900+moveY, 8, 60,8, this.eventHandlerFactory);

        app.stage.addChild(table1.getContainer());
        app.stage.addChild(table2.getContainer());
        app.stage.addChild(table3.getContainer());
        app.stage.addChild(table4.getContainer());
        app.stage.addChild(table5.getContainer());
        app.stage.addChild(table6.getContainer());
        app.stage.addChild(table7.getContainer());
        app.stage.addChild(table8.getContainer());
    }

    drawBorder(app : PIXI.Application, width: number, height: number)
    {
        let borderTransparancy = 0.3;
        let borderContainer = new PIXI.Container();

        var topBorder = new PIXI.Graphics();
        var leftSideBorder = new PIXI.Graphics();
        var rightBorder = new PIXI.Graphics();
        var buttomBorder = new PIXI.Graphics();

        topBorder.beginFill(0x000000, borderTransparancy);
        topBorder.drawRect(0,0,width,5);
        topBorder.endFill();
        leftSideBorder.beginFill(0x000000, borderTransparancy);
        leftSideBorder.drawRect(0,5,5,height);
        leftSideBorder.endFill();
        rightBorder.beginFill(0x000000, borderTransparancy);
        rightBorder.drawRect(width-5,5,5,height);
        rightBorder.endFill();
        buttomBorder.beginFill(0x000000, borderTransparancy);
        buttomBorder.drawRect(5,height-5,width-10,5);
        buttomBorder.endFill();

        borderContainer.addChild(topBorder);
        borderContainer.addChild(leftSideBorder);
        borderContainer.addChild(rightBorder);
        borderContainer.addChild(buttomBorder);

        app.stage.addChild(borderContainer);
    }

    addTitle(app : PIXI.Application, width : number)
    {
        let style = new PIXI.TextStyle({
            fontFamily: 'Georgia',
            fontSize: 50,
            fontStyle: 'italic',
            stroke: '#4a1850'
        });

        var basicText = new PIXI.Text("Natacha og Martins bryllup", style);

        basicText.x = (width/2)-(basicText.width/2);
        basicText.y = 20;

        app.stage.addChild(basicText);
    }
}
