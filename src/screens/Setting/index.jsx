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
        <TouchableOpacity style={{ flexDirection: "row"}}>
          <Image source={proflie} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Information details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={mail} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={phone} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Phone number
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={history} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
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

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={language} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Language
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={notification} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Notification
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={moon} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Dark mode
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={privacy} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Privacy checkup
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={password} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Change password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={block} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Blocked
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={off} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Off activity
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={logout} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
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

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={policy} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={about} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            About
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Image source={help} style={{ margin: 4 }} />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 8,
              color: "black",
              fontFamily: "Quicksand_500Medium",
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
