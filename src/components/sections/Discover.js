import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import DiscoverMenu from './DiscoverMenu';

function Discover() {
	return (
		<Box>
			<Heading as="h4" size="18" fontWeight="thinner" textTransform="uppercase" pl="5" pb="5">
				Discover
			</Heading>
			<DiscoverMenu name="Top Rated" url="/toprated" />
			<DiscoverMenu name="Popular" url="/popular" />
			<DiscoverMenu name="Upcoming" url="/upcoming" />
		</Box>
	);
}

export default Discover;
