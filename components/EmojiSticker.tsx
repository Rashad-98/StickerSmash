import { Image } from "expo-image";
import { View } from "react-native";

type Props = {
  imageSize: number;
  stickerSource: string;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View>
      <Image
        source={stickerSource}
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </View>
  );
}
