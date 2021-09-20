
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,CheckBox,TouchableOpacity,KeyboardAvoidingView,Platform,ScrollView,StatusBar,
  ToastAndroid} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  const [Codigo, setCodigo] = useState("");
  const [Cliente, setCliente] = useState("");
  const [Taller, setTaller] = useState("");
  const [Equipo, setEquipo] = useState("");
  const [Sistema, setSistema] = useState("");
  const [Serie, setSerie] = useState("");
  const [FMuestra, setFMuestra] = useState("");
  const [Orden, setOrden] = useState("");
  const [AceiteMarca, setAceiteMarca] = useState("");
  const [Viscosidad, setViscosidad] = useState("");

  const [HorasAceite, setHorasAceite] = useState("");
  const [HorasEquipo, setHorasEquipo] = useState("");
  const [AceiteAnanido, setAceiteAnanido] = useState("");
  

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


  const Limpiar = ()=>{

    
    setCodigo("");
    setCliente("");
    setTaller("");
    setEquipo("");
    setSistema("");
    setSerie("");
    setFMuestra("");
    setOrden("");
    setAceiteMarca("");
    setViscosidad("");
  
    setHorasAceite("");
    setHorasEquipo("");
    setAceiteAnanido("");
    
  
    setAceite(false);
    setFiltro(false);
    setRutina(true);
    setOtro(false);
    setCopias(1);
    ToastAndroid.showWithGravity(
      "Limpiado",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  }

  const Imprimir = ()=>{
  
    if(Cliente == ""){
      ToastAndroid.showWithGravity(
        "No se ha escaneado",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }else if(FMuestra == ""||Orden == ""|| AceiteMarca == ""|| Viscosidad == ""|| HorasAceite == ""|| HorasEquipo == ""|| AceiteAnanido == "" || (aceite==false && filtro == false)){


      ToastAndroid.showWithGravity(
        "Complete todos los campos",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
    else{

     var html = `<html>
     <head>
     <style>
       body {
         width: 10px;
         height: 384px;
         background-color: red;
       }
     </style>
   </head>
   <body>
 
 <div>
 
   <div>
 <h6 >CLIENTE: </h1>
   <h6 >TALLER: </h1>
   <h6 >EQUIPO: </h1>
   <h6 >SISTEMA: </h1>
   <h6 >CLIENTE: </h1>
 </div>
 <div>
 <h6 >HORAS DE ACITE: </h1>
   <h6 >HORAS DE EQUIPO: </h1>
   <h6 >ACEITEAÑADIDO: </h1>
 </div>
 
 <div>
 
 </div>
 
 <div>
 <h6 >HORAS DE ACITE: </h1>
   <h6 >HORAS DE EQUIPO: </h1>
   <h6 >ACEITEAÑADIDO: </h1>
 </div>
 
 </div>
 <div>
 
   
 
 </div>
   
   
   </body>
 </html>
    `
    }

  }
//123456789ABCDEF|987654321FEDCBA|0011223344AABBCC|AABBCC0011223344|QWERTY123456

  const LeerCodigo = (texto)=>{
    setCodigo(texto)
    const datos = texto.split("|");
    if(datos.length ==5 ){

      setCliente(datos[0]);
    setTaller(datos[1]);
    setEquipo(datos[2]);
    setSistema(datos[3]);
    setSerie(datos[4]);

    }
    else{
      ToastAndroid.showWithGravity(
        "Error: Codigo invalido",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  }
  return (
    <KeyboardAvoidingView  style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

<StatusBar
        animated={true}
        backgroundColor="#dbdbdb"
        barStyle={'default'}
        showHideTransition={'none'} />
      <ScrollView style={styles.container} >
            <View style={styles.logocontainer}>
                  <Text style={styles.logotext}>MOPS LOGO</Text>

            </View>

      <View style={styles.capturacontainer}>
          <Text style={styles.titulo}>Capture el Código de Máquina</Text>
            <TextInput
            autoFocus={true}
              value={Codigo}
              onChangeText={LeerCodigo}
                editable
                style={styles.codigotextbox}
                showSoftInputOnFocus={false}
              />
      </View>

      <View style={styles.campos1container}>
        
          <View style={{flexDirection:'row',height:'100%',width:'100%'}}>
            
            <View style={styles.campos1izcontainer}>
          
                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Cliente:</Text>
                        <TextInput
                            value={Cliente}
                            onChangeText={setCliente}
                            editable={false}
                            style={styles.campotextbox}
                            
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Taller:</Text>
                        <TextInput
                            value={Taller}
                            onChangeText={setTaller}
                            editable={false}
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Equipo:</Text>
                        <TextInput
                            value={Equipo}
                            onChangeText={setEquipo}
                            editable={false}
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Sistema:</Text>
                        <TextInput
                            value={Sistema}
                            onChangeText={setSistema}
                            editable={false}
                            style={styles.campotextbox}
                          />
                  </View>

            </View>
            <View style={styles.campos1dercontainer}>

                <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Número de Serie:</Text>
                        <TextInput
                            value={Serie}
                            onChangeText={setSerie}
                            editable={false}
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Fecha Muestra:</Text>
                        <TextInput
                            value={FMuestra}
                            onChangeText={setFMuestra}
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Orden #:</Text>
                        <TextInput
                            value={Orden}
                            onChangeText={setOrden}
                            editable
                            style={styles.campotextbox}
                          />
                  </View>

                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Aceite(Marca):</Text>
                        <TextInput
                            value={AceiteMarca}
                            onChangeText={setAceiteMarca}
                            editable
                            style={styles.campotextbox}
                          />
                  </View>
                  <View style={styles.campocontenedor}>
                      <Text style={styles.titulocampo}>Vicosidad</Text>
                        <TextInput
                            value={Viscosidad}
                            onChangeText={setViscosidad}
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
                            value={HorasAceite}
                            onChangeText={setHorasAceite}
                            editable
                            style={styles.campo2textbox}
                          />
                  </View>
                  <View style={styles.campo2contenedor}>
                      <Text style={styles.titulocampo2}>Horas de Equipo:</Text>
                        <TextInput
                            value={HorasEquipo}
                            onChangeText={setHorasEquipo}
                            editable
                            style={styles.campo2textbox}
                          />
                  </View>
                  <View style={styles.campo2contenedor}>
                      <Text style={styles.titulocampo2}>Aceite Añadido:</Text>
                        <TextInput
                            value={AceiteAnanido}
                            onChangeText={setAceiteAnanido}
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

     
      
      </ScrollView>
      
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logocontainer:{
    height:50,
    width:'100%',
    backgroundColor: '#dbdbdb',
    justifyContent:'center',
    alignItems:'center',
  },
  capturacontainer:{
    height:65,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  campos1container:{
    height:300,
    width:'100%',
    marginTop:10
  },
  campos2container:{
    height:270,
    width:'100%',
  },
  botonescontainer:{
    height:100,
    width:'100%',
    paddingTop:30,
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
    width:'80%',
    height:35,
    backgroundColor:'#fff',
    marginTop:5,
    borderRadius:2,
    borderColor:'#c4c4c4',
    borderWidth:1,
    alignItems:'center',
    paddingLeft:5
  },
  campocontenedor:{
    height:'20%',
    width:'100%',
    alignItems:'flex-end'
    
  },
  campo2contenedor:{
    flexDirection:'row',
    height:38,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    
  },
  campotextbox:{
    width:'90%',
    height:30,
    backgroundColor:'#fff1d1',
    borderRadius:2,
    borderColor:'#c4c4c4',
    borderWidth:1,
    marginRight:5,
    fontSize:10,
    alignItems:'center',
    paddingLeft:5
    
  },
  campo2textbox:{
    width:'40%',
    height:30,
    backgroundColor:'#fff',
    marginTop:5,
    borderRadius:2,
    borderColor:'#c4c4c4',
    borderWidth:1,
    marginRight:5,
    fontSize:10,
    alignItems:'center',
    paddingLeft:5
    
  },
  boton:{
    width:30,
    height:25,
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
