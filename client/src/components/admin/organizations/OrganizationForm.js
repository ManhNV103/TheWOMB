import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { post, postFile } from '../../../services/apiService';

const OrganizationForm = (props) => {
	const org = props.organization;

	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [configFile, setConfigFile] = useState('');

	const handleSubmit = async (e) => {
		const organization = await post('/organizations', {
			name: name
		});

		await postFile(`/organizations/${organization.id}/upload/image`, image);
		await postFile(`/organizations/${organization.id}/upload/configFile`, configFile);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Field>
				<label>Name</label>
				<Input value={org ? org.name : ''} onChange={(e) => setName(e.target.value)} required />
			</Form.Field>
			<Form.Field>
				<label>Image</label>
				<input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}  />
			</Form.Field>
			<Form.Field>
				<label>Config File (yaml)</label>
				<input type="file" onChange={(e) => setConfigFile(e.target.files[0])} />
			</Form.Field>
			<Button primary>Save</Button>
		</Form>
	);
};

export default OrganizationForm;