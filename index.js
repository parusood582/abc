import {
  NavigationActions
} from 'react-navigation';
import Login from './login';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import { loginWithPhone } from '../../modules/auth';
//  import { getProfileAPI } from '../../modules/GetProfile';

// import { loginWithSocial } from '../../modules/AuthSocial';
//
//
 const mapStateToProps = state => ({
   isBusy: state.AuthReducer.isBusy,
   response: state.AuthReducer,
//    isBusySocial: state.AuthSocialReducer.isBusy,
//   responseSocial: state.AuthSocialReducer,
//     isBusyGetProfile: state.GetProfileReducer.isBusy,
//     responseGetProfile: state.GetProfileReducer

 });



 export default connect(
   mapStateToProps,
   dispatch => {
     return {
    //   loginWithSocial: bindActionCreators(loginWithSocial, dispatch),
       loginWithPhone: bindActionCreators(loginWithPhone, dispatch),
    //    getProfileAPI: bindActionCreators(getProfileAPI, dispatch),
       navigate: bindActionCreators(NavigationActions.navigate, dispatch)
     };
   }
 )(Login);

//export default Login;
