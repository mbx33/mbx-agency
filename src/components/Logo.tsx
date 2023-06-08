'use client';

import React, { use } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import profilePic from '/public/assets/profile.jpg';

const Logo = () => {
	return (
		<Container>
			<div className="logo-img">
				<Image src={profilePic} alt="profile picture" />
				<p>Matt Baxter</p>
			</div>
			<p className="avail">Available</p>
		</Container>
	);
};

export default Logo;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.logo-img {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		img {
			border-radius: 50%;
			width: 4rem;
			height: 4rem;
			background-size: cover;
		}
	}

	.avail {
		::before {
			content: '';
			display: inline-block;
			width: 1rem;
			height: 1rem;
			background-color: #00ff00;
			border-radius: 50%;
			margin-right: 0.5rem;
			box-shadow: 0 0 0.2 0.2rem #000;
		}

		font-size: 0.75rem;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
	}
`;
