import { UserAnswer } from '@/components/pages/pass-test/use-pass-test';
import { AnswerProps } from '@/components/ui/question/answer-props';

export interface Props extends AnswerProps {
	checkIfAnswerChecked?: (answerId: number) => void;
}
