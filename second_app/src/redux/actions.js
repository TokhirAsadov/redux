export const inc = () =>({ type: "INCREMENT" });
export const dec = () =>({ type: "DECREMENT" });
export const random = () =>({ type: "RANDOM", payload: Math.floor(Math.random() * 10) });
