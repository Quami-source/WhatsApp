import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text,StatusBar,Dimensions,TouchableOpacity} from 'react-native';

//navigation defs
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//components
import SplashScreen from './screens/SplashScreen';
import Welcome from './screens/Auth/Welcome';
import NumAuth from './screens/Auth/NumAuth';
import ProvNam from './screens/Auth/ProvNam';
import {AuthContext} from './AuthContext';
import HomeStack from './screens/MainStack/HomeStack';
import TabBar from './components/TabBar';
import Chat from './components/Chat';

const AuthStack = createStackNavigator();
//const HomeStack = createStackNavigator();

const {width,height} = Dimensions.get('screen')

const App = () => {
  const state = {
    isLoading: true,
    token: null,
  };

  //defining the reducer
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          isLoading: false,
          token: action.token,
        };
        break;
      case 'NUM_AUTH':
        return {
          ...prevState,
          isLoading: false,
          token: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isLoading: false,
          token: null,
        };
        break;
    }
  };

  const [appState, dispatch] = React.useReducer(reducer, state);

  const authContext = React.useMemo(
    () => ({
      signOut: () => {
        dispatch({type: 'SIGN_OUT'});
      },
      numAuth: () => {
        var userToken = 'userToken';
        dispatch({type: 'NUM_AUTH', token: userToken});
      },
    }),
    [],
  );
  //const [isLoading, setLoading] = React.useState(true)
  //const [token, setToken] = React.useState(null)

  //const [state,]

  React.useEffect(() => {
    setTimeout(() => {
      //setLoading(false)
      //setToken('userToken')
      var userToken = 'userToken';
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 600);
  }, []);

  if (appState.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {appState.token == null ? (
          <AuthStack.Navigator>
            <AuthStack.Screen name="Welcome" component={Welcome} options ={{headerShown:false}} />
            <AuthStack.Screen name="Number" component={NumAuth} />
            <AuthStack.Screen name="Name" component={ProvNam} />
          </AuthStack.Navigator>
        ) : (
         <AuthStack.Navigator >
           <AuthStack.Screen name="Home" component ={HomeStack} options = {{
             headerShown : true ,
             header:()=>{
               return(
                <TabBar/>
               )
             } 
           }} />
    
         </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
