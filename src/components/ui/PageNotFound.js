import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';
import Header from '../sections/Header';

function PageNotFound() {
	return (
		<Box>
			<Header />

			<Box ml="auto" w="78%" position="relative" top="60" pb="100px">
				<Text mb="50" width="400px" fontSize="40px">
					Page Not Found!
				</Text>
				<Flex>
					<Link href="/">
						<Button
							rightIcon={<ArrowForwardIcon />}
							color="white"
							backgroundColor="primary.500"
							variant="solid"
							p="0px 30px"
							borderRadius="30px">
							Go Home
						</Button>
					</Link>
				</Flex>
			</Box>
		</Box>
	);
}

export default PageNotFound;
