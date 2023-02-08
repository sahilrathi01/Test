import react from "react";
import { Text, TouchableOpacity } from "react-native";

const Buttonn = (
    {
        title,
        buttonstyle,
        textStyle,
        onPress
    }
) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={[
                {
                    backgroundColor: '#FF0059',
                    height: 75,
                    width: 350,
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 20,
                    
                },
                {
                    ...buttonstyle
                }
            ]}
        >
            <Text style={[
                {
                    fontSize: 29,
                    color: "white",
                    letterSpacing: 4,
                    fontWeight: '500'
                },
                {
                    ...textStyle
                }
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default Buttonn;