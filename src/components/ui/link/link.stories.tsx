// cSpell:disable
import { Link } from './link';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Link> = {
	component: Link,
};

type Story = StoryObj<typeof Link>;

export const DefaultLink: Story = {
	render: () => (
		<Link href="https://www.kinopoisk.ru/" isExternal>
			Go to Kinopoisk
		</Link>
	),
};

export const LinkAsButtonAccent: Story = {
	render: () => (
		<Link href="https://www.kinopoisk.ru/" isExternal level="button_accent" color="blue_reversed">
			Go to Kinopoisk
		</Link>
	),
};

export const H1Link: Story = {
	render: () => (
		<Link href="https://www.kinopoisk.ru/" isExternal level="h1">
			Go to Kinopoisk
		</Link>
	),
};

export const H2Link: Story = {
	render: () => (
		<Link href="https://www.kinopoisk.ru/" isExternal level="h2">
			Go to Kinopoisk
		</Link>
	),
};

export const H3Link: Story = {
	render: () => (
		<Link href="https://www.kinopoisk.ru/" isExternal level="h3">
			Go to Kinopoisk
		</Link>
	),
};

export const LabelLink: Story = {
	render: () => (
		<Link href="https://www.kinopoisk.ru/" isExternal level="label">
			Go to Kinopoisk
		</Link>
	),
};

export const ParagraphLink: Story = {
	render: () => (
		<Link href="https://ru.lipsum.com/" isExternal level="paragraph">
			Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
			используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное
			распределение букв и пробелов в абзацах, которое не получается при простой дубликации &#171;Здесь ваш
			текст.. Здесь ваш текст.. Здесь ваш текст..&#187; Многие программы электронной вёрстки и редакторы HTML
			используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам &#171;lorem
			ipsum&#187; сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За
			прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые -
			намеренно (например, юмористические варианты).
		</Link>
	),
};
export default meta;
