import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CtimsalComponent } from './ctimsal.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: CtimsalComponent }])],
	declarations: [CtimsalComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class CtimsalModule {}
