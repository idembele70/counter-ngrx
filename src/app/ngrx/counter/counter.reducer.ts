import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.actions"

const initialState = 0

const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
)
export {
  counterReducer
}