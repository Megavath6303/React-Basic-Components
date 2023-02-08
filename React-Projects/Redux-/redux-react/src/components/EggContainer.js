import React from 'react'
import {connect} from 'react-redux'
import { buyEgg } from '../redux/EggAction'

const EggContainer = (props) => {
  return (
    <div>
      <h1>Number of Eggs - {props.EggsNums}</h1>
      <button onClick={props.eggFunc}>Eggs</button>
    </div>
  )
}
const mapStateToProps =state => {
    return {
        EggsNums : state.egg.numOfEggs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        eggFunc : () => dispatch(buyEgg())
    }
}

export default  connect(mapStateToProps,mapDispatchToProps) (EggContainer)
