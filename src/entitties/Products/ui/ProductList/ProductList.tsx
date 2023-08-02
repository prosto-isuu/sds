import {Tablet} from "shared/ui/Tablet/Tablet";
import classNames from "classnames";
import cls from './ProductList.module.scss'
import {FC} from "react";

const clothesData = [{
    id: 1,
    name: "Clothes",
    image: "https://picsum.photos/640/640?r=2408",
    creationAt: "2023-07-30T11:25:02.000Z",
    updatedAt: "2023-07-30T11:25:02.000Z"
},{
    id: 2,
    name: "Clothes",
    image: "https://picsum.photos/640/640?r=2408",
    creationAt: "2023-07-30T11:25:02.000Z",
    updatedAt: "2023-07-30T11:25:02.000Z"
},{
    id: 3,
    name: "Clothes",
    image: "https://picsum.photos/640/640?r=2408",
    creationAt: "2023-07-30T11:25:02.000Z",
    updatedAt: "2023-07-30T11:25:02.000Z"
},{
    id: 4,
    name: "Clothes",
    image: "https://picsum.photos/640/640?r=2408",
    creationAt: "2023-07-30T11:25:02.000Z",
    updatedAt: "2023-07-30T11:25:02.000Z"
},]


interface ProductListProps {
    className?: string;
};
export const ProductList: FC<ProductListProps> = ({className}) => {
    return (
        <div className={classNames(cls.ProductList, {}, [className])}>
            {
                clothesData.map(({id, name, image,}) => {
                    return <Tablet key={id} title={name} imageUrl={image} price={12}/>
                })
            }
        </div>
    );
};
