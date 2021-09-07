import "./style.css";
import AvatarIcon from "./AvatarIcon";
import CheckCircle from "../Icons/CheckCircle";

const SideNav = ({ title, members }) => (
    <aside>
        <h2>{title}</h2>
        <div className="list-container">
            {
                members.map((member, i) => (
                    // TODO: make the x an icon instead
                    // TODO: Add a member icon
                    <div className="list-item">
                        {/* <img src={require(`./avatar-${1}.png`)} /> */}
                        {/* <img src={Avatar1}/> */}
                        <AvatarIcon />
                        <p key={member.name}>{member.name}</p>
                        {member.hasSelected ? <div className="check-container"><CheckCircle /></div> : null}
                    </div>
                ))
            }
        </div>
    </aside>
);

export default SideNav;