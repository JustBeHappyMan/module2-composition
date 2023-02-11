import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Unuseful Thing" },
    { id: 1, value: 4, name: "Fork" },
    { id: 2, value: 0, name: "Plate" },
    { id: 3, value: 0, name: "Spoon" },
    { id: 4, value: 0, name: "Minimal  Box" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (counterId) => {
    setCounters(
      counters.map((counter) => {
        counter.id === counterId && counter.value++;

        return counter;
      })
    );
  };

  const handleDecrement = (counterId) => {
    setCounters(
      counters.map((counter) => {
        counter.id === counterId && counter.value--;

        return counter;
      })
    );
  };

  const handleDelete = (counterId) => {
    setCounters(counters.filter((counter) => counter.id !== counterId));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          {...count}
          key={count.id}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
