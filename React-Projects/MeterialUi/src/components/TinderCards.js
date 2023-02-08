import React,{useState , useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import db from './Firebase'

const TinderCards = () => {
    const [people ,setPeople ] = useState([])

    useEffect(() => {
       db.collection('people').onSnapshot(snapshot => {
        setPeople(snapshot.docs.map(doc => doc.data()))
       })
    })

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
  return (
    <div>{
      people.map(person => (
        <TinderCard onSwipe={onSwipe} key={person.name} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
            <div style={{ backgroundImage : `url(${person.url})`}}>
                <h1>{person.name}</h1>
            </div>
        </TinderCard>
      ))}
    </div>
  )
}

export default TinderCards
