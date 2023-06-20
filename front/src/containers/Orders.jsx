import React, { useEffect, useReducer } from 'react';

import { fetchLineFoods } from '../apis/line_foods';
import {
  initialState,
  lineFoodsActionTypes,
  lineFoodsReducer,
} from '../reducers/lineFoods';

export const Orders = () => {
  const [state, dispatch] = useReducer(lineFoodsReducer, initialState);
  useEffect(() => {
    dispatch({ type: lineFoodsActionTypes.FETCHING })
    fetchLineFoods()
    .then((data) => 
      dispatch({
        type: lineFoodsActionTypes.FETCHING_SUCCESS,
        payload: {
            lineFoodsSummary: data,
        }
      })
    )
    .catch((e) => console.error(e));
  }, []);
  return (
    <>
      注文画面
    </>
  )
}
