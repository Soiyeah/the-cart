import Button from './Button'

const Header = () => {

    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header>
            <h1>The Cart</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}


export default Header
