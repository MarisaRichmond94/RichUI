import './rich_button.scss';
import { ReactElement } from 'react';
interface RichButtonProps {
    additionalClassNames?: String[];
    children: String | ReactElement | ReactElement[];
    mode?: 'primary' | 'secondary' | 'tertiary';
    outline?: Boolean;
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
    transparent?: Boolean;
}
declare const RichButton: ({ additionalClassNames, children, mode, outline, size, transparent, ...props }: RichButtonProps) => JSX.Element;
export default RichButton;
