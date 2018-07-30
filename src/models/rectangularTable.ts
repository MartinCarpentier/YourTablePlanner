import { Chair } from "./chair";
import { Drawable } from "./table";

export class RectangularTable extends Drawable {
    getContainer(): PIXI.Container {
        throw new Error("Method not implemented.");
    }
    chairs: Chair[];
}