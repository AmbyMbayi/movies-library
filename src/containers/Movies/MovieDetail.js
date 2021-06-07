import React from 'react';
import { Box, Button, Flex, Spacer, Stack, Text, Link } from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons';

import Loader from 'react-loader-spinner';
import { useParams } from 'react-router';
import { getMovieDetails } from '../../api';
import { useQuery } from 'react-query';

import VideoModal from '../../components/ui/VideoModal';
import Rating from '../../components/ui/Rating';

function MovieDetail() {
	const imageUrl = 'http://image.tmdb.org/t/p/w500/';
	const imdbUrl = 'https://www.imdb.com/title/';
	const { id } = useParams();

	const { data, error, isLoading, isError } = useQuery([ 'movie', { id } ], getMovieDetails);
	console.log('movie details', data);
	//console.log('movie data', data.videos.results);

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
	function displayTrailer() {
		const { key } = data.videos.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube') || {};

		return <VideoModal trailer_key={key} />;
	}
	return (
		<Box>
			{data ? (
				<Flex flexWrap="wrap" ml="300px" w="80%" position="relative">
					<Box mr="60px" mt="100px">
						<Box
							w="400px"
							h="600px"
							backgroundImage={`url(${imageUrl + data.poster_path})`}
							backgroundPosition="center center"
							backgroundRepeat="no-repeat"
							backgroundSize="cover"
							borderRadius="10px"
						/>
					</Box>

					<Box m="5" width="50%" mt="100px">
						<Stack>
							<Text as="h2" fontSize="48" mt="15px" textTransform="uppercase" fontWeight="lighter">
								{data.title}
							</Text>

							<Text fontSize="18" mt="10px" textTransform="uppercase" fontWeight="bold">
								{data.tagline}
							</Text>
							<Flex>
								<Rating vote_average={data.vote_average} />
								<Spacer />
								{data.spoken_languages.map((language, index) => (
									<Text
										key={index}
										fontWeight="bold"
										textTransform="uppercase"
										fontSize="12px"
										color="grey">
										{language.name} /
									</Text>
								))}
								<Text fontWeight="bold" textTransform="uppercase" fontSize="12px" color="grey">
									{data.runtime} MIN / {data.release_date}
								</Text>
							</Flex>
						</Stack>
						<Text fontSize="16px" mt="25px" fontWeight="bold" textTransform="uppercase">
							The Genres
						</Text>
						<Stack direction="row" mt="10px">
							{data.genres.map((genre) => (
								<Text key={genre.id} p="10px">
									{genre.name}
								</Text>
							))}
						</Stack>
						<Stack>
							<Text fontSize="md" mt="25px" fontWeight="bold" textTransform="uppercase">
								The Synopsis
							</Text>
							<Text fontSize="md" mt="10px" wordBreak="break-word" w="98%">
								{data.overview}
							</Text>
						</Stack>

						<Text fontSize="md" mt="25px" mb="25px" fontWeight="bold" textTransform="uppercase">
							The Cast
						</Text>

						<Stack direction="row" spacing="30px">
							<Link href={`${data.homepage}`} isExternal>
								<Button
									rightIcon={<LinkIcon />}
									colorScheme="black"
									variant="outline"
									p="0px 30px"
									borderRadius="30px">
									Website
								</Button>
							</Link>
							<Link href={`${imdbUrl + data.imdb_id}`}>
								<Button
									rightIcon={<ExternalLinkIcon />}
									colorScheme="black"
									variant="outline"
									p="0px 30px"
									borderRadius="30px">
									IMDB
								</Button>
							</Link>

							{displayTrailer()}
							<Spacer />
							<Link href="/">
								<Button
									leftIcon={<ArrowBackIcon />}
									backgroundColor="primary.500"
									variant="solid"
									p="0px 30px"
									color="white"
									colorScheme="black"
									borderRadius="30px">
									Back
								</Button>
							</Link>
						</Stack>
					</Box>
				</Flex>
			) : null}
		</Box>
	);
}

export default MovieDetail;
