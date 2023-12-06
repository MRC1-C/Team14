import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Purplerose1, Purplerose2, Purplerose3 } from "../../constants";
import about from "../../image/about.png";
import proflie from "../../image/profile.png";
import policy from "../../image/policy.png";
import block from "../../image/block.png";
import privacy from "../../image/privacy.png";
import password from "../../image/password.png";
import phone from "../../image/phone.png";
import logout from "../../image/logout.png";
import mail from "../../image/mail.png";
import language from "../../image/language.png";
import help from "../../image/help.png";
import history from "../../image/history.png";
import notification from "../../image/notification.png";
import off from "../../image/off-activity.png";
import moon from "../../image/moon.png";
import { ScrollView } from "native-base";

const Setting = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={{ flex: 1, padding: 20 }}>
      {/* Vùng 1: Information */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            color: Purplerose3,
          }}
        >
          Information
        </Text>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10}}>
          <Image source={proflie} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Information details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={mail} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={phone} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Phone number
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={history} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            History activity
          </Text>
        </TouchableOpacity>

        <View
          style={{
            paddingBottom: 40,
            borderBottomWidth: 2,
            borderBottomColor: Purplerose1,
          }}
        ></View>
      </View>

      {/* Vùng 2: Account */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            color: Purplerose3,
          }}
        >
          Account
        </Text>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={language} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Language
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={notification} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Notification
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={moon} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Dark mode
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={privacy} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Privacy checkup
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={password} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Change password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={block} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Blocked
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={off} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Off activity
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={logout} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>

        <View
          style={{
            paddingBottom: 40,
            borderBottomWidth: 2,
            borderBottomColor: Purplerose1,
          }}
        ></View>
      </View>

      {/* Vùng 3: Help */}
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            color: Purplerose3,
          }}
        >
          Help
        </Text>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={policy} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10}}>
          <Image source={about} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            About
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          <Image source={help} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
              marginLeft: 10
            }}
          >
            Go to help center
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default Setting;
