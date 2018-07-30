import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditGuestComponent } from "../app/modal/edit-guest/edit-guest.component";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ChairEventHandler {

    constructor(
        private modalService: NgbModal
    ) {

    }

    async pointerDown() : Promise<any> {
        let modelRef =  this.modalService.open(EditGuestComponent);
        modelRef.componentInstance.name = "TEST";
        return modelRef.result;
    }
    pointerUp() {
        throw new Error("Method not implemented.");"
    }
    pointerUpOutside() {
        throw new Error("Method not implemented.");
    }
    pointerMove() {
        throw new Error("Method not implemented.");
    }
}
