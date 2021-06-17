import { useState } from 'react';

interface IProps {
    value: number
}

const CounterApp = (props: IProps) => {
    const { value } = props

    const [counter, setCounter] = useState(0);


    const onhandleAdd = () => setCounter(counter + 1);

    const onHandleRemove = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        }
    }
    const onHnadleReset = () => setCounter(value);

    return (
        <>
            <h1>Counter App</h1>
            <p>{counter}</p>
            <button onClick={onhandleAdd}>+1</button>
            <button onClick={onHnadleReset}>Reset</button>
            <button onClick={onHandleRemove}>-1</button>
        </>
    )
}

CounterApp.defaultProps = {
    value: 10
}
export default CounterApp
