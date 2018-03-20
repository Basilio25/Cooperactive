import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-updateDoadores',
    templateUrl: './formUpdate.component.html',
    styleUrls: ['./formUpdate.component.scss'],
    animations: [routerTransition()]
})
export class FormComponentUpdate implements OnInit {
    constructor() {}

    ngOnInit() {}
}
