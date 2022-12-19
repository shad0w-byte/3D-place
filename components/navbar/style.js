import styled from 'styled-components'

// style made throught bootstrap's class

const NavbarStyle = styled.nav`

  nav.navbar{
    width:auto;
    padding:5px;
    background:#212121;
}

nav.navbar a.nav-link, a.nav-link.active{
    color:#97DECE;
    font-size:18px;
    margin:5px;
    cursor:pointer;
    font-weight:300;

    &:hover, &:active, &:focus{
        color:#97DECE; 
        font-weight:600;
        font-size:20px;
        letter-spacing:2px;
        transition:.1s ease-in-out;
    }
}


i.bi-badge-3d-fill, i#house-icon{
        color:#97DECE;
        font-size:24px;
        vertical-align:middle ;
    }


// mobile button background

.navbar-light .navbar-toggler {
    border-color:transparent;
    background:transparent;
}

// mobile version

div.navbar-nav a.nav-link{
    margin:0px 5px;
    padding:5px;  
}
`
// toggle icon
const BarStyle = styled.i`
    color:#97DECE;
    padding:5px;


    i{
        font-size:24px;

    }
   
`
// icon with link
const Icon = styled.i`
    font-size:32px ;
    color:#97DECE;
    padding:0 10px;
    vertical-align:middle;
`
export {NavbarStyle,BarStyle,Icon}