import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Logo(props) {
	return (
		<Box {...props}>
			<Heading as="h2" fontSize="26">
				Movies Library
			</Heading>
		</Box>
	);
}

export default Logo;
