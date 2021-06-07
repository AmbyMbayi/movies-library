import { Box, Link } from '@chakra-ui/layout';
import React from 'react';

function DiscoverMenu(props) {
	return (
		<Box mb="15px" ml="15px">
			<Link fontSize="16px" mt="10px" ml="10" href={props.url}>
				{props.name}
			</Link>
		</Box>
	);
}

export default DiscoverMenu;
