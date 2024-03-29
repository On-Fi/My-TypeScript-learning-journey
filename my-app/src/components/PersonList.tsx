import { Name } from './Person.types'

type PersonListProps = {
    names: Name[] 
    }

export const PersonList = (props: PersonListProps) => {
    return (
        <h2>
            {props.names.map(name => { 
                return <h2 key= {name.first} >{name.first} {name.last}</h2>
            })}
        </h2>
    )
    }