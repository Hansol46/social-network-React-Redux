import React from "react";
import { useState } from "react";



function ProfileStatusWithHooks(props) {

    let [editMode, setEditMode] = useState(false); //destructuring  
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode= () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{props.status || '-----'}</span>
                </div>
            }
            {editMode && 
            <div>
                <input autoFocus={true} onBlur={ deactivateEditMode } onChange={ onStatusChange }  value={ status }/>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;

// class ProfileStatus extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status,
//     }

//     activateEditMode() {
//         this.setState({
//             editMode: true,
//         })
//     }
//     deactivateEditMode() {
//         this.setState({
//             editMode: false,
//         });
//         this.props.updateStatus(this.state.status);
//     }
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//     render() {
//         return (
//         <div>
//             {this.state.editMode ?
//               <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode.bind(this)} value={this.state.status}/>
//                     :
//                     <p> Status(Click for change):     <span  onDoubleClick={ this.activateEditMode.bind(this) }> {this.props.status}</span> </p>}
//         </div>
//     )
//     }
// }

// export default ProfileStatus;
