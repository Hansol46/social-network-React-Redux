import React from 'react';
import ss from './Users.module.sass';

function Users(props) {
    return (
    <div className={ss.users__block}>
        
        { 
        props.usersData.map( u => <div key={u.id}> 

        <div className={ss.block}> 

                        <div> 
                            <div><img src={u.photoURL} alt=""/></div> 
                            <div> {u.followed 
                                    ? <button onClick={ () => { props.unfollow(u.id) }}> Unfollow</button> 
                                    : <button onClick={ () => { props.follow(u.id) }}> Follow</button >}
                            </div>
                        </div>
                    <div className={ss.block_center}>
                        <div className={ss.block_left}> 
                            <h2>{u.fullName}</h2>
                            <p>{u.status}</p>
                        </div>
                        <div className={ss.block_right}> 
                            <h5>{u.location.country},</h5>
                            <p>{u.location.city}</p>
                        </div>
                    </div>
        </div>
            
        </div>) }


    </div>

    );
};

export default Users;