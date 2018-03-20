import { FormModuleUpdate } from './formUpdate.module';

describe('FormUpdateModule', () => {
    let formUpdateModule: FormModuleUpdate;

    beforeEach(() => {
        formUpdateModule = new FormModuleUpdate();
    });

    it('should create an instance', () => {
        expect(formUpdateModule).toBeTruthy();
    });
});
