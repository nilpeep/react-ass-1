import headerStyle from "./header.module.css"
const Header = () =>{
    return (
    <div>
        <nav className={headerStyle['navbar']}>
        <img src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg" alt="" />
        <h1>Clarusway</h1>
        </nav>
    
    </div>)
}

export default Header