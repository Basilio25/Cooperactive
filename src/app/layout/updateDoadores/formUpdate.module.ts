import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormUpdateRoutingModule } from './formUpdate-routing.module';
import { FormComponentUpdate } from './formUpdate.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, FormUpdateRoutingModule, PageHeaderModule],
    declarations: [FormComponentUpdate]
})
export class FormModuleUpdate {}
