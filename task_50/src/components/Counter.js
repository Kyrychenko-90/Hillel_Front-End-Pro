import "./Counter.css";

const Counter = ({counters, handleImageClick }) => {
    return (
        <div className = "holder">
            <div className = "holder__card">
                {counters.map((counter, index) => (
                    <div className = "holder__card-item" key={index}>
                        <img
                            className = "holder__card-item-img"
                            src={`/img/smile${index + 1}.png`}
                            alt="img"
                            onClick={() => handleImageClick(index)}
                        />
                        <span className = "holder__card-item-counter">{counter}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Counter;