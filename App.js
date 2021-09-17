import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,CheckBox,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  const [aceite, setAceite] = useState(false);
  const [filtro, setFiltro] = useState(false);
  const [rutina, setRutina] = useState(true);
  const [otro, setOtro] = useState(false);
  const [copias, setCopias] = useState(1);
  const radiobutton = (t)=>{
    if(t =='rutina'){
      setRutina(true)
      setOtro(false)
      
    }
    if(t =='otro'){
      setRutina(false)
      setOtro(true)
      
    }
  }

  const copiascuenta = (tipo)=>{
    if(tipo){
      setCopias(copias+1)
      
      
    }
    else{
      if(copias!=1){
        setCopias(copias-1)
      }
      
    }
  }
  return (
    <View style={styles.container}>

      <View style={styles.logocontainer}>
          <Text style={styles.logotext}>MOPS LOGO</Text>

      </View>

      <View style={styles.capturacontainer}>
          <Text style={styles.titulo}>Capture el Código de Máquina</Text>
            <TextInput
                editable
                style={styles.codigotextbox}
              />
      </View>

      <View style={styles.campos1container}>
        
          <View style={{flexDirection:'row',height:'100%',width:'100%'}}>
            
            <View style={styles.campos1izcontainer}>
          
                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Cliente:</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Taller:</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Equipo:</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Sistema:</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

            </View>
            <View style={styles.campos1dercontainer}>

                <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Número de Serie:</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Fecha Muestra:</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Orden #:</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Aceite(Marca):</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>
                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Vicosidad</Text>
                        <TextInput
                            editable
                            style={styles.campotextbox}
                          />
                  </View>
            </View>
          
          </View>
      
      </View>

      <View style={styles.campos2container}>
                <View style={styles.campo2contenedor}>
                      <Text style={styles.titulocampo2}>Horas de Aceite:</Text>
                        <TextInput
                            editable
                            style={styles.campo2textbox}
                          />
                  </View>
                  <View style={styles.campo2contenedor}>
                      <Text style={styles.titulocampo2}>Horas de Equipo:</Text>
                        <TextInput
                            editable
                            style={styles.campo2textbox}
                          />
                  </View>
                  <View style={styles.campo2contenedor}>
                      <Text style={styles.titulocampo2}>Aceite Añadido:</Text>
                        <TextInput
                            editable
                            style={styles.campo2textbox}
                          />
                  </View>
                  <View style={styles.campo2contenedor}>
                      
                          <CheckBox
                            value={aceite}
                            onValueChange={setAceite}
                            style={styles.checkbox}
                          />
                          <Text style={styles.titulocampo2}>Cambio de Aceite</Text>
                  </View>
                  <View style={styles.campo2contenedor}>
                      
                          <CheckBox
                            value={filtro}
                            onValueChange={setFiltro}
                            style={styles.checkbox}
                          />
                          <Text style={styles.titulocampo2}>Cambio de Filtro</Text>
                  </View>

                  <View style={styles.campo2contenedor}>
                        <Text style={styles.titulocampo2}>Tipo de Muestra:</Text>
                          <CheckBox
                            value={rutina}
                            onValueChange={()=>radiobutton('rutina')}
                            style={styles.checkbox}
                          />
                          <Text style={styles.titulocampo2}>Rutina</Text>
                          <CheckBox
                            value={otro}
                            onValueChange={()=>radiobutton('otro')}
                            style={styles.checkbox}
                          />
                          <Text style={styles.titulocampo2}>Otro</Text>
                  </View>
                  <View style={styles.campo2contenedor}>
                        <Text style={styles.titulocampo2}>Copias:</Text>
                         <TouchableOpacity style={styles.boton} onPress={()=>copiascuenta(false)}>
                            <AntDesign name="minus" size={15} color="black" />
                         </TouchableOpacity>
                          <Text style={styles.titulocampo2}>{copias}</Text>

                          <TouchableOpacity style={styles.boton} onPress={()=>copiascuenta(true)}>
                                <AntDesign name="plus" size={15} color="black" />
                         </TouchableOpacity>
                          
                  </View>
        
      </View>

      <View style={styles.botonescontainer}>
                  <View style={{flexDirection:'row',width:'100%', justifyContent:'center'}}>
                        
                         <TouchableOpacity style={[styles.botones,{marginRight:5,backgroundColor:'#8f8f8f'}]} onPress={()=>copiascuenta(false)}>
                          <Text style={styles.titulocampo2}>Limpiar</Text>
                         </TouchableOpacity>
                          

                          <TouchableOpacity style={[styles.botones,{marginLeft:5,backgroundColor:'#003591'}]} onPress={()=>copiascuenta(true)}>
                            <Text style={styles.titulocampo2}>Imprimir</Text>
                         </TouchableOpacity>
                          
                  </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logocontainer:{
    height:'8%',
    width:'100%',
    backgroundColor: '#dbdbdb',
    justifyContent:'center',
    alignItems:'center'
  },
  capturacontainer:{
    height:'13%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  campos1container:{
    height:'30%',
    width:'100%',
  },
  campos2container:{
    height:'25%',
    width:'100%',
  },
  botonescontainer:{
    height:'25%',
    width:'100%',
    paddingTop:30
  },
  campos1izcontainer:{
    height:'100%',
    width:'50%'
  },
  campos1dercontainer:{
    height:'100%',
    width:'50%'
  },
  titulo:{
    fontSize: 14,
    fontFamily: 'monospace',
    color:'black'
  },
  titulocampo:{
    fontSize: 12,
    fontFamily: 'monospace',
    color:'black',
    fontWeight:'700',
    paddingLeft:5,
    width:'100%',
    textAlign:'left'
  },
  titulocampo2:{
    fontSize: 12,
    fontFamily: 'monospace',
    color:'black',
    fontWeight:'700',
    textAlign:'right',
    paddingRight:5,
    paddingLeft:5
  },
  logotext:{
    fontSize: 18,
    fontFamily: 'Roboto',
    color:'black',
    fontWeight: 'bold'
  },
  codigotextbox:{
    padding: 10,
    width:'80%',
    height:35,
    backgroundColor:'#fff',
    marginTop:5,
    borderRadius:2,
    borderColor:'#c4c4c4',
    borderWidth:1
  },
  campocontenedor:{
    height:'20%',
    width:'100%',
    alignItems:'flex-end'
    
  },
  campo2contenedor:{
    flexDirection:'row',
    height:'14%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    
  },
  campotextbox:{
    padding: 10,
    width:'90%',
    height:15,
    backgroundColor:'#fff1d1',
    marginTop:5,
    borderRadius:2,
    borderColor:'#c4c4c4',
    borderWidth:1,
    marginRight:5
    
  },
  campo2textbox:{
    padding: 10,
    width:'40%',
    height:15,
    backgroundColor:'#fff',
    marginTop:5,
    borderRadius:2,
    borderColor:'#c4c4c4',
    borderWidth:1,
    marginRight:5
    
  },
  boton:{
    width:30,
    height:20,
    backgroundColor:'#fff',
    borderRadius:2,
    borderColor:'#5c5c5c',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center'
  },
  botones:{
    width:'40%',
    height:40,
    borderRadius:2,
    justifyContent:'center',
    alignItems:'center'
  }
});
