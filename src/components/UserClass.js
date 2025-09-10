import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props);
    
    
    this.state= {
       userInfo:{
        name: "dummy",
        location: "Default",
        public_repos: "55",
        avtar_url: "http://avaart-url.com"
       },
    };
}

async componentDidMount(){
  const data =await fetch("https://api.github.com/users/amit02kumar");
  const json =await data.json();
  console.log(json);
  
  this.setState({
    userInfo: json,
  })
    
}

    render(){
        
        const {name, location, public_repos, avtar_url} = this.state.userInfo;

        return( <div className="user-card">
            <img className="rounded-2xl" src="https://avatars.githubusercontent.com/u/125242289?v=4" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: amit.k001122@gmail.com</h2>

    </div>
    );
    }
}

export default UserClass;