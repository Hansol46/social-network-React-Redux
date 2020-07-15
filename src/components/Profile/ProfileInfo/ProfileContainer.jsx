import React from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../../../hoc/Redirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    //  место где размещаются запросы к серверу
    componentDidMount = () => {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    };


    render (props) {
        return (
            <section >
            {/* команда позволяет прокинуть ВСЕ пропсы */}
            <Profile {...this.props} profile={this.props.profile }/> 
            </section>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});
export default compose (
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    AuthRedirect 
)(ProfileContainer)
// let AuthRedirectComponent = AuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)            // работает как конект, возвращая нам новую компоненту, в которую еще закидываются данные из урла 
// export default connect(mapStateToProps, { getUserProfile }) (WithUrlDataContainerComponent);    // теперь вместо диспатча просто передаем наш АС (creacte him in profile-reducer)