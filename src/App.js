// import styled from 'styled-components';
// import './css/style.css';
// import './css/user.css';
// // import './css/reactCustom.css';
// import Tweentest from './pages/Gsap';
// import Datepicket from './tests/Datepicket';
// import BtnWrap from './pages/Btns';
// import SignUp from './pages/SignUp';
//
// function App() {
//     return (
//         <>
//             <BtnWrap></BtnWrap>
//             {/* <Tweentest></Tweentest> */}
//             {/* <Datepicket></Datepicket> */}
//             <SignUp></SignUp>
//         </>
//     );
// }
//
// export default App;

import './index.css';
import store from './lib/store';

import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';

function App() {
    return (
        <Provider store={store}>
            <InboxScreen />
        </Provider>
    );
}
export default App;
