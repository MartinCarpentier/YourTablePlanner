import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-guest',
    templateUrl: './edit-guest.component.html',
    styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit {

    @Input() name;
    public nameChange;

    constructor(
        public activeModal: NgbActiveModal
    ) { }

    closeModal() {
        console.log(this.nameChange)
        this.activeModal.close(this.nameChange);
    }

    ngOnInit() {
    }

}
