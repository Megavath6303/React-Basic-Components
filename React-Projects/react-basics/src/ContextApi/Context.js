import React from 'react'

const userContext = React.createContext()

const UserProvider = userContext.Provider
const userConsumer = userContext.Consumer

export {UserProvider , userConsumer}

export default userContext