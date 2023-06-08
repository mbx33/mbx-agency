import { Metadata } from 'next';

// Components
import Logo from '@/components/Logo';

export const metadata: Metadata = {
	title: 'MBX- Get Started',
	description: "Let's get Started",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Logo />
				{children}
			</body>
		</html>
	);
}
