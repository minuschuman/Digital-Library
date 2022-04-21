import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
export default function SideNavbar(params) {
    let navigate = useNavigate();
    return (
        <div>
            <SideNav className=""
                onSelect={(selected) => {
                    if (selected === "logout") {
                        sessionStorage.clear();
                        navigate("/");
                        window.location.href = "/";

                    } else {
                        params.onSelect(selected);
                        navigate(selected);
                    }
                }}
                onToggle={(expanded) => {
                    params.onToggle(expanded);
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected={window.location.pathname.slice(1)}>
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="Students">
                        <NavIcon>
                            <i className="fas fa-user-graduate" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Students</NavText>
                        <NavItem eventKey="user">
                            <NavText>List</NavText>
                        </NavItem>
                        <NavItem eventKey="user/add">
                            <NavText>Add</NavText>
                        </NavItem>
                        <NavItem eventKey="user/edit">
                            <NavText>Edit</NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="Books">
                        <NavIcon>
                            <i className="fa fa-book" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Books</NavText>
                        <NavItem eventKey="book">
                            <NavText>List</NavText>
                        </NavItem>
                        <NavItem eventKey="book/add">
                            <NavText>Add</NavText>
                        </NavItem>
                        <NavItem eventKey="book/edit">
                            <NavText>Edit</NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="logout">
                        <NavIcon>
                            <i className="fas fa-power-off" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Sign Out</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    )
};
