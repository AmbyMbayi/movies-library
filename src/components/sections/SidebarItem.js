import { Box, Link } from '@chakra-ui/react';
import React from 'react';

function SidebarItem(props) {
	return (
		<Box mb="15px" ml="15px">
			<Link fontSize="16px" mt="10px" ml="10" href={`/genres/${props.id}`}>
				{props.name}
			</Link>
		</Box>
	);
}

export default SidebarItem;
