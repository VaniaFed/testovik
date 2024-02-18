import classNames from 'classnames/bind';
import { Inter } from 'next/font/google';

import { BoxContainer } from '@/components/layout/box-container';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { Providers } from '@/components/utils/providers';

import styles from './layout.module.scss';

import './globals.scss';

import type { Metadata } from 'next';

const cx = classNames.bind(styles);

const inter = Inter({
	subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
	weight: ['400', '500', '600', '900'],
	adjustFontFallback: true,
});

export const metadata: Metadata = {
	title: 'Создать тест. Создать, пройти и поделиться тестами',
	description:
		'Давно искал бесплатное и удобное приложение для создания тестов? У нас как создавать новые, так и проходить тесты других пользователей. Нашим приложением пользуются все популярные онлайн школы: от hexlet до нетологии. Попробуй прямо сейчас!',
	keywords: 'Тест, школа, обучение, организация учебного материала, управление',
	authors: { name: 'Федяков Иван Дмитриевич', url: 'https://github.com/VaniaFed/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang="en">
				<body className={cx(inter.className)}>
					<div className={cx('layout')}>
						<Header className={cx('layout__header')} />
						<main className={cx('layout__main')}>
							<BoxContainer className={cx('layout__container')}>{children}</BoxContainer>
						</main>
						<Footer className={cx('layout__footer')} />
					</div>
				</body>
			</html>
		</Providers>
	);
}
