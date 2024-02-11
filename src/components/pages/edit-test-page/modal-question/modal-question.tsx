'use client';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames/bind';
import { Modal } from '@/components/ui/modal/modal';
import { Heading } from '@/components/ui/typography/heading';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { PlusBold } from '@/components/ui/icons/plus-bold';
import { Cross } from '@/components/ui/icons/cross';
import { IconButton } from '@/components/ui/icon-button';
import { Label } from '@/components/ui/typography/label';
import { DragDots } from '@/components/ui/icons/drag-dots';
import {
	AnswerField,
	useModalQuestionForm,
} from '@/components/pages/edit-test-page/modal-question/use-modal-question-form';
import styles from './modal-question.module.scss';
import type { FC } from 'react';
import type { ModalQuestionProps } from './props';
import type { MoveAnswerPosition } from '@/reduxjs/modules/tests';
import type { InputChangeEvent, InputFocusEvent } from '@/types/common';

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
		handleUpdateAnswer,
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
			closable
			closeModal={close}
			header={<Heading size="1">{headerTitle}</Heading>}
			footer={
				<>
					<Button variant="accent" form="question-form">
						{mode === 'create' ? 'Добавить' : 'Изменить'}
					</Button>
					{questionType !== 'number' && (
						<Button
							type="button"
							onClick={() => append({ text: '', is_right: false })}
							startIcon={<PlusBold color="white" />}
							variant="secondary">
							Добавить ответ
						</Button>
					)}
				</>
			}>
			<Form id="question-form" onSubmit={handleSubmit(onSubmit)} formError={errors.root?.message}>
				<Field id="question-form-question" label="Вопрос" errMessage={errors.question?.message}>
					<Input
						id="question-form-question"
						placeholder="Введите вопрос..."
						autoFocus
						{...register('question')}
					/>
				</Field>
				{questionType === 'number' ? <Label>Ответ</Label> : <Label>Ответы</Label>}
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
				) : typeof window !== 'undefined' ? (
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
																			onChange: (e: InputChangeEvent) => {
																				const answer: AnswerField = {
																					id: String(field.answerId),
																					text: field.text,
																					is_right: e.target
																						.checked as boolean,
																					position: field.position as Omit<
																						MoveAnswerPosition,
																						'id'
																					>,
																				};
																				handleUpdateAnswer(
																					mode,
																					answer,
																					index,
																					question,
																				);
																			},
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
																	onBlur: (e: InputFocusEvent) => {
																		if (e.target.value === field.text) {
																			return;
																		}

																		const answer: AnswerField = {
																			id: String(field.answerId),
																			text: e.target.value,
																			is_right: field.is_right as boolean,
																			position: field.position,
																		};
																		handleUpdateAnswer(
																			mode,
																			answer,
																			index,
																			question,
																		);
																	},
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
				) : null}
			</Form>
		</Modal>
	);
};
