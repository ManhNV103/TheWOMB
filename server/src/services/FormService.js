import RegistrationForm from '../models/form/RegistrationForm';
import Field from '../models/form/Field';

const generateForm = (advertisers) => {
    const form = new RegistrationForm();

    try {
        advertisers.map((advertiser) => {
            advertiser.form = advertiser.fetchForm();

            advertiser.form.fields.map((field) => {
                form.addField(new Field(field));
            });
        });

        return form;
    } catch(e) {
        throw new Error(e.message);
    }
};

export {
    generateForm
};