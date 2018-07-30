import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditTableComponent } from "../app/modal/edit-table/edit-table.component";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TableEventHandler {

    constructor(
        private modalService: NgbModal
    ) {

    }

    pointerDown(event: any) : string {
        const modalRef = this.modalService.open(EditTableComponent);

        modalRef.result.then((result) => {
            console.log(result);
            return result;
        }).catch((error) => {
            console.log(error);
        });
        return "Guest";
    }
    pointerUp() {
        throw new Error("Method not implemented.");
    }
    pointerUpOutside() {
        throw new Error("Method not implemented.");
    }
    pointerMove() {
        throw new Error("Method not implemented.");
    }
}