import classNames from "classnames";
import cls from './Header.module.scss'
import {FC, useState} from "react";
import {NavLink} from "react-router-dom";
import {Button} from "../../../shared/ui/Button/Button";
// @ts-ignore
import logo from '../../../shared/assets/sanarip_shop_logo.png';
// @ts-ignore
import DarkIcon from '../../../shared/assets/icons/dark.svg';
// @ts-ignore
import LightIcon from '../../../shared/assets/icons/dark.svg';
import {AppLink} from "../../../shared/ui/AppLink/AppLink";

interface HeaderProps {
    className?: string;
};
export const Header: FC<HeaderProps> = ({className}) => {

    const [theme] = useState(true);

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <div className={cls.headerLogo}>
                <AppLink to={'/'}>
                    <img
                        src={logo}
                        alt="логотип-магазина"
                    />
                </AppLink>
            </div>
            <div>
                <Button>
                    Тема
                </Button>
                <Button>
                    Профиль
                </Button>
            </div>
        </div>
    );
};