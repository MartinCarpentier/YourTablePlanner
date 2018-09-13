import { EventHandlerFactory } from "../utils/event-handler-factory";

export class Chair {
    constructor(x: number,
        y: number,
        public eventFactory: EventHandlerFactory) {
        this.x = x;
        this.y = y;
        this.name = "Guest"
    }

    x: number;
    y: number;

    name: string;
    nameGraphic: PIXI.Text;

    style: PIXI.TextStyle

    getContainer(tableX: number, tableY: number): PIXI.Container {
        this.style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 20,
            fontStyle: 'italic',
            stroke: '#4a1850',
        });

        let eventHandler = this.eventFactory.chairFactory;

        let container = new PIXI.Container();
        var chairGraphic = new PIXI.Graphics();
        // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        chairGraphic.beginFill(0x000000, 0.5);
        chairGraphic.drawCircle(this.x, this.y, 10);
        chairGraphic.endFill();

        let graphic = this.createName(tableX, tableY);

        // Opt-in to interactivity
        graphic.interactive = true;

        // Shows hand cursor
        graphic.buttonMode = true;

        let x = this.x;
        let y = this.y;
        let updateNameFunc = this.updateNamePosition;
        // Pointers normalize touch and mouse
        let onClick = async function (event: any) {
            graphic.text = "Editing";
            eventHandler.pointerDown().then(result => {
                graphic.text = result;
                updateNameFunc(x, y, tableX, tableY, graphic);
            });
        };

        graphic.on('pointerdown', onClick);

        container.addChild(chairGraphic);
        container.addChild(graphic);

        return container
    }

    updateNamePosition(currentX: number,
        currentY: number,
        tableX: number,
        tableY: number,
        nameGraphic: PIXI.Text): void {
        if (currentX == tableX && currentY > tableY) {
            nameGraphic.x = currentX - (nameGraphic.width / 2);
            nameGraphic.y = (currentY + 15);
        }
        else if (currentX == tableX && currentY < tableY) {
            nameGraphic.x = currentX - (nameGraphic.width / 2);
            nameGraphic.y = currentY - 35;
        }
        else if (currentX > tableX) {
            nameGraphic.x = currentX + 15;
            nameGraphic.y = currentY - 15;
        }
        else if (currentX < tableX) {
            nameGraphic.x = currentX - nameGraphic.width - 20;
            nameGraphic.y = currentY - 15;
        }
    }

    createName(tableX: number, tableY: number): PIXI.Text {
        var basicText = new PIXI.Text(this.name, this.style);
        if (this.x == tableX && this.y > tableY) {
            basicText.x = this.x - (basicText.width / 2);
            basicText.y = (this.y + 15);
        }
        else if (this.x == tableX && this.y < tableY) {
            basicText.x = this.x - (basicText.width / 2);
            basicText.y = this.y - 35
        }
        else if (this.x > tableX) {
            basicText.x = this.x + 20;
            basicText.y = this.y - 15;
        }
        else if (this.x < tableX) {
            basicText.x = this.x - basicText.width - 20;
            basicText.y = this.y - 15;
        }

        return basicText;
    }
}