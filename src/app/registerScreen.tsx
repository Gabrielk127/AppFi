import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import CustomInput from "@/components/inputs/customInput";
import CustomButton from "@/components/buttons/customButtom";
import AnimationGraph from "@/components/animations/animationGraph";
import { Link } from "expo-router";

export default function RegisterScreen() {
  const [username, SetUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSendData = () => {
    console.log("Enviando Username: ", username);
    console.log("Enviando Email: ", email);
    console.log("Enviando Password: ", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>Criar Conta</Text>
        <View style={styles.contentInputStyle}>
          <CustomInput
            icon="account-circle"
            placeholder="Username"
            value={username}
            onChangeText={SetUserName}
          />
          <CustomInput
            icon="password"
            iconRight="compass-calibration"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <CustomInput
            icon="email"
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.signupContentStyle}>
          <Text style={styles.signupStyle}>Sign Up</Text>
          <Link href={"/(drawer)"} asChild>
            <CustomButton
              icon="keyboard-double-arrow-right"
              buttonStyle={styles.buttonStyle}
              iconColor={theme.Colors.PRIMARY}
              iconSize={26}
              onPress={handleSendData}
            />
          </Link>
        </View>
        <View style={styles.textContainerStyle}>
          <Text style={styles.textStyle}>Já tem uma conta?</Text>
          <Link
            style={[
              styles.textStyle,
              {
                color: theme.Colors.PRIMARY_BLACK,
                fontFamily: theme.fontFamily.body,
              },
            ]}
            href={"loginScreen"}
          >
            Login
          </Link>
        </View>
        <View style={styles.containerSocialMedia}>
          <Text style={styles.textStyle}>Ou crie uma conta usando:</Text>
          <View style={styles.socialMediaStyle}>
            <Link href={"/"}>
              <View>
                <Image source={require("@/assets/socialMedia/Google.png")} />
              </View>
            </Link>
            <Link href={"/"}>
              <View>
                <Image source={require("@/assets/socialMedia/facebook.png")} />
              </View>
            </Link>

            <Link href={"/"}>
              <View>
                <Image source={require("@/assets/socialMedia/Twitter.png")} />
              </View>
            </Link>
          </View>
        </View>
      </View>
      <AnimationGraph />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: theme.Colors.PRIMARY,
  },
  contentStyle: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 45,
  },
  titleStyle: {
    fontFamily: theme.fontFamily.heading,
    fontSize: theme.Fontsize.MediumTitle,
  },
  contentInputStyle: {
    marginTop: 50,
    width: "100%",
    gap: 40,
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: theme.Colors.PURPLE_50,
    backgroundColor: theme.Colors.PURPLE_BACKGROUND,
    width: 70,
  },
  signupContentStyle: {
    width: " 100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 40,
    justifyContent: "flex-end",
  },
  signupStyle: {
    fontFamily: theme.fontFamily.subtitle,
    fontSize: theme.Fontsize.SmallTitle,
  },
  textContainerStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 40,
    flexDirection: "row",
    gap: 6,
  },
  textStyle: {
    fontFamily: theme.fontFamily.light,
    fontSize: theme.Fontsize.Body,
    color: theme.Colors.PRIMARY_TEXT,
  },
  containerSocialMedia: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  socialMediaStyle: {
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
  },
});
