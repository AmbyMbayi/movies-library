import { StarIcon } from '@chakra-ui/icons';
import ReactStars from 'react-rating-stars-component';
import { Box } from '@chakra-ui/layout';
import React from 'react';

function Rating(props) {
	let vote = (props.vote_average / 2).toFixed(1);

	const fillStar = {
		size: 24,
		value: vote,
		edit: false,
		activeColor: '#0CA25F',
		isHalf: true
	};

	return (
		<Box>
			<ReactStars {...fillStar} />
		</Box>
	);
}

export default Rating;
