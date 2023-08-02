import classNames from "classnames";
import cls from './Sidebar.module.scss'
import {FC, useState} from "react";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";
import {AppLink} from "../../../shared/ui/AppLink/AppLink";
// @ts-ignore
import DarkIcon from '../../../shared/assets/icons/dark.svg'
// @ts-ignore
import LightIcon from 'shared/assets/icons/light.svg';

interface SidebarProps {
    className?: string;
};
export const Sidebar: FC<SidebarProps> = ({className}) => {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            {/*<AppLink to={'/'}>*/}
            {/*    <img src={LightIcon} alt=""/>*/}
            {/*</AppLink>*/}
            {/*<AppLink to={'profile'}>*/}
            {/*    <img src={DarkIcon} alt=""/>*/}
            {/*</AppLink>*/}
            {/*<AppLink to={'cart'}>*/}

            {/*</AppLink>*/}
            {/*<Button>*/}
            {/*    <img src={DarkIcon} alt=""/>*/}
            {/*</Button>*/}
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.OUTLINE}
                className={cls.collapseBtn}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
};