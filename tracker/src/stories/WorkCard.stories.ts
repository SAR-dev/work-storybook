import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator } from '@storybook/angular';
import { WorkCardComponent } from 'src/app/work-card/work-card.component';


export default {
    title: 'A L T A I R/Work Card',
    component: WorkCardComponent,
    decorators: [componentWrapperDecorator((story) => `<div style="width: 420px; margin: 2rem">${story}</div>`)],
    argTypes: {
        spacing: {
            options: ['spacing-5', 'spacing-10', 'spacing-15'],
            control: { type: 'select' },
        },
        theme: {
            options: ['dark', 'light'],
            control: { type: 'select' },
        },
        badgeBackgroundColor: { control: 'color' },
        badgeTextColor: { control: 'color' },
    },
} as Meta;

const Template: Story<WorkCardComponent> = (args: WorkCardComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    badgeText: "きくや＿タスク",
    theme: "dark",
    spacing: "spacing-10"
};

export const Dark = Template.bind({});
Dark.args = {
    badgeText: "きくや＿タスク",
    theme: "dark",
    spacing: "spacing-10"
};

export const Light = Template.bind({});
Light.args = {
    badgeText: "きくや＿タスク",
    theme: "light",
    spacing: "spacing-10"
};