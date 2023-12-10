import { SignInForm } from '@/app/signin/sign-in-form';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Modal } from '@/components/ui/modal';
import { Heading } from '@/components/ui/typography/heading';

const headerModal = (
	<>
		<Heading size="1">Вход</Heading>
	</>
);

const footerModal = (
	<>
		<Button variant="accent" form="sign-up-form">
			Войти
		</Button>
		<Link href="/signup" level="label">
			Зарегистрироваться
		</Link>
	</>
);

export default function SignInPage() {
	return (
		<Modal header={headerModal} footer={footerModal}>
			<SignInForm />
		</Modal>
	);
}
