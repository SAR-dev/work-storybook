import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator } from '@storybook/angular';
import { IconButtonComponent } from 'src/app/icon-button/icon-button.component';

export default {
    title: 'A L T A I R/Icon Button',
    component: IconButtonComponent,
    decorators: [componentWrapperDecorator((story) => `<div style="width: 350px; margin: 2rem">${story}</div>`)],
    argTypes: {
        circleColor: {
            options: ['gray', 'blue', 'red', 'pink', 'purple', 'yellow', 'green', 'indigo', 'teal', 'cyan'],
            control: { type: 'select' },
        },
        backgroundColor: { control: 'color' },
        textColor: {
            options: ['black', 'white'],
            control: { type: 'select' },
        },
    },
} as Meta;

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
});

export const BasicIconButton = Template.bind({});
BasicIconButton.args = {
    text: 'Icon Button',
    count: 4,
    circleColor: "yellow",
    backgroundColor: "#218291",
    textColor: "white"
};