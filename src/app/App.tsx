import { Header } from '../widgets/Header';
import classNames from "classnames";
import {Suspense} from "react";
import './styles/index.scss';
import {Sidebar} from "../widgets/Sidebar";
import {AppRouter} from "./providers/router/AppRouter";
import {Tablet} from "../shared/ui/Tablet/Tablet";
import {ProductList} from "../entitties/Products";
import {Counter} from "entitties/Counter";

const App = () => {

    const theme = true;

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Загрузка</div>}>
                <Header/>
                {/*<Counter/>*/}
                <Counter/>
                <div className='content-page'>
                    <Sidebar />
                    <ProductList />
                </div>
            </Suspense>
        </div>
    );
};

export default App;