import { Story, Meta } from "@storybook/angular/types-6-0";
import { ButtonComponent } from "src/app/button/button.component";
import ButtonDocs from './ButtonDocs.mdx';

export default {
    title: "Pos Design/Button",
    component: ButtonComponent,
    argTypes: {
        text: {
            name: 'Label',
            description: 'Write something to show in button',
        },
        borderColor: {
            name: 'Border Color',
            description: 'Select a color from the color palette',
            control: 'color'
        },
        variant: {
            name: 'Variant',
            description: 'Select a variant',
            options: ["btn-primary", "btn-secondary", "btn-success", "btn-danger", "btn-info"],
            control: { type: 'select' },
        },
        radius: {
            name: 'Radius',
            description: 'Select a radius size for rounded border',
            options: ['rounded-md', 'rounded-lg', 'rounded-full'],
            control: { type: 'inline-radio' },
        },
        isLoading: {
            name: 'Loading',
            description: 'This helps detecting whether the button is doing something or not.',
        }
    },
    parameters: {
        docs: {
            page: ButtonDocs,
        },
    },
} as Meta;
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    text: "Storybook Button",
    variant: 'btn-primary',
    isLoading: false,
    radius: "rounded-lg"
};

export const Success = Template.bind({});
Success.args = {
    ...Default.args,
    variant: 'btn-success',
};

export const Error = Template.bind({});
Error.args = {
    ...Default.args,
    variant: 'btn-danger',
};
export const Loading = Template.bind({});
Loading.args = {
    ...Default.args,
    isLoading: true,
};

