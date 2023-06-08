'use client';
import Logo from '@/components/Logo';
import styled from 'styled-components';

export default function Home() {
	return (
		<main>
			<Section>
				<Logo />
				<h1>MBX Web Agency</h1>
				<p>Let's build something great together</p>
			</Section>
		</main>
	);
}

const Section = styled.section`
	background-color: #6376ca;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 4rem;
`;
