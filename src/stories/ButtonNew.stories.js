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

export const UserPrimary = {
    args: {
        // primary: true,
        label: '버튼',
        type: 'user-primary',
    },
};

export const Secondary = {
    args: {
        label: '버튼',
        type: 'user-secondary',
    },
};

export const SecondaryStroke = {
    args: {
        label: '버튼',
        type: 'user-secondary--stroke',
    },
};

export const Quaternary = {
    args: {
        label: '버튼',
        type: 'user-quaternary',
    },
};

export const QuaternaryStroke = {
    args: {
        label: '버튼',
        type: 'user-quaternary--stroke',
    },
};

export const Danger = {
    args: {
        label: '버튼',
        type: 'danger',
    },
};

export const Success = {
    args: {
        label: '버튼',
        type: 'success',
    },
};

export const Disabled = {
    args: {
        label: '버튼',
        disabled: true,
        type: 'disabled',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: '버튼',
        type: 'user-primary',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: '버튼',
        type: 'user-primary',
    },
};
