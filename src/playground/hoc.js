import React from 'react';
import ReactDom from 'react-dom';

//Normal Component
const Info = (props) => (
<div>
<h1>Info</h1>
<p>Hello peeps whats up. Her's your data {props.info}</p>
</div>
);

//Higher Order componnent

//Advanatges of using higher order component
//Reuse code
//Render hijacking
//Prop manipulation
//abstract state
//

const withadminpermission =(WrappedComponent) =>{
    return (props)=>(
        <div>
       {props.isAdmin && <p>Thi is from admin</p>}
        <WrappedComponent {...props}/>
        </div>
    );
}
const withRequireAuthentication=(WrappedComponent)=>{
    return (props) =>(
     <div>
     {(props.isAuthenticated)?
    <WrappedComponent {...props}/>
    :
     <p>please login to continue</p>
     }
     </div>
    );
}
//const AdminInfo = withadminpermission(Info);
const RequireAuthentication = withRequireAuthentication(Info);
//ReactDom.render(<AdminInfo isAdmin = {false} info="Helllooooooooooooooooooo"/>,document.getElementById("app"));
ReactDom.render(<RequireAuthentication isAuthenticated = {true} info="Helllooooooooooooooooooo"/>,document.getElementById("app"));