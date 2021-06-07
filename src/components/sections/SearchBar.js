import { Box, Input, InputGroup } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useLocation } from 'react-router';

import { getMovieBySearching } from '../../api';
import useDebounce from '../../utils/useDebounce';

function SearchBar() {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ results, setResults ] = useState([]);
	const [ isSearching, setIsSearching ] = useState(false);
	const location = useLocation();
	const history = useHistory();

	const [ page, setPage ] = useState(1);

	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	useEffect(
		() => {
			if (debouncedSearchTerm) {
				const queryParams = new URLSearchParams(location.search);

				queryParams.set('search', debouncedSearchTerm || '');
				queryParams.set('page', page);

				history.push({ search: '?' + queryParams.toString(), pathname: '/search' });
			}
		},
		[ debouncedSearchTerm ]
	);

	return (
		<Box w="50%">
			<InputGroup>
				<Input
					focusBorderColor="teal"
					placeholder="Search for Movie"
					size="md"
					variant="flushed"
					p="15px"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</InputGroup>
			{isSearching && <Box>Searching...</Box>}
		</Box>
	);
}

export default SearchBar;
