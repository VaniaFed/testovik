import { AnswerProps } from '@/components/ui/question/answer-props';

export interface Props extends AnswerProps {
	checkIfAnswerChecked?: (answerId: number) => boolean;
}
