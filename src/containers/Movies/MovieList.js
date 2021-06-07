import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Movie from './Movie';
import Loader from 'react-loader-spinner';

import { useQuery } from 'react-query';
import { getAllMovies } from '../../api';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

function MovieList() {
	const [ page, setPage ] = useState(1);
	const { data, error, isLoading, isError } = useQuery([ 'movies', page ], () => getAllMovies(page), {
		keepPreviousData: true
	});

	if (isLoading) {
		return (
			<Box w={500} ml="500px">
				<Loader type="ThreeDots" color="grey" height={100} width={100} timeout={3000} />
			</Box>
		);
	}

	if (isError) {
		return (
			<Box w={500} ml="500px">
				Error: {error.message}
			</Box>
		);
	}

	return (
		<Box>
			<Flex direction="row" flexWrap="wrap" ml="300px" w="80%" position="relative" top="160px">
				{data.results.map(({ title, id, poster_path, release_date, vote_average }) => (
					<Movie
						title={title}
						id={id}
						key={id}
						poster_path={poster_path}
						release_date={release_date}
						vote_average={vote_average}
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

export default MovieList;
