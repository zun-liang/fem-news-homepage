const Navbar = props => 
    <ul>
        <li><a href="#home" onClick={props.handleClick}>Home</a></li>
        <li><a href="#new" onClick={props.handleClick}>New</a></li>
        <li><a href="#popular" onClick={props.handleClick}>Popular</a></li>
        <li><a href="#trending" onClick={props.handleClick}>Trending</a></li>
        <li><a href="#nav" onClick={props.handleClick}>Categories</a></li>
    </ul>

export default Navbar