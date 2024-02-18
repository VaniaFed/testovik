'use client';
import classNames from 'classnames/bind';
import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { AppendAnswerButton } from '@/components/pages/edit-test-page/modal-question/append-answer-button';
import { useModalQuestionForm } from '@/components/pages/edit-test-page/modal-question/use-modal-question-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Field } from '@/components/ui/field';
import { Form } from '@/components/ui/form';
import { IconButton } from '@/components/ui/icon-button';
import { Cross } from '@/components/ui/icons/cross';
import { DragDots } from '@/components/ui/icons/drag-dots';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal/modal';
import { Heading } from '@/components/ui/typography/heading';
import { Label } from '@/components/ui/typography/label';

import styles from './modal-question.module.scss';

import type { ModalQuestionProps } from './props';
import type { InputChangeEvent, InputFocusEvent } from '@/types/common';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const ModalQuestion: FC<ModalQuestionProps> = ({
	mode,
	question,
	questionType: _questionType,
	testId,
	close,
	className,
}) => {
	// in create mode there is no << question >>
	const questionType = question?.question_type || _questionType;

	const {
		register,
		handleSubmit,
		getValues,
		append,
		remove,
		onSubmit,
		handleChangeIsRight,
		handleChangeAnswerText,
		handleSetAnswersToDelete,
		handleDrag,
		fields,
		errors,
	} = useModalQuestionForm({
		mode,
		question,
		questionType,
		testId,
		close,
	});

	const headerTitle = mode === 'create' ? 'Добавить вопрос' : 'Редактирование вопроса';

	return (
		<Modal
			className={cx('modal-question', className)}
			overlayContentClassName={cx('modal-question__content')}
			close={close}
			header={<Heading size="1">{headerTitle}</Heading>}
			footer={
				<>
					<Button variant="accent" form="question-form">
						{mode === 'create' ? 'Добавить' : 'Изменить'}
					</Button>
					{questionType !== 'number' && (
						<AppendAnswerButton
							onAppend={() =>
								append({
									text: '',
									is_right: false,
									position: {
										source: undefined,
										destination: undefined,
									},
								})
							}
						/>
					)}
				</>
			}>
			<Form id="question-form" onSubmit={handleSubmit(onSubmit)} errMessage={errors.root?.message}>
				<Field id="question-form-question" label="Вопрос" errMessage={errors.question?.message}>
					<Input
						id="question-form-question"
						placeholder="Введите вопрос..."
						autoFocus
						{...register('question')}
					/>
				</Field>
				<Label>{questionType === 'number' ? 'Ответ' : 'Ответы'}</Label>
				{questionType === 'number' ? (
					<>
						<Field id="question-form-number-answer" errMessage={errors.answer?.message}>
							<Input
								placeholder="Введите ответ..."
								id="question-form-number-answer"
								type="number"
								{...register(`answer`)}
							/>
						</Field>
					</>
				) : (
					<DragDropContext onDragEnd={handleDrag}>
						<ul>
							<Droppable droppableId="droppable">
								{(provided) => (
									<div ref={provided.innerRef} {...provided.droppableProps}>
										{fields.map((field, index) => {
											return (
												<Draggable
													key={`answers[${index}]`}
													draggableId={`answers[${index}]`}
													index={index}>
													{(provided) => (
														<Field
															className={cx('modal-question__answer')}
															id={`question-form-answer-${field.id}`}
															leftContent={
																<>
																	<IconButton zeroSpacing>
																		<DragDots {...provided.dragHandleProps} />
																	</IconButton>
																	<Checkbox
																		{...register(`answers.${index}.is_right`, {
																			onChange: (e: InputChangeEvent) =>
																				handleChangeIsRight(e, field, index),
																		})}
																		_size="18"
																	/>
																</>
															}
															rightContent={
																getValues().answers!.length >= 2 && (
																	<IconButton
																		zeroSpacing
																		onClick={() => {
																			remove(index);
																			if (field.answerId && mode === 'edit') {
																				handleSetAnswersToDelete(
																					field.answerId,
																				);
																			}
																		}}>
																		<Cross />
																	</IconButton>
																)
															}
															errMessage={
																errors.answers && errors.answers[index]?.text?.message
															}
															key={field.id}
															innerRef={provided.innerRef}
															{...provided.draggableProps}>
															<Input
																placeholder="Введите ответ..."
																id={`question-form-answer-${field.id}`}
																{...register(`answers.${index}.text`, {
																	onBlur: (e: InputFocusEvent) =>
																		handleChangeAnswerText(e, field, index),
																})}
															/>
														</Field>
													)}
												</Draggable>
											);
										})}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</ul>
					</DragDropContext>
				)}
			</Form>
		</Modal>
	);
};
