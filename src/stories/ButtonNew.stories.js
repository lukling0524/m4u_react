import ButtonNew from './ButtonNew';

export default {
    title: 'Example/ButtonNew',
    component: ButtonNew,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const Primary = {
    args: {
        primary: true,
        label: '버튼',
    },
};

export const Secondary = {
    args: {
        label: '버튼',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: '버튼',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: '버튼',
    },
};
