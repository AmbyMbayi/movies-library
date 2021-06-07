import { Box, Flex, Spacer, Stack, Text, Input, InputGroup, LinkBox, Link, LinkOverlay } from '@chakra-ui/react';
import React from 'react';
import Logo from '../ui/Logo';
import SearchBar from './SearchBar';

function Header(props) {
	const date = new Date();
	const month = date.toLocaleString('default', { month: 'long' });
	const dayDate = date.getDate();
	const dayName = date.toLocaleString('en-us', { weekday: 'long' });
	const time = date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

	return (
		<Flex {...props} pb="10px" mb="10px" position="fixed" backgroundColor="white" zIndex="100" w="100%" pt="20px">
			<LinkOverlay ml="10px" href="/">
				<Logo color="primary.500" />
			</LinkOverlay>

			<Spacer />

			<SearchBar />
			<Spacer />
			<Flex mr="20px">
				<Text fontSize="40px" pr="5">
					{time}
				</Text>
				<Stack spacing="0" mt="2px">
					<Text fontSize="20px">
						{month} {dayDate}
					</Text>
					<Text fontSize="18px">{dayName}</Text>
				</Stack>
			</Flex>
		</Flex>
	);
}

export default Header;
