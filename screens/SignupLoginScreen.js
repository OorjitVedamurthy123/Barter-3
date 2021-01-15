import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Alert } from 'react-native';

export default class SignupLoginScreen extends Component{
  constructor(){
    super();
    this.state={
      username:'',
      password:''
    }
  }

  userSignUp=(username, password)=>{
    firebase.auth().createUserWithEmailAndPassword(username,password)
    .then((response)=>{
      return Alert.alert("User added successfully")
    })
    .catch(function(error){
      var errorCode = error.code;
      var errormessage = error.message
      return Alert.alert(errormessage)
    })
  }
  userLogin=(username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then((response)=>{
      return Alert.alert("You have successfully logged in")
    })
    .catch(function(error){
      var errorCode = error.code;
      var errormessage = error.message
      return Alert.alert(errormessage)
    })
  }
  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Barter App</Text>
        </View>
        <View>
          <TextInput
          style={styles.loginBox}
          placeholder="Username or EmailId"
          keyboardType="email-address"
          onChangeText={(text)=>{
            this.setState({
              username:text
            })
          }}
          />
          <TextInput
          style={styles.loginBox}
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={(text)=>{
            this.setState({
              password:text
            })
          }}
          />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress={()=>{this.userLogin(this.state.username, this.state.password)}}
          >
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button]}
            onPress={()=>{this.userSignUp(this.state.username, this.state.password)}}
          >
          <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'cyan',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : 'orange',
    textAlign:"center"
  },
  
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : 'yellow',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle :{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:30,
    color:'#ff5722',
    margin:50
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  registerButton:{
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:30
  },
  registerButtonText:{
    color:'#ff5722',
    fontSize:15,
    fontWeight:'bold'
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
 
  button:{
    width:350,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"lightgreen",
    shadowColor: "white",
    shadowOffset: {
       width: 0.3,
       height: 6.7,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  }
})