import React from 'react'
import {Button, Text, View} from 'react-native'
import { useSelector } from 'react-redux';
import { updateCount } from '../Store/Slice/CounterSlice';
import { useDispatch } from 'react-redux'


const Counter = (props) => {
  
  const dispatch = useDispatch()

  const {
    count,
  } = useSelector((state) => ({
    count:state.CounterSlice.count,
  }))
  return (
    <View style={{flex:1, justifyContent:"center", alignContent:"center", height:"100vh"}}>
      <Text style={{ color: 'black' }}>Count : {count}</Text>
      <Button
        title='increase'
        onPress={()=>{
          dispatch(updateCount(count+1))
        }}
        color={"green"}
      />
      <Button
        style={{marginTop:"20px"}}
        title='decrease'
        onPress={()=>{
          dispatch(updateCount(count-1))
        }}
        color={'red'}
      />

      <Button
        style={{marginTop:"20px"}}
        title='go to home screen'
        onPress={()=> props?.navigation.navigate("Home")}
      />
    </View>
  );
};

export default Counter;
