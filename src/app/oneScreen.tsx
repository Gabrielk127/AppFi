import CustomButton from "@/components/buttons/customButtom";
import { theme } from "@/theme";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { MotiView } from "moti";

import { Link } from "expo-router";

export default function OneScreen() {
  const dimensions = useWindowDimensions();
  return (
    <View style={styles.contentStyle}>
      <MotiView
        style={{ zIndex: 2 }}
        from={{
          opacity: 0,
          translateY: dimensions.height,
          rotateY: "180deg",
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          rotateY: "0deg",
        }}
        transition={{
          duration: 3000,
          type: "spring",
          translateY: {
            damping: 15,
            mass: 3,
          },
        }}
      >
        <Image
          source={require("@/assets/iphoneOneScreen/iphone.png")}
          style={styles.iphoneStyle}
        />
      </MotiView>

      <MotiView
        from={{
          opacity: 0,
          translateY: 20,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          translateY: {
            duration: 2000,
            loop: true,
            type: "timing",
            repeatReverse: true,
          },
        }}
      >
        <Image
          source={require("@/assets/iphoneOneScreen/card.png")}
          style={styles.cardStyle}
        />
      </MotiView>

      <MotiView
        style={{ zIndex: 3 }}
        from={{
          translateX: -10,
          translateY: -8,
        }}
        animate={{
          translateX: 0,
          translateY: 0,
        }}
        transition={{
          duration: 2000,
          loop: true,
          type: "timing",
          repeatReverse: true,
        }}
      >
        <Image
          source={require("@/assets/iphoneOneScreen/coin.png")}
          style={styles.coinStyle}
        />
      </MotiView>
      <MotiView
        style={{ zIndex: 3 }}
        from={{
          translateY: 10,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          duration: 2000,
          loop: true,
          type: "timing",
          repeatReverse: true,
        }}
      >
        <Image
          source={require("@/assets/iphoneOneScreen/card2.png")}
          style={styles.card2Style}
        />
      </MotiView>
      <Image
        source={require("@/assets/iphoneOneScreen/bottom.png")}
        style={styles.bottomStyle}
      />

      <View>
        <Text style={styles.titleStyle}>Organize sua vida financeira</Text>
        <View style={styles.contentButtonStyle}>
          <Link href={"registerScreen"} asChild>
            <CustomButton
              title="Cadastrar-se"
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonTextStyle}
            />
          </Link>
          <Link href={"loginScreen"} asChild>
            <CustomButton
              title="Já tenho conta"
              buttonStyle={styles.buttonStyleLogin}
              textStyle={styles.buttonTextStyle}
            />
          </Link>
        </View>
      </View>
      <Text style={styles.create}>
        Criado por Gabriel Fernandes | Adrian Campana{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: theme.Colors.BLUE,
  },
  imageStyle: {
    marginTop: -30,
  },
  titleStyle: {
    textAlign: "left",
    marginLeft: 30,
    marginTop: 500,
    fontFamily: theme.fontFamily.subtitle,
    color: theme.Colors.PRIMARY,
    fontSize: theme.Fontsize.MediumTitle,
    width: "80%",
    letterSpacing: 2,
  },
  contentButtonStyle: {
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 30,
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: theme.Colors.GREEN,

    backgroundColor: theme.Colors.MATTE_BLUE,
  },
  buttonTextStyle: {
    fontFamily: theme.fontFamily.body,
  },
  buttonStyleLogin: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: theme.Colors.GREEN,

    backgroundColor: theme.Colors.MATTE_BLUE,
  },
  create: {
    color: theme.Colors.ORANGE_100,
    fontSize: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  iphoneStyle: {
    position: "absolute",
    left: "35%",
    top: 90,
    zIndex: 2,
  },
  bottomStyle: {
    position: "absolute",
    left: 20,
    zIndex: 1,
    top: 230,
  },
  cardStyle: {
    position: "absolute",
    top: 150,
    left: 60,
  },
  coinStyle: {
    position: "absolute",
    top: 245,
    left: 150,
  },
  card2Style: {
    position: "absolute",
    left: "36%",
    top: 165,
  },
});
