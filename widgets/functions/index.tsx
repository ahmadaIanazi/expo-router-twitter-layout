import { Dimensions } from 'react-native';
import { UI_DESIGNED_WIDTH, UI_DESIGNED_HEIGHT } from '../config'

export const { width, height } = Dimensions.get('screen');
export const isTablet = width >= 500 && height >= 1000;

export const WIDTH_RATIO = parseFloat((width / UI_DESIGNED_WIDTH).toFixed(4));
export const HEIGHT_RATIO = parseFloat((height / UI_DESIGNED_HEIGHT).toFixed(4));

const percentageRegex = /%$/;

// Utility function to parse the numeric value from a string
const parseNumericValue = (valueString: string) => {
  if (valueString.endsWith('%')) {
    const numericValue = parseFloat(valueString);
    return isNaN(numericValue) ? undefined : `${numericValue}%`;
  } else if (valueString.includes('.')) {
    const numericValue = parseFloat(valueString);
    return isNaN(numericValue) ? undefined : numericValue;
  } else if (valueString == 'w') {
    const numericValue = width;
    return isNaN(numericValue) ? undefined : numericValue;
  } else if (valueString == 'h') {
    const numericValue = height;
    return isNaN(numericValue) ? undefined : numericValue;
  } else {
    const numericValue = parseInt(valueString, 10);
    return isNaN(numericValue) ? undefined : numericValue;
  }
};

// Utility functions to apply shortcuts
export const applyStyles = (baseStyle: any, shortcuts: any) => {
  const style = { ...baseStyle };
  if (shortcuts) {
    shortcuts.split(' ').forEach((shortcut: any) => {
      if (shortcut.includes('-')) {
        const parts = shortcut.split('-');
        const [property, value] = parts.slice(-2);
        const numericValue: any = parseNumericValue(value);
        if (numericValue !== undefined) {
          let propertyName;
          switch (property) {
            case 'f':
              propertyName = 'flex';
              break;
            case 'w':
              propertyName = 'width';
              break;
            case 'nw':
              propertyName = 'minWidth';
              break;
            case 'xw':
              propertyName = 'maxWidth';
              break;
            case 'h':
              propertyName = 'height';
              break;
            case 'nh':
              propertyName = 'minHeight';
              break;
            case 'xh':
              propertyName = 'maxHeight';
              break;
            case 't':
              propertyName = 'top';
              break;
            case 'b':
              propertyName = 'bottom';
              break;
            case 'l':
              propertyName = 'left';
              break;
            case 'r':
              propertyName = 'right';
              break;
            case 'm':
              propertyName = 'margin';
              break;
            case 'mb':
              propertyName = 'marginBottom';
              break;
            case 'mt':
              propertyName = 'marginTop';
              break;
            case 'me':
              propertyName = 'marginEnd';
              break;
            case 'ms':
              propertyName = 'marginStart';
              break;
            case 'mh':
              propertyName = 'marginHorizontal';
              break;
            case 'mv':
              propertyName = 'marginVertical';
              break;
            case 'p':
              propertyName = 'padding';
              break;
            case 'pb':
              propertyName = 'paddingBottom';
              break;
            case 'pt':
              propertyName = 'paddingTop';
              break;
            case 'pe':
              propertyName = 'paddingEnd';
              break;
            case 'ps':
              propertyName = 'paddingStart';
              break;
            case 'ph':
              propertyName = 'paddingHorizontal';
              break;
            case 'pv':
              propertyName = 'paddingVertical';
              break;
            case 'bw':
              propertyName = 'borderWidth';
              break;
            case 'bwl':
              propertyName = 'borderLeftWidth';
              break;
            case 'bwr':
              propertyName = 'borderRightWidth';
              break;
            case 'bwt':
              propertyName = 'borderTopWidth';
              break;
            case 'bwb':
              propertyName = 'borderBottomWidth';
              break;
            case 'br':
              propertyName = 'borderRadius';
              break;
            case 'rte':
              propertyName = 'borderTopEndRadius';
              break;
            case 'rts':
              propertyName = 'borderTopStartRadius';
              break;
            case 'rbe':
              propertyName = 'borderBottomEndRadius';
              break;
            case 'rbs':
              propertyName = 'borderBottomStartRadius';
              break;
            case 'ts':
              propertyName = 'fontSize';
              break;
            case 'o':
              propertyName = 'opacity';
              break;
            case 'z':
              propertyName = 'zIndex';
              break;
            // Add more shorthand properties as needed
            default:
              break;
          }
          // =================
          if (propertyName) {
            const isHeight = isHeightProperty(propertyName);
            const isPercentage = percentageRegex.test(numericValue);
            const isUnchangable = isUnchangableProperty(propertyName);

            // Apply the appropriate ratio based on property type (height or width)
            const ratio = isHeight ? HEIGHT_RATIO : WIDTH_RATIO;

            // Handle cases where numericValue is undefined or contains '%', 'w', or 'h'
            if (
              !numericValue ||
              numericValue === 'w' ||
              numericValue === 'h' ||
              isPercentage ||
              isUnchangable
            ) {
              style[propertyName] = numericValue; // Set a default value (you can adjust this as needed)
            } else {
              // Convert numericValue to a number for further calculations
              const adjustedValue = parseFloat(numericValue);

              // Check if numericValue is a valid number
              if (!isNaN(adjustedValue)) {
                // Apply the negative value if the shortcut starts with '-'
                const finalValue = shortcut.startsWith('-') ? -adjustedValue : adjustedValue;

                // Apply the ratio to the numericValue
                const adjustedNumericValue = isTablet ? ratio * finalValue : finalValue;

                style[propertyName] = adjustedNumericValue;
              } else {
                // If numericValue is not a valid number, set the numericValue as is
                style[propertyName] = numericValue;
              }
            }
          }
        }
      } else {
        switch (shortcut) {
          case 'c':
            style.justifyContent = 'center';
            style.alignItems = 'center';
            break;
          case 'f':
            style.flex = 1;
            break;
          case 'rtl':
            style.direction = 'rtl';
            break;
          case 'ltr':
            style.direction = 'ltr';
            break;
          case 'absolute':
            style.position = 'absolute';
            break;
          case 'row':
            style.flexDirection = 'row';
            break;
          case 'ac':
            style.alignItems = 'center';
            break;
          case 'as':
            style.alignItems = 'flex-start';
            break;
          case 'ae':
            style.alignItems = 'flex-end';
            break;
          case 'sc':
            style.alignSelf = 'center';
            break;
          case 'ss':
            style.alignSelf = 'flex-start';
            break;
          case 'se':
            style.alignSelf = 'flex-end';
            break;
          case 'jc':
            style.justifyContent = 'center';
            break;
          case 'jb':
            style.justifyContent = 'space-between';
            break;
          case 'ja':
            style.justifyContent = 'space-around';
            break;
          case 'jv':
            style.justifyContent = 'space-evenly';
            break;
          case 'js':
            style.justifyContent = 'flex-start';
            break;
          case 'je':
            style.justifyContent = 'flex-end';
            break;
          case 'uppercase':
            style.textTransform = 'uppercase';
            break;
          case 'lowercase':
            style.textTransform = 'lowercase';
            break;
          case 'capitalize':
            style.textTransform = 'capitalize';
            break;
          case 'xs':
            style.fontSize = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            break;
          case 'sm':
            style.fontSize = isTablet ? floorNumber(WIDTH_RATIO * 12) : 12;
            break;
          case 'rg':
            style.fontSize = isTablet ? floorNumber(WIDTH_RATIO * 14) : 14;
            style.fontWeight = '500';
            style.fontStyle = 'normal';
            style.letterSpacing = 0;
            break;
          case 'b':
            style.fontWeight = 'bold';
            break;
          case 'md':
            style.fontSize = isTablet ? floorNumber(WIDTH_RATIO * 16) : 16;
            break;
          case 'lg':
            style.fontSize = isTablet ? floorNumber(WIDTH_RATIO * 20) : 20;
            break;
          case 'xl':
            style.fontSize = isTablet ? floorNumber(WIDTH_RATIO * 24) : 24;
            break;
          case 'bold':
            style.fontWeight = 'bold';
            break;
          case 'italic':
            style.fontStyle = 'italic';
            break;
          case 'underline':
            style.textDecorationLine = 'underline';
            break;
          case 'line':
            style.textDecorationLine = 'line-through';
            break;
          case 'center':
            style.textAlign = 'center';
            break;
          case 'right':
            style.textAlign = 'right';
            break;
          case 'justify':
            style.textAlign = 'justify';
            break;
          case 'uppercase':
            style.textTransform = 'uppercase';
            break;
          case 'lowercase':
            style.textTransform = 'lowercase';
            break;
          case 'capitalize':
            style.textTransform = 'capitalize';
            break;
          case 'overflow':
            style.overflow = 'hidden';
            break;
          case 'hide':
            style.overflow = 'hidden';
            break;
          case 'hidden':
            style.overflow = 'hidden';
            break;
          case 'contain':
            style.resizeMode = 'contain';
            break;
          case 'stretch':
            style.resizeMode = 'stretch';
            break;
          case 'cover':
            style.resizeMode = 'cover';
            break;
          case 'sh1':
            style.elevation = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            style.shadowColor = '#000000';
            style.shadowOpacity = 0.1;
            style.shadowOffset = {
              width: 0,
              height: isTablet ? floorNumber(WIDTH_RATIO * 10) : 10,
            };
            style.shadowRadius = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            break;
          case 'sh1up':
            style.elevation = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            style.shadowColor = '#000000';
            style.shadowOpacity = 0.1;
            style.shadowOffset = {
              width: 0,
              height: isTablet ? floorNumber(WIDTH_RATIO * -10) : -10,
            };
            style.shadowRadius = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            break;
          case 'sh2':
            style.elevation = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            style.shadowColor = '#000000';
            style.shadowOpacity = 0.2;
            style.shadowOffset = {
              width: 0,
              height: isTablet ? floorNumber(WIDTH_RATIO * 10) : 10,
            };
            style.shadowRadius = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            break;
          case 'sh2up':
            style.elevation = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            style.shadowColor = '#000000';
            style.shadowOpacity = 0.2;
            style.shadowOffset = {
              width: 0,
              height: isTablet ? floorNumber(WIDTH_RATIO * -10) : -10,
            };
            style.shadowRadius = isTablet ? floorNumber(WIDTH_RATIO * 10) : 10;
            break;
          case 'transformR45':
            style.transform = [{ rotate: '45deg' }];
            break;
          case 'transformR45negative':
            style.transform = [{ rotate: '-45deg' }];
            break;
          // Add more shortcuts as needed
          default:
            break;
        }
      }
    });
  }
  return style;
};

const floorNumber = (numericValue: any) => {
  if (numericValue === 0) {
    return 0;
  } else {
    return Math.floor(numericValue);
  }
};

// Utility function to check if property is height-related
const isHeightProperty = (property: any) => {
  return (
    property === 'height' ||
    property === 'marginVertical' ||
    property === 'marginTop' ||
    property === 'marginBottom' ||
    property === 'paddingVertical' ||
    property === 'paddingTop' ||
    property === 'paddingBottom' ||
    property === 'top' ||
    property === 'bottom' ||
    property === 'minHeight' ||
    property === 'maxHeight'
  );
};

// Utility function to check if property is semantic (unchangable)
const isUnchangableProperty = (property: any) => {
  return property === 'opacity';
};
