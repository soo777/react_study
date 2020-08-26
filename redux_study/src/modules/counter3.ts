import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});
export const increaseAsync = () => ({type:INCREASE_ASYNC});
export const decreaseAsync = () => ({type:DECREASE_ASYNC});

function* increaseSaga () {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga () {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga () {
  // @ts-ignore
  yield takeEvery(INCREASE_ASYNC, increase());
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

export default function counter3(state = initialState, action:any) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
