import React from "react";
import ss from "./Users.module.sass";
import photo from ".././Users/photo.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

function Users(props) {
  return (
    <div className={ss.users__block}>


      {props.usersData.map((u) => (
        <div key={u.id}>
          <div className={ss.block}>
            <div>
              <div>
                {" "}
                <NavLink to={"/profile/" + u.id}>
                  <img src={u.photoURL ? u.photoURL : photo} alt="" />{" "}
                </NavLink>{" "}
              </div>
              <div>
                {" "}
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollowEnter(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.followEnter(u.id)
                    }}
                  >
                    {" "}
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={ss.block_center}>
              <div className={ss.block_left}>
                <h2>{u.fullName}</h2>
                <p>{u.status}</p>
              </div>
              <div className={ss.block_right}>
                {/* <h5>{u.location.country},</h5>
                <p>{u.location.city}</p> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
