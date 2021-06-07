import { Box, Button, Flex, Input, InputGroup, Spacer, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getMovieBySearching } from '../../api';
import { useQuery } from 'react-query';

import Loader from 'react-loader-spinner';
import Movie from '../Movies/Movie';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import { useLocation } from 'react-router';

function MovieSearch() {
	const [ searchTerm, setSearchTerm ] = useState('');

	const location = useLocation();

	const [ page, setPage ] = useState(1);

	const { data, error, isLoading, isError } = useQuery(
		[ 'movies', page, searchTerm ],
		() => getMovieBySearching(page, searchTerm),
		{
			keepPreviousData: true
		}
	);

	useEffect(
		() => {
			const params = new URLSearchParams(location.search);

			if (params.get('search')) {
				setSearchTerm(params.get('search'));
			}
		},
		[ location.search ]
	);

	if (isLoading) {
		return (
			<Box w={500} ml="500px" mt="200px">
				<Loader type="ThreeDots" color="grey" height={100} width={100} timeout={3000} />
			</Box>
		);
	}

	if (isError) {
		return (
			<Box w={500} ml="500px" mt="200px">
				Error: {error.message}
			</Box>
		);
	}

	return (
		<Box>
			<Flex direction="row" flexWrap="wrap" ml="300px" w="80%" position="relative" top="160px">
				{data.results.map(({ title, id, poster_path, release_date }) => (
					<Movie
						title={title}
						id={id}
						key={id}
						poster_path={poster_path}
						release_date={release_date}
						mr="50"
						mb="50"
					/>
				))}
			</Flex>
			<Box ml="300px" w="78%" position="relative" top="60" pb="100px">
				<Flex>
					<Button
						isDisabled={page === 1}
						onClick={() => setPage((old) => Math.max(old - 1, 1))}
						leftIcon={<ArrowBackIcon />}
						color="white"
						backgroundColor="primary.500"
						p="0px 30px"
						borderRadius="30px">
						Previous
					</Button>
					<Spacer />
					<Text> Page {page}</Text>
					<Spacer />
					<Button
						onClick={() => setPage(page + 1)}
						isDisabled={page >= data.total_results / data.results.length}
						rightIcon={<ArrowForwardIcon />}
						color="white"
						backgroundColor="primary.500"
						variant="solid"
						p="0px 30px"
						borderRadius="30px">
						Next
					</Button>
				</Flex>
			</Box>
		</Box>
	);
}

export default MovieSearch;
