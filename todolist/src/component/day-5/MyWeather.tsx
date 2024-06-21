interface WeatherProps {
    weather : string;
    children : React.ReactNode;
}

const MyWeather : React.FC<WeatherProps> = ({weather, children}) => {
    return (
        <div>
            {children}<p></p>
            오늘의 날씨는 {weather} 입니다.
        </div>
    );
}

export default MyWeather