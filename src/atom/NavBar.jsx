const Navbar = ({handleClick}) => {
   
    return (
       <nav>
       
            <div className = "box_logo">
                <img className="box_logo--logo" src="https://templatebundle.net/wp/moto/netw9/personal-portfolio/wp-content/uploads/sites/21/2019/11/personal-portfolio.png"/>
            </div>
            
            <div className = "box_header_right">
                <div className="box_header_right--container">
                    <p onClick={() =>{handleClick("home")}}>Home</p>
                    <p onClick={() =>{handleClick("about")}}>About</p>
                    <p onClick={() =>{handleClick("skill")}}>Skill</p>
                    <p onClick={() =>{handleClick("contact")}}>Contact</p>
                </div>
                
            </div>
       
          
           
       </nav>
    )

}
export default Navbar