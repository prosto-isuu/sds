import classNames from 'classnames';
import {Link, LinkProps} from 'react-router-dom';
import {FC} from 'react';
import cls from './AppLink.module.scss';



interface AppLinkProps extends LinkProps {
    className?: string;
    to: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
