type ID = number | string;

const userId: ID = 5;
const postId: ID = "f7ln24m91z";

type Coords = [number, number];

const coords: Coords = [50.4501, 30.5234];

type ReqStatus = "request" | "success" | "error";
const requestStatus: ReqStatus = "success";

console.log(userId, postId, coords, requestStatus);

export {};
