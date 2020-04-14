import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import Advertiser from './Advertiser';
import { SelectedContext } from '../../../context/SelectedContext';

const AdvertiserList = (props) => {
    const advertisers = props.api.data;
    const { selected, addOrganization, removeOrganization } = useContext(SelectedContext);
	const imagesPerRow = 5;

	const onSelect = (id) => {
		if(!selected.has(id)) {
			addOrganization(id);
		} else {
			removeOrganization(id);
		}
	};

	let advertiserList = null;

	if (advertisers.length) {
		advertiserList = advertisers.map(advertiser => {
			return (
				<Grid.Column key={advertiser.id}>
					<Advertiser
						id={advertiser.id}
						name={advertiser.name}
						image={advertiser.image}
						onSelect={onSelect}
						selected={props.selected}
					/>
				</Grid.Column>
			);
		});
	}

	return (
		<Grid doubling columns={imagesPerRow} className="advertiser-list">
			{ advertiserList }
		</Grid>
	);
};

export default AdvertiserList;
