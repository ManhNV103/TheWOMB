import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { post, patch, postFile } from '../../../services/apiService';
import Alerts from '../../registration/blocks/Alerts';

const OrganizationForm = (props) => {
	const org = props.organization;

	const [id, setId] = useState(org.id ? org.id : 0);
	const [name, setName] = useState(org.name ? org.name : '');
	const [image, setImage] = useState('');
	const [configFile, setConfigFile] = useState('');
    const [alerts, setAlerts] = useState([]);

	const handleSubmit = async (e) => {
		try {
			let organization = {};

			if(id === 0) {
				try {
					organization = await post('/organizations', {
						name: name
					});

					setId(organization.id);

					setAlerts([...alerts, {
						type: 'positive',
						message: 'Organization created successfully'
					}]);
				} catch(e) {
					setAlerts([{
						type: 'negative',
						message: e.message
					}])
					return;
				}
			} else {
				organization = await patch(`organizations/${id}`, {
					name: name
				});
			}

			await postFile(`/organizations/${id}/upload/image`, image);
			await postFile(`/organizations/${id}/upload/configFile`, configFile);
		} catch(e) {

		}
	};

	const dismissAlert = (key) => {
        const updated = alerts.filter((alert, i) => i !== key);
        setAlerts(updated);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Alerts alerts={alerts} onDismiss={dismissAlert} />
			<Form.Field>
				<label>Name</label>
				<Input value={name} onChange={(e) => setName(e.target.value)} required />
			</Form.Field>
			<Form.Field>
				<label>Image</label>
				<input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}  required />
			</Form.Field>
			<Form.Field>
				<label>Config File (yaml)</label>
				<input type="file" onChange={(e) => setConfigFile(e.target.files[0])} required />
			</Form.Field>
			<Button primary>Save</Button>
		</Form>
	);
};

export default OrganizationForm;