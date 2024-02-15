import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { Heading } from '@/components/ui/typography/heading';
import { Subtitle } from '@/components/ui/typography/subtitle';
import { Paragraph } from '@/components/ui/typography/paragraph';
import { Link } from '@/components/ui/link';
import { Label } from '@/components/ui/typography/label';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';

const meta: Meta<typeof Modal> = {
	component: Modal,
};

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	render: () => (
		<Modal
			header={
				<>
					<Heading>Your heading</Heading>
					<Subtitle>Subtitle</Subtitle>
					<Paragraph>As many content as you wish</Paragraph>
					<Link href="/">Link</Link>
				</>
			}
			footer={
				<>
					<Label>Any footer content</Label>
					<Button variant="accent">Hi</Button>
				</>
			}>
			<Heading size="2">Your content here</Heading>
		</Modal>
	),
};

export const Closable: Story = {
	render: () => (
		<Modal
			header={
				<>
					<Heading>Your heading</Heading>
					<Subtitle>Subtitle</Subtitle>
					<Paragraph>As many content as you wish</Paragraph>
					<Link href="/">Link</Link>
				</>
			}
			footer={
				<>
					<Label>Any footer content</Label>
					<Button variant="accent">Hi</Button>
				</>
			}
			close={console.log}>
			<Heading size="2">Your content here</Heading>
			...some extra content...
			<br />
			<Loader />
			<br />
			...some extra content...
		</Modal>
	),
};
export default meta;
