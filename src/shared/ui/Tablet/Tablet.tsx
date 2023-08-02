import classNames from "classnames";
import cls from './Tablet.module.scss'
import {FC, PropsWithChildren} from "react";

interface TabletProps {
    className?: string;
    imageUrl?: string;
    title?: string;
    price?: number;


};
export const Tablet: FC<PropsWithChildren<TabletProps>> = (props) => {

    const {
        className,
        price,
        title,
        imageUrl,
    } = props;

    return (
        <div className={classNames(cls.Tablet, {}, [className])}>
            <div className={cls.imageTablet}>
                <img src={imageUrl} alt=""/>
            </div>
            <div>
                {title}
            </div>
            <div>
                <span>{price}</span>
                <span>{title}</span>
            </div>
            <h1>{price}</h1>
        </div>
    );
};