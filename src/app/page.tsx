'use client';
import styled from 'styled-components';

export default function Home() {
	return (
		<main>
			<Section>
				<h1>MBX Web Agency</h1>
			</Section>
		</main>
	);
}

const Section = styled.section`
	background-color: #6376ca;
	color: #fff;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 4rem;
`;
