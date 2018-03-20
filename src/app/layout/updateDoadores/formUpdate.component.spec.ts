import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentUpdate } from './formUpdate.component';

describe('FormComponentUpdate', () => {
    let component: FormComponentUpdate;
    let fixture: ComponentFixture<FormComponentUpdate>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [FormComponentUpdate]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(FormComponentUpdate);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
