import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { post, patch, postFile } from '../../../services/apiService';

const OrganizationForm = (props) => {
	const org = props.organization;

	const [id, setId] = useState(org.id ? org.id : 0);
	const [name, setName] = useState(org.name ? org.name : '');
	const [image, setImage] = useState('');
	const [configFile, setConfigFile] = useState('');

	const handleSubmit = async (e) => {
		try {
			if(id === 0) {
				const organization = await post('/organizations', {
					name: name
				});
			} else {
				
			}

			await postFile(`/organizations/${organization.id}/upload/image`, image);
			await postFile(`/organizations/${organization.id}/upload/configFile`, configFile);
		} catch(e) {

		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Field>
				<label>Name</label>
				<Input value={org ? org.name : ''} onChange={(e) => setName(e.target.value)} required />
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