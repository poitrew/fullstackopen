import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    return (
        <>
            <Header text={course.name}/>
            <Content parts={course.parts}/>
            <Total exercises={course.parts.reduce((total, current) => total += current.exercises, 0)} />
        </>
    )
}

export default Course