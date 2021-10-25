import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {

    const temperature = useSelector((state) => state.temperature.temperature);
    //const { count } = useSelector((state) => state.counter);


    return (
        <div>Temperature: {temperature}</div>
    )
}