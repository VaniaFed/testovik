import React from 'react';
import classNames from 'classnames/bind';
import styles from './tests-list.module.scss';
import { Stack } from '@/components/layout/stack';
import { TestItem } from '@/components/ui/test-item';
import { Paragraph } from '@/components/ui/typography/paragraph';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const TestsList: FC<Props> = ({ tests, user, className, onItemClick }) => {
	return (
		<Stack className={cx('tests-page__list', className)}>
			{tests && tests.length ? (
				tests.map((test, key) => (
					<TestItem
						title={test.title}
						testId={test.id}
						questionNumber={test.questions.length}
						key={key}
						canEdit={user ? user.is_admin : false}
						onClick={(e) => {
							e.preventDefault();

							onItemClick(test);
						}}
					/>
				))
			) : (
				<Paragraph>Тестов нет</Paragraph>
			)}
		</Stack>
	);
};
