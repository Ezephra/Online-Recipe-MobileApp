import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';





export default function CameraUsage({navigation} : any) {
    const [hasPermissionCamera, setHasPermissionCamera] = useState<any>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    let camera : Camera | null;

    const InitiateCamera  = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermissionCamera(status === 'granted');
        if (hasPermissionCamera === null) {
            return <View />;
        }
        if (hasPermissionCamera === false) {
            return <Text>No access to camera</Text>;
        }
    }

    const CameraChange =  () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    }

    const CameraPreview = ({photo}: any) => {
        console.log('preview', photo)
        return (
          <View style={styles.imagePreview}>
            <View style={styles.buttonContainer}>
            <ImageBackground
              source={{uri: photo && photo.uri}}
              style={{flex: 1}}
            >
                <TouchableOpacity style={styles.button} onPress={SavePicture} >
                    <Ionicons name="checkmark-sharp" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={RetakePicture}>
                    <Feather name="x" style={styles.icon} />
                </TouchableOpacity>
            </ImageBackground>
            </View>
          </View>
        )
    }

    const TakePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync();
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
    }

    const RetakePicture = () => {
        setCapturedImage(null);
        setPreviewVisible(false);
        InitiateCamera();
    }

    const SavePicture = async() => {
        try {
            navigation.push("Upload",  {picture : capturedImage.uri});
        } catch (e) {
            console.log(e)
        }
    }

    const LoadPicture = async () => {
        
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (!result.cancelled) {
            setCapturedImage(result);
        }
        SavePicture();
    }

    useEffect(() => {
        InitiateCamera();
    }, []);

    
  return (
    <View style={styles.container}>
        {previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} savePhoto={SavePicture} retakePicture={RetakePicture} />
          ) : ( <Camera style={styles.camera} type={type} ref={(r) => {camera = r}}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={LoadPicture}>
                            <Ionicons name="images" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={TakePicture}>
                            <FontAwesome name="camera" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={CameraChange}>
                            <MaterialCommunityIcons name="camera-switch" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </Camera>
          )}
    </View>
  );
}

const styles = StyleSheet.create({ 
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonContainer : {
        flex:1, 
        flexDirection:"row",
        justifyContent:"space-between",
        margin:20
    },

    camera : {
        flex: 1,
        width:"100%"
    },

    imagePreview : {
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
    },

    button : {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    icon : {
        color: "#fff", fontSize: 40
    }
 }); 