import classNames from "classnames";
import cls from './LoginPages.module.scss'
import {FC} from "react";

interface LoginPagesProps {
    className?: string;
};
export const LoginPage: FC<LoginPagesProps> = ({className}) => {
    return (
        <div className={classNames(cls.LoginPages, {}, [className])}>
                ''''''dede
        </div>
    );
};