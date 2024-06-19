import React from "react";
import { Image, ImageProps, ImageStyle, ViewStyle } from "react-native";

type AvatarProps = ImageProps & {
  size?: "small" | "medium";
};

export function Avatar({ size = "medium", style, ...rest }: AvatarProps) {
  const baseStyle: ImageStyle = {
    width: 60,
    height: 60,
    borderRadius: 25,
    overflow: "hidden",
  };
  const smallStyle: ImageStyle = {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: "hidden",
  };
  const avatarStyle: ImageStyle =
    size === "small" ? { ...baseStyle, ...smallStyle } : baseStyle;

  return <Image style={[avatarStyle, style]} {...rest} />;
}
