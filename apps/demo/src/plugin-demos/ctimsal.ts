import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCtimsal } from '@demo/shared';
import {} from '@ctiplugins/ctimsal';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCtimsal {}
