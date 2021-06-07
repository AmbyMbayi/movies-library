import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Spacer, Button } from '@chakra-ui/react';
import React from 'react';

function Pagination(props) {
	return (
		<Box {...props} ml="300px" w="78%" position="relative" top="60" pb="100px">
			<Flex>
				<Button
					leftIcon={<ArrowBackIcon />}
					color="white"
					backgroundColor="primary.500"
					p="0px 30px"
					borderRadius="30px">
					Page 2
				</Button>
				<Spacer />
				<Button
					rightIcon={<ArrowForwardIcon />}
					color="white"
					backgroundColor="primary.500"
					variant="solid"
					p="0px 30px"
					borderRadius="30px">
					Page 4
				</Button>
			</Flex>
		</Box>
	);
}

export default Pagination;
