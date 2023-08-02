import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CounterActions} from "../model/slice/CounterSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {
    className?: string;
};


export const Counter: FC<CounterProps> = ({className}) => {

    const counterValue = useSelector(getCounterValue)
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => dispatch(CounterActions.decrement());

    return (
        <div>
            {/* @ts-ignore */}
            <h1>{counterValue}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};