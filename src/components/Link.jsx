
const Link = ({children , path , onClick} )=>{
    const clickHandler = (event)=>{
        event.preventDefault()
        onClick()
    }
    return(
        <a href={path} onClick={clickHandler}>{children} </a>
    )
}
export default Link;