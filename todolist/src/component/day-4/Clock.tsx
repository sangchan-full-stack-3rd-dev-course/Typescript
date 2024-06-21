import { useState } from "react";

const Clock : React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    return (
        <div>
            <h2>현재 시간 : {time.toLocaleTimeString()}</h2>
            <button onClick={() => {
                setInterval(() => {
                    setTime(new Date());
                },1000);
            }}>시작</button>
        </div>
    );
};

export default Clock;