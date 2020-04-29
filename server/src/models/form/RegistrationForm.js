import RegistrationField from './RegistrationField';
import fs from 'fs';


class RegistrationForm {
    constructor(configFile, data = {}) {
        this.fields = [];
        this.config = this.loadConfigFile(configFile);

        if(data.fields) {
            data.fields.map((field) => {
                this.fields.push(new RegistrationField(field));
            });
        }
    }

    loadConfigFile(configFile) {
        const raw = fs.readFileSync(configFile);

        return JSON.parse(raw);
    }

    getConfig() {
        return this.config;
    }

    getOrganizationFields(organization) {
        const organizationFields = organization.fetchForm().fields;

        return this.fields.filter((field) => organizationFields.includes(field.id));
    }

    getDefaultFields() {
        return this.fields.filter((field) => this.config.default_fields.includes(field.id));
    }

    addDefaults() {
        this.config.default_fields.map(id => {
            this.addField(this.findFieldById(id));
        });
    }

    addField(field) {
        if(field instanceof RegistrationField) {
            this.fields.push(field)
        }
    }

    findFieldById(id) {
        const field = { id: id, ...this.config.fields[id] };

        return new RegistrationField(field);
    }
}

export default RegistrationForm;