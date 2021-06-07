import { Button } from '@chakra-ui/button';
import { TriangleUpIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/layout';
import React, { useState } from 'react';

import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

function VideoModal(props) {
	const [ isOpen, setOpen ] = useState(false);

	return (
		<React.Fragment>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				//videoId="L61p2uyiMSo"
				videoId={props.trailer_key}
				onClose={() => setOpen(false)}
			/>
			<Link>
				<Button
					onClick={() => setOpen(true)}
					rightIcon={<TriangleUpIcon />}
					colorScheme="black"
					variant="outline"
					p="0px 30px"
					borderRadius="30px">
					Trailer
				</Button>
			</Link>
		</React.Fragment>
	);
}

export default VideoModal;
