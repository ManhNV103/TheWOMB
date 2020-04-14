import Field from './Field';

class RegistrationForm {
    constructor() {
        this.fields = [];
    }

    addField(field) {
        if(field instanceof Field) {
            this.fields.push(field)
        }
    }
}

export default RegistrationForm;