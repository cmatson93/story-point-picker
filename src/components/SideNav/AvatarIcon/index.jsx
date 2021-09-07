import "./style.css";
import Avatar1 from './avatar-1.png';
import firebase from '../../../firebase';

const AvatarIcon = () => {
    var storage = firebase.storage();
    var pathReference = storage.ref('images/avatar-1.png');
    // console.log('pathReference: ', pathReference)

    return (
        <div className="container">
            <img src={Avatar1} />
        </div>
    )
};

export default AvatarIcon;