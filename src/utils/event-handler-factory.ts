import { Injectable } from '@angular/core';

import { TableEventHandler } from "./table-event-handler";
import { ChairEventHandler } from "./chair-event-handler";

@Injectable({
    providedIn: 'root',
  })
export class EventHandlerFactory {
    constructor(public chairFactory : ChairEventHandler, 
    public tableEventHandler : TableEventHandler)
    {

    }
}
