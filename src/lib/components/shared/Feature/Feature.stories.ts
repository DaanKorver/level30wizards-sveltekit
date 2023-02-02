import type { Meta, StoryObj } from '@storybook/svelte';

import Feature from './Feature.svelte';

const meta = {
	title: 'Shared/Feature',
	component: Feature,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		link: 'https://github.com/DaanKorver'
	}
};
