import { StyleSheet } from "react-native";
import { fontSize, HP, lineHeight, palette, WP } from "../../config";

export const OPTINPUT_STYLES = StyleSheet.create({
  root: {},
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: {marginTop: HP(4.5),marginHorizontal:WP(12)},
  cell: {
    width: WP(9),
    height: HP(4),
    //   lineHeight: 3,
    fontSize: fontSize.font30,
    lineHeight:lineHeight.font27,
    fontFamily: 'SourceSansPro-SemiBold',
    borderBottomWidth: 2,
    borderColor: palette.baseLine,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: palette.blue,
  },
});