import classNames from 'classnames/bind';
import React from 'react';

import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';

import styles from './test-page-header.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const TestPageHeader: FC<Props> = ({ className, questionLength, title, onChangeTitle }) => {
	return (
		<header className={cx('test-page-header', className)}>
			<Heading
				className={cx('test-page-header__heading')}
				contentEditable
				suppressContentEditableWarning={true}
				onBlur={onChangeTitle}
			>
				{title}
			</Heading>
			<Label>{questionLength} вопросов</Label>
		</header>
	);
};
