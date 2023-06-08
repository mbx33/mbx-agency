import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
	return (
		<Form>
			<div>ContactForm</div>
		</Form>
	);
};

export default ContactForm;

const Form = styled.form`
	background-color: #636a87;
	color: #fff;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 4rem;
`;
