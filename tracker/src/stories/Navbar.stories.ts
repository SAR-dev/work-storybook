import { Story, Meta } from '@storybook/angular/types-6-0';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

export default {
    title: 'A L T A I R/Navbar',
    component: NavbarComponent,
    argTypes: {
        logoColor: { control: 'color' },
    },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
    props: args,
});

export const BasicNavbar = Template.bind({});
BasicNavbar.args = {
  name: 'ALTAIR',
};