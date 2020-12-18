import { Component, NgZone } from '@angular/core';
import { DemoSharedCtimsal } from '@demo/shared';
import {} from '@ctiplugins/ctimsal';

@Component({
	selector: 'demo-ctimsal',
	templateUrl: 'ctimsal.component.html',
})
export class CtimsalComponent {
	demoShared: DemoSharedCtimsal;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedCtimsal();
	}
}
