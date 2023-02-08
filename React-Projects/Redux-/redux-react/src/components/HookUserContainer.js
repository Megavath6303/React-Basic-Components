import React from 'react'
import {connect} from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers } from '../Users/userAction'

const HookUserContainer = ({dataUser , fetchUsers}) => {
    useEffect(() => {
        fetchUsers()
    })
  return dataUser.loading? <h1>loading...</h1> : dataUser.error ? <h2>{dataUser.error}</h2> : (
    <div>
       <h3>user data</h3>
        {dataUser.users.map(user => <p>{user.name}</p>)}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        dataUser : state.user
    }  
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (HookUserContainer)