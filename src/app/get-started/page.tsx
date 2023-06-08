'use client';
import ContactForm from '@/components/ContactForm';
import React from 'react';
import styled from 'styled-components';

const GetStartedPage = () => {
	return (
		<Main>
			Let's get started
			<ContactForm />
		</Main>
	);
};

export default GetStartedPage;

const Main = styled.main`
	background-color: #636a87;
	color: #fff;
	font-size: 4rem;
`;
