import classNames from "classnames";
import cls from './Modal.module.scss'
import {FC} from "react";

interface ModalProps {
    className?: string;
};
export const Modal: FC<ModalProps> = ({className}) => {
    return (
        <div className={classNames(cls.Modal, {}, [className])}>

        </div>
    );
};