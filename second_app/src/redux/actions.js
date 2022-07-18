export const inc = () =>({ type: "INCREMENT" });
export const dec = () =>({ type: "DECREMENT" });
export const random = (number) =>({ type: "RANDOM", payload: number });
