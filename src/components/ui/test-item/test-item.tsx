import classNames from 'classnames/bind';
import React from 'react';

import { Stack } from '@/components/layout/stack';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';

import styles from './test-item.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const TestItem: FC<Props> = ({
	title,
	testId,
	questionNumber,
	canEdit = false,
	className,
	onClick = () => {},
}) => {
	return (
		<li className={cx('test-item', className)}>
			<Button variant="text_black" onClick={onClick} className={cx('test-item__title')}>
				<Heading size="2">{title}</Heading>
			</Button>
			<Stack direction="row" gap="9">
				<Label className={cx('test-item__question-number')}>{questionNumber} вопросов</Label>
				{canEdit && (
					<Link href={`/tests/${testId}/edit`} level="paragraph" color="blue">
						Редактировать
					</Link>
				)}
			</Stack>
		</li>
	);
};
