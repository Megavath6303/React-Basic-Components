import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { buyEgg } from '../redux/EggAction';

const HookEggCotainer = () => {


    const EggsNum = useSelector(state => state.egg.numOfEggs);
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(buyEgg())}>Eggs- {EggsNum}</button>
    </div>
  )
}

export default HookEggCotainer
