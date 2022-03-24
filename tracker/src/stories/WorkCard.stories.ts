import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator } from '@storybook/angular';
import { WorkCardComponent } from 'src/app/work-card/work-card.component';


export default {
    title: 'A L T A I R/Work Card',
    component: WorkCardComponent,
    decorators: [componentWrapperDecorator((story) => `<div style="width: 420px; margin: 2rem">${story}</div>`)],
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

const Template: Story<WorkCardComponent> = (args: WorkCardComponent) => ({
    props: args,
});

export const BasicIconButton = Template.bind({});
BasicIconButton.args = {
    
};