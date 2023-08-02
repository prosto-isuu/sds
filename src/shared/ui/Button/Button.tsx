import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import classNames from "classnames";

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
}


export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    // const mods: Record<string, boolean> = {
    //     [cls.square]: square,
    //     [cls[size]]: true,
    //     [cls.theme]: true,
    // };

    return (
        <button
            type="button"
            className={classNames(cls.Button, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
