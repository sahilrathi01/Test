import { StyleSheet, Text, View,FlatList,StatusBar, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { data } from '../backend/data'
import { IconPath } from '../assets'
const ListData = ({navigation}) => {
  const[like,setlike] =useState('false')
   const [ListData,setListData] = useState(data)
  const IconUpdate =(index)=>{
    let arr = [...ListData];
    arr[index].icon = arr[index].icon== IconPath.redlike ? IconPath.blanklike :IconPath.redlike;
    setListData(arr);
  }
  const Addquinty =(index)=>{
   let arr =[...ListData];
   if( Number(arr[index].cnt) <10){
    arr[index].cnt =  Number(arr[index].cnt) + 1;
    setListData(arr)
   }
 
  }
  const Subquinty =(index)=>{
    let arr =[...ListData];
    if( Number(arr[index].cnt) >1){
    arr[index].cnt =  Number(arr[index].cnt) - 1;
    setListData(arr)
    }
   }
    const renderItem =({item,index})=>{
        console.log("===========>",item.image)
       return(
      
        <TouchableOpacity activeOpacity={0.7}onPress={()=>navigation.navigate("Details",{data:{item}})}>
            
        <View style={[styles.card,{backgroundColor:item.id%2==0?"grey":"#FFF"}]}>
           <View style={styles.image}>
                 <Image source={{uri:item.image}} style={{width: 120, height: 150}} resizeMode="cover"/>
           </View>
           <View style={styles.textContainer}>
             <Text style={styles.textTitle}>Title :-{item.title}</Text>
             <Text style={styles.textTitle}>Price :-{item.price}$</Text>
             <Text style={[styles.textTitle,{fontSize:10}]}>Description :-{item.description}</Text>
             <Text style={styles.textTitle}>Category :-{item.category}</Text>
             <View style={{flexDirection:"row"}}>
             <TouchableOpacity onPress={()=>IconUpdate(index)} activeOpacity={0.1}>
               <Image source={item.icon} style={{ width:25,height:25}} /> 
          </TouchableOpacity>
             
             <TouchableOpacity onPress={()=>Addquinty(index)}>
             <Text style={{fontSize:20,fontWeight:"bold",marginHorizontal:10}}>+</Text>

             </TouchableOpacity>
             <Text style={{fontSize:20,fontWeight:"bold",marginHorizontal:10}}>{item.cnt}</Text>
             <TouchableOpacity onPress={()=>Subquinty(index)}>
             <Text style={{fontSize:20,fontWeight:"bold",marginHorizontal:10}}>-</Text>

             </TouchableOpacity>
             </View>
           
           </View>  
           
        </View>
        </TouchableOpacity>
       )
    }
  return (
    <View>
      <StatusBar backgroundColor={'purple'}/>
          <TextInput style={styles.serch} placeholder='search your product' placeholderTextColor={"black"}/>
        <FlatList
        renderItem={renderItem}
        data={ListData}
        />
    </View>
  )
}

export default ListData

const styles = StyleSheet.create({
    card:{
   // borderWidth:2,
    // borderColor:"red",
    backgroundColor:"#ffff",
    margin:5,
    borderRadius:10,
    elevation:10,
     height:375,
     width:385,
     flexDirection:"row",
     justifyContent:"space-around",
     alignItems:"center"
    },
    image:{
        width:200,
        height:200,
        alignItems:'center'
       // borderColor:"blue",
       // borderWidth:2
    },
    textContainer:{
        width:250,
        height:250,
        // borderColor:"blue",
       // borderWidth:2
    },
    textTitle:{
      fontWeight:"bold",
      fontSize:13,
      marginBottom:20,
      color:"black"

    },
    serch:{
        fontSize:20,
        fontWeight:'bold',
        borderWidth:2,
        borderColor:'#000',
        width:380,
        alignSelf:'center',
        borderRadius:25,
        marginVertical:10,


    }
})