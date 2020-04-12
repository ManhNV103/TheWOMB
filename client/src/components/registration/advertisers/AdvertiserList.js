import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Advertiser from './Advertiser';

const AdvertiserList = (props) => {
	const advertisers = props.api.data;
	const [selected, setSelected] = useState([]);
	const imagesPerRow = 5;

	const onSelect = id => {
		let index = selected.indexOf(id);
		if (index < 0) {
			setSelected([...selected, id]);
		} else {
			setSelected(selected.filter(value => value !== id));
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
