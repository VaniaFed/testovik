import React from 'react';
import classNames from 'classnames/bind';

import styles from './test-item.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';
import { Link } from '@/components/ui/link';

const cx = classNames.bind(styles);

export const TestItem: FC<Props> = ({ title, testId, questionNumber, canEdit = false, className }) => {
	return (
		<div className={cx('test-item', className)}>
			<Link href={`/tests/${testId}`} level="h3" color="black">
				<Heading size="2" className={cx('test-item__title')}>
					{title}
				</Heading>
			</Link>
			<div className={cx('test-item__details')}>
				<Label className={cx('test-item__question-number')}>{questionNumber} вопросов</Label>
				{canEdit && (
					<Link href={`/tests/${testId}/edit`} level="paragraph" color="blue">
						Редактировать
					</Link>
				)}
			</div>
		</div>
	);
};
