import { MotiView } from "moti";
import { Image, View, useWindowDimensions } from "react-native";

const AnimationGraph = () => {
  const dimensions = useWindowDimensions();
  return (
    <>
      <View>
        <MotiView
          from={{
            translateY: 40,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            duration: 3000,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              start: 0,
              bottom: -20,
              width: 15,
              height: 220,
            }}
            source={require("@/assets/graph/bar.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 40,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 3000,
            duration: 2300,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              start: 15,
              bottom: -20,
              width: 15,
              height: 200,
            }}
            source={require("@/assets/graph/bar2.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 20,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 1000,
            duration: 2900,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              start: 30,
              bottom: -20,
              width: 15,
              height: 180,
            }}
            source={require("@/assets/graph/bar3.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 40,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 500,
            duration: 1000,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              start: 45,
              bottom: -20,
              width: 15,
              height: 165,
            }}
            source={require("@/assets/graph/bar.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 25,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 1000,
            duration: 1800,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              start: 60,
              bottom: -20,
              width: 15,
              height: 180,
            }}
            source={require("@/assets/graph/bar3.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 40,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 2000,
            duration: 2300,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              start: 75,
              bottom: -20,
              width: 15,
              height: 200,
            }}
            source={require("@/assets/graph/bar2.png")}
          />
        </MotiView>
      </View>
      <View>
        <MotiView
          from={{
            translateY: 40,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 3000,
            duration: 2300,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              bottom: 720,
              end: 0,
              width: 15,
              height: 220,
            }}
            source={require("@/assets/graph/bar2.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 20,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 1000,
            duration: 2900,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              bottom: 720,
              end: 15,
              width: 15,
              height: 180,
            }}
            source={require("@/assets/graph/bar3.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 40,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 500,
            duration: 1000,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              bottom: 720,
              end: 30,
              width: 15,
              height: 190,
            }}
            source={require("@/assets/graph/bar.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 25,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 1000,
            duration: 1800,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              bottom: 720,
              end: 45,
              width: 15,
              height: 170,
            }}
            source={require("@/assets/graph/bar3.png")}
          />
        </MotiView>
        <MotiView
          from={{
            translateY: 40,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            delay: 2000,
            duration: 2300,
            type: "timing",
            loop: true,
          }}
        >
          <Image
            style={{
              position: "absolute",
              bottom: 730,
              end: 60,
              width: 15,
              height: 160,
            }}
            source={require("@/assets/graph/bar2.png")}
          />
        </MotiView>
      </View>
    </>
  );
};

export default AnimationGraph;
