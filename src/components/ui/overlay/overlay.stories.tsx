import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './overlay';
import { Heading } from '@/components/ui/typography/heading';

const meta: Meta<typeof Overlay> = {
	component: Overlay,
};

type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {
	render: () => (
		<div
			style={{
				backgroundImage:
					'url(https://www.zdnet.com/a/img/resize/9738cb7325ce228e9029cb8a0a454e9e0828a22b/2022/09/05/c70fdeec-fd32-4d1c-96fe-d5dfe2f63da4/img-1001.jpg?auto=webp&width=1280)',
				backgroundPosition: 'center center',
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
			}}>
			<Overlay>
				<div style={{ backgroundColor: 'whitesmoke', padding: '24px' }}>
					<Heading>Content</Heading>
				</div>
			</Overlay>
		</div>
	),
};

export const WithDarkBackground: Story = {
	render: () => (
		<div
			style={{
				backgroundImage:
					'url(https://www.zdnet.com/a/img/resize/9738cb7325ce228e9029cb8a0a454e9e0828a22b/2022/09/05/c70fdeec-fd32-4d1c-96fe-d5dfe2f63da4/img-1001.jpg?auto=webp&width=1280)',
				backgroundPosition: 'center center',
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
			}}>
			<Overlay withDarkBackground>
				<div style={{ backgroundColor: 'whitesmoke', padding: '24px', zIndex: 2 }}>
					<Heading>Content</Heading>
				</div>
			</Overlay>
		</div>
	),
};
export default meta;
