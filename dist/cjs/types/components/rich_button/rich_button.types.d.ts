import { ReactElement } from 'react';
export declare type RichButtonType = {
    additionalClasses?: String[];
    children: String | ReactElement | ReactElement[];
    mode?: 'primary' | 'secondary' | 'tertiary';
    outline?: Boolean;
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
    transparent?: Boolean;
};
