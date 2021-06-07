import React from 'react';
import { StarIcon } from '@chakra-ui/icons';

import { Box, Heading, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Rating from '../../components/ui/Rating';

function Movie(props) {
	const imageUrl = 'http://image.tmdb.org/t/p/w500/';
	return (
		<LinkBox mb="20px" {...props}>
			<Box
				w="250px"
				h="400px"
				backgroundImage={`url(${imageUrl + props.poster_path})`}
				backgroundPosition="center center"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				borderRadius="10px"
			/>
			<LinkOverlay href={`/details/${props.id}`}>
				<Heading as="h2" fontSize="24px" mt="15px" w="250px" fontWeight="regular">
					{props.title}
				</Heading>
			</LinkOverlay>

			<Text fontSize="md" mt="10px">
				Release Date: {props.release_date}
			</Text>
			{/*<Link to={`/details/${props.id}`}>Details</Link>*/}

			<Rating vote_average={props.vote_average} />
		</LinkBox>
	);
}

export default Movie;
