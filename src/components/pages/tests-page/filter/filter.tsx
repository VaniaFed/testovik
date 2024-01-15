import React from 'react';
import classNames from 'classnames/bind';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import styles from './filter.module.scss';
import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Filter: FC<Props> = ({ value, onChange, onClear, className }) => {
	return (
		<div className={cx('filter', className)}>
			<Field id="tests-filter" label="Найти тест" labelClassName={cx('filter__label')}>
				<Input id="tests-filter" placeholder="География" onChange={onChange} onClear={onClear} value={value} />
			</Field>
		</div>
	);
};
