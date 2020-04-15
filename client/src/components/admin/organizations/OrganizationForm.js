import React, { useState, useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Image } from 'semantic-ui-react';
import { post, patch, postFile } from '../../../services/apiService';
import { AlertsContext } from '../../../context/AlertsContext';

const OrganizationForm = (props) => {
	const org = props.api.data;
	const history = useHistory();
	const imageInput = useRef(null);
	const configFileInput = useRef(null);
	const { addAlert } = useContext(AlertsContext);
	const [organization, setOrganization] = useState({
		id: -1,
		name: '',
		image: '',
        config_file: '',
        disabled: false
    });
    
	useEffect(() => {
		setOrganization({
			id: org.id,
			name: org.name,
            config_file: org.config_file,
            disabled: org.disabled
		});
	}, [org]);

	const updateOrganization = (key, value) => {
		organization[key] = value;

		setOrganization({...organization});
	}

	const handleSubmit = async (e) => {
        props.api.setLoading(true);
		try {
			let id = organization.id;

			if(organization.id === -1) {
				const newOrg = await post('/organizations', {
                    name: organization.name,
                    disabled: organization.disabled
				});

				id = newOrg.id;

				history.push(`/admin/organizations/${id}`);
			} else {
				const newOrg = await patch(`/organizations/${organization.id}`, {
                    name: organization.name,
                    disabled: organization.disabled
				});

				props.api.setData(newOrg);

				addAlert({
					type: 'positive',
					message: 'Organization updated successfully'
				});
			}

			if(organization.image) {
				await postFile(`/organizations/${id}/upload/image`, organization.image);
				props.api.setOptions({});
                imageInput.current.value = null;
                organization.image = null;

				addAlert({
					type: 'positive',
					message: 'Image updated successfully'
				});
			}
			if(organization.config_file) {
				await postFile(`/organizations/${id}/upload/configFile`, organization.config_file);
				props.api.setOptions({});
				configFileInput.current.value = null;

				addAlert({
					type: 'positive',
					message: 'Config file updated successfully'
				});
			}
		} catch(e) {
			addAlert({
				type: 'negative',
				message: e.message
			});
        }
        props.api.setLoading(false);
	};

	const imageDom = org.image ? (<Image size="medium" src={org.image} />) : null;

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Field>
				<label>Name</label>
				<Input value={organization.name} onChange={(e) => updateOrganization('name', e.target.value)} required />
			</Form.Field>
			<Form.Field>
				<label>Image</label>
				{ imageDom }
				<input type="file" accept="image/*" onChange={(e) => updateOrganization('image', e.target.files[0])} ref={imageInput} />
			</Form.Field>
			<Form.Field>
				<label>Config File (.json)</label>
				<p>{ org.config_file }</p>
				<input type="file" onChange={(e) => updateOrganization('config_file', e.target.files[0])} ref={configFileInput} />
			</Form.Field>
            <Form.Field>
                <label>Disabled</label>
                <Checkbox toggle checked={organization.disabled} onChange={(e, { checked } ) => updateOrganization('disabled', checked)} />
            </Form.Field>
			<Button primary>Save</Button>
		</Form>
	);
};

export default OrganizationForm;