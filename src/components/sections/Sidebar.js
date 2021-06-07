import { Box, Divider, Heading } from '@chakra-ui/react';
import React from 'react';
import SidebarItem from './SidebarItem';
import Loader from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { getAllGenres } from '../../api';
import Discover from './Discover';
function Sidebar() {
	const { isLoading, isError, data, error } = useQuery('Genres', getAllGenres);

	if (isLoading) {
		return (
			<Box top="160px">
				<Loader type="ThreeDots" color="#ccc" height={30} />
			</Box>
		);
	}

	if (isError) {
		return <Box top="160px">Error: {error.message}</Box>;
	}

	return (
		<Box w="250px" position="fixed" top="110px" overflowY="scroll" bottom="0">
			<Discover />
			<Box>
				<Heading as="h4" size="18" fontWeight="thinner" textTransform="uppercase" pl="5" pb="5">
					Genres
				</Heading>
				{data.map(({ id, name }) => <SidebarItem key={id} name={name} id={id} />)}
			</Box>
		</Box>
	);
}

export default Sidebar;
