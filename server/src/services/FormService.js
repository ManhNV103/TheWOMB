import RegistrationForm from '../models/form/RegistrationForm';
import Submission from '../models/Submission';
import { FORM_CONFIG } from '../constants';

const generateForm = (advertisers) => {
    const form = new RegistrationForm(FORM_CONFIG);

    form.addDefaults();

    try {
        advertisers.map((advertiser) => {
            advertiser.form = advertiser.fetchForm();

            advertiser.form.fields.map((id) => {
                form.addField(form.findFieldById(id));
            });
        });

        return form;
    } catch(e) {
        throw new Error(e.message);
    }
};

const submitForm = async (advertisers, json) => {
    const form = new RegistrationForm(FORM_CONFIG, json);

	const submission = await Submission.query().insertGraph({
        default_fields: JSON.stringify(form.getDefaultFields())
    });

    try {
        advertisers.map(async (advertiser) => {
            const organizationSubmission = await submission.$relatedQuery('organizationSubmissions').insert({
                organization_id: advertiser.id,
                form: JSON.stringify(form.getOrganizationFields(advertiser)),
                status: 'PENDING'
            });
        });

        return true;
    } catch(e) {

    }
}

export {
    generateForm,
    submitForm
};