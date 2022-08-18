import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/DynamicCounter/actions';

const DynamicCounter = () => {
        const count = useSelector((state) => state.dynamicCounter.value);

        const dispatch = useDispatch();

        const handleIncrement = (value) => {
                console.log('Increment')
                dispatch(increment(value))
        }

        const handleDecrement = value => {
                dispatch(decrement(value))
        }
        return (
                <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                        <h3 className="text-xl font-bold">Dynamic Counter</h3>
                        <div className="text-2xl font-semibold">{count}</div>
                        <div className="flex space-x-3">
                                <button
                                        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                                        onClick={() => handleIncrement(10)}
                                >
                                        Increment
                                </button>
                                <button
                                        className="bg-red-400 text-white px-3 py-2 rounded shadow"
                                        onClick={() => handleDecrement(10)}
                                >
                                        Decrement
                                </button>
                        </div>
                </div>
        );
};

export default DynamicCounter;