import { Alert } from 'react-native';
class alertService {

    show(title?: any, message?: any) {
        Alert.alert(title, message, [
            {
                text: 'OK',
                style: 'destructive'
            }
        ])
    }

    deleteAlert(){
return new Promise((resolve,reject)=>{


    Alert.alert(
        "Delete",
        "Are you sure you want to delete?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () =>{
           resolve();
          }  }
        ]
      );
    })
    }

    confirm(message: string, okText?: string, cancelText?: string, title?: string) {
      return new Promise((resolve, reject) => {
        Alert.alert(
          title ? title : null,
          message,
          [
            {
              text: cancelText || "Cancel",
              onPress: () => { reject();},
              style: "cancel",
            },
            { text: okText || "OK", onPress: () => resolve(true) },
          ],
          { cancelable: false }
        );
      });
    }

}
const AlertService = new alertService();
export default AlertService;