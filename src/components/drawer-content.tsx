import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Colors } from "@/theme/colors";
import { DrawerButton } from "@/components/drawer-button";
import { CustomOptions } from "@/types/navigation";
import { theme } from "@/theme";
import { Avatar } from "./avatar";

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View style={styles.drawerView}>
      <View style={styles.containerLogo}>
        <View style={styles.ViewLogoImage}>
          {/* <Image
          style={styles.logoImage}
          source={require("@/assets/logo2.png")}
        /> */}

          <Avatar size="medium" source={require("@/assets/avatar.jpg")} />
          <Text style={styles.TextLogo}>Elon Musk</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View style={styles.containerMenu}>
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index;
            const options = drawerProps.descriptors[route.key]
              .options as CustomOptions;

            if (options.title === undefined) {
              return;
            }

            const onPress = () => {
              const event = drawerProps.navigation.emit({
                type: "drawerItemPress",
                canPreventDefault: true,
                target: route.key,
              });

              if (!isFocused && !event?.defaultPrevented) {
                drawerProps.navigation.navigate(route.name, route.params);
              }
            };

            return (
              <View key={route.key}>
                {options.sectionTitle && (
                  <Text style={styles.sectionTitleStyle}>
                    {options.sectionTitle}
                  </Text>
                )}

                <DrawerButton
                  onPress={onPress}
                  title={options.title}
                  iconName={options.iconName}
                  isDivider={options.isDividir}
                  isFocused={isFocused}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerView: {
    flex: 1,
    backgroundColor: theme.Colors.PRIMARY,
    overflow: "hidden",
  },
  containerLogo: {
    padding: 10,
  },
  ViewLogoImage: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,

    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 26,
    marginVertical: 8,
    shadowColor: "#0f0f0f",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: "#ffffff",
  },
  TextLogo: {
    fontFamily: theme.fontFamily.body,
    fontSize: 12,
    overflow: "hidden",
  },
  containerMenu: {
    marginTop: 8,
  },
  sectionTitleStyle: {
    color: theme.Colors.PURPLE_500,
    fontFamily: theme.fontFamily.body,
    paddingHorizontal: 28,
    paddingTop: 20,
  },
});
