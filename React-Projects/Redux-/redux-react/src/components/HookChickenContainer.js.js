import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { byeChicken } from '../Chicken/chickenAction';

const HookChickenContainer = () => {


    const ChickenNum = useSelector(state => state.chicken.numOfChicken);
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(byeChicken())}>Chicken- {ChickenNum}</button>
    </div>
  )
}

export default HookChickenContainer
