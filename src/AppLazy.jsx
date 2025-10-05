import React, {lazy, Suspense} from "react";
import CounterA from "../CustomHooks/CounterA";

const MyLazyComponent  = lazy(() => import ('./MyLazyComponent'));


function AppLazy(){
    return(
        <>
        <div>
            <header>
                <h1>Welcome to React App</h1>
                <p>This is content loads immediatly.</p>
            </header>
            <main>
                <Suspense fallback={<h1>Loading lazy component...</h1>}>
                    <MyLazyComponent/>
                    <CounterA/>
                </Suspense>
            </main>
        </div>
        </>
    )
}

export default AppLazy;