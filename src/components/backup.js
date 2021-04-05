<Animatable.Text
animation="flipInY"
useNativeDriver
style={styles.title}
>
My Tasks
</Animatable.Text>
<View style={{flex:1, justifyContent:'center'}}>
<Animatable.Text
animation="bounceInUp"
useNativeDriver
style={styles.TextBody}
>
Welcome!
</Animatable.Text>
<Animatable.Text
animation="bounceInUp"
useNativeDriver
style={styles.TextBody2}
>
Make you tasks
</Animatable.Text>

<ButtonAnimated
          style={styles.buttonAbout}
          animation="bounceInUp"
          useNativeDriver
          onPress={
            () => 
            Alert.alert("","github.com/andows159/ToDoApp")}
        >
          <Ionicons
            style={styles.buttonAboutIcon}
            name="alert-circle-outline"
            color={"#121212"}
            size={50}
          />
        </ButtonAnimated>