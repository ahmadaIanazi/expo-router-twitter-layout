
/**
 * Box component
 * Props:
 *   - s: string (optional) - Shortcuts for applying styles
 *   - style: boolean (optional) - to turn off the default stylings
 *   - color: string (optional) - Text Color
 */
export function Box({ s, ref, children, color, style = true }) {
  const defaultStyle = style
    ? {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 40,
      }
    : null;
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(defaultStyle, s);
  const backgroundColor = color || themeColor.light || 'lightgrey';

  return (
    <View ref={ref} style={[labelStyle, { backgroundColor: backgroundColor}]}>
      {children}
    </View>
  );
}

/**
 * Alert component
 * Props:
 *   - title: string (required) - Alert title
 *   - message: string (required) - Alert message
 *   - onPressOk: function (required) - Callback function for OK button press event
 *   - onPressCancel: function (required) - Callback function for Cancel button press event
 *   - color: string (optional) - Alert background color
 *   - textColor: string (optional) - Alert text color
 */
export function Alert({ s, ref, title, message, onPressOk, onPressCancel, color, textColor }) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);
  const alertBackgroundColor = color || themeColor.light || 'grey';
  const alertTextColor = textColor || themeColor.text || 'grey';

  
  return (
    <View
      ref={ref}
      style={{
        zIndex: 100,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        width: width,
        height: '100%',
        backgroundColor: 'rgba(0, 0,0, 0.8)',
      }}
    >
      <View
        style={[
          labelStyle,
          {
            padding: 20,
            borderRadius: 20,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            backgroundColor: alertBackgroundColor,
            height: height * 0.4,
            width: width,
          },
        ]}
      >
        <T s='mb-10 b ts-18' color={alertTextColor}>
          {title}
        </T>
        <T s='mb-20 ts-14' color={alertTextColor}>
          {message}
        </T>
        <View style={styles.buttonContainer}>
          <Button title='OK' onPress={onPressOk} color={alertBackgroundColor} />
          <Button title='Cancel' onPress={onPressCancel} color={alertBackgroundColor} />
        </View>
      </View>
    </View>
  );
}

/**
 * BottomSheet component
 * Props:
 *   - color: string (optional) - BottomSheet background color
 *   - size: string (optional) - Height of the Bottom Sheet
 */
export function BottomSheet({ s, ref, children, color, size }) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);
  const alertBackgroundColor = color || themeColor.background || 'grey';
  const bottomSheetHeight = size || height * 0.4;

  return (
    <View
      ref={ref}
      style={{
        zIndex: 100,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        width: width,
        height: '100%',
        backgroundColor: 'rgba(0, 0,0, 0.8)',
      }}
    >
      <View
        style={[
          labelStyle,
          {
            padding: 20,
            borderRadius: 20,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            backgroundColor: alertBackgroundColor,
            height: bottomSheetHeight,
            width: width,
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
}

/**
 * TextInput component
 * Props:
 *   - placeholder: string (optional) - Input field placeholder
 *   - value: string (optional) - Input field value
 *   - onChangeText: function (optional) - Callback function for text change event
 *   - borderColor: string (optional) - Input field border color
 */
export function TextInputCustomized({ s, ref, placeholder, value, onChangeText, borderColor }) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);
  const inputBorderColor = borderColor || themeColor.border || 'grey';

  return (
    <TextInput
      ref={ref}
      style={[styles.textInput, labelStyle, { borderColor: inputBorderColor }]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

/**
 * Switch component
 * Props:
 *   - value: boolean (required) - Switch value
 *   - onValueChange: function (required) - Callback function for switch value change event
 *   - falseColor: string (optional) - Switch track false color
 *   - trackColor: string (optional) - Switch track true color
 *   - color: string (optional) - Switch thumb color
 */
export function CustomSwitch({ ref, value, onValueChange, color, falseColor, trueColor }) {
  const themeColor = useContext(themeContext);
  const switchThumbColor = color || themeColor.background || 'grey';
  const falseTrackColor = falseColor || themeColor.light || 'lightgrey';
  const trueTrackColor = trueColor || themeColor.primary || 'lightgreen';

  return (
    <Switch
      ref={ref}
      trackColor={{ false: falseTrackColor, true: trueTrackColor }}
      value={value}
      onValueChange={onValueChange}
      thumbColor={switchThumbColor}
    />
  );
}

/**
 * Card component
 * Props:
 *   - title: string (optional) - Card title
 *   - content: string (optional) - Card content
 *   - backgroundColor: string (optional) - Card background color
 *   - textColor: string (optional) - Card text color
 */
export function Card({ s, ref, title, content, backgroundColor, textColor }) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);
  const cardBackgroundColor = backgroundColor || themeColor.background || 'grey';
  const cardTextColor = textColor || themeColor.text || 'grey';

  return (
    <View
      ref={ref}
      style={[styles.cardContainer, labelStyle, { backgroundColor: cardBackgroundColor }]}
    >
      <Text style={[styles.cardTitle, { color: cardTextColor }]}>{title}</Text>
      <Text style={[styles.cardContent, { color: cardTextColor }]}>{content}</Text>
    </View>
  );
}

/**
 * Dropdown component
 * Props:
 *   - options: array (required) - List of options
 *   - selectedOption: string (optional) - Selected option
 *   - onOptionSelect: function (required) - Callback function for option selection event
 *   - borderColor: string (optional) - Dropdown border color
 *   - textColor: string (optional) - Dropdown text color
 */
export function Dropdown({
  s,
  ref,
  options,
  selectedOption,
  onOptionSelect,
  borderColor,
  textColor,
}) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);
  const dropdownBorderColor = borderColor || themeColor.border || 'grey';
  const dropdownTextColor = textColor || themeColor.text || 'grey';

  return (
    <View
      ref={ref}
      style={[styles.dropdownContainer, labelStyle, { borderColor: dropdownBorderColor }]}
    >
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.dropdownOption}
          onPress={() => onOptionSelect(option)}
        >
          <Text style={[styles.dropdownOptionText, { color: dropdownTextColor }]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

/**
 * Toast component
 * Props:
 *   - s: object (optional) - Additional styles to be applied to the container (e.g., labelStyle)
 *   - trigger: boolean (optional) - To show the toast
 *   - setter: setter (optional) - To reset the trigger state set(!trigger)
 *   - message: string (required) - Toast message
 *   - type: string (optional) - Type of toast ('error', 'success', 'warning')
 *   - duration: number (optional) - Duration in milliseconds before the toast disappears (default: 3000)
 *   - color: string (optional) - Background color of the toast
 *   - textColor: string (optional) - Text color of the toast
 */
export function Toast({
  s,
  ref,
  message,
  trigger = false,
  setter = null,
  type,
  duration = 6000,
  color,
  textColor,
}) {
  const [isVisible, setIsVisible] = useState(true);
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);
  const typeColor =
    type === 'error'
      ? themeColor.error
      : type === 'success'
      ? themeColor.success
      : type === 'warning'
      ? themeColor.warning
      : type === 'info'
      ? themeColor.info
      : themeColor.toast || 'grey';
  const toastBackgroundColor = color || themeColor.background || 'grey';
  const toastTextColor = textColor || themeColor.text || 'black';
  const messageContent = message || '';

  useEffect(() => {
    if (message) {
      setIsVisible(trigger);
    }
  }, [trigger]);

  useEffect(() => {
    let timeout;
    if (isVisible) {
      timeout = setTimeout(() => {
        setIsVisible(false);
        if (setter && typeof setter === 'function') {
          setter(!trigger);
        }
      }, duration);
    }

    return () => clearTimeout(timeout);
  }, [duration, isVisible]);

  return isVisible ? (
    <View
      ref={ref}
      style={[
        styles.toastContainer,
        labelStyle,
        { backgroundColor: typeColor || toastBackgroundColor },
      ]}
    >
      <T s='b ts-14' color={toastTextColor}>
        {messageContent}
      </T>
    </View>
  ) : null;
}

/**
 * Checkbox component
 * Props:
 *   - label: string (required) - Checkbox label
 *   - checked: boolean (optional) - Indicates if the checkbox is checked
 *   - onChange: function (optional) - Callback function for checkbox change event
 */
export function Checkbox({ s, ref, label, checked, onChange }) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);

  return (
    <TouchableOpacity onPress={onChange} style={styles.checkBoxContainer}>
      {/* Render checkbox icon based on the checked state */}
      <View
        ref={ref}
        style={[
          styles.checkboxIcon,
          labelStyle,
          {
            backgroundColor: checked ? themeColor.primary : themeColor.background,
            borderColor: checked ? themeColor.primary : themeColor.border,
          },
        ]}
      >
        {/* Render check icon when the checkbox is checked */}
        {checked && <View style={styles.checkIcon} />}
      </View>
      <Text style={[styles.checkBoxLabel, { color: themeColor.text }]}>{label}</Text>
    </TouchableOpacity>
  );
}

/**
 * Radio button component
 * Props:
 *   - label: string (required) - Radio button label
 *   - checked: boolean (optional) - Indicates if the radio button is checked
 *   - onChange: function (optional) - Callback function for radio button change event
 */
export function RadioButton({ s, ref, label, checked, onChange }) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);

  return (
    <TouchableOpacity onPress={onChange} style={styles.radioButtonContainer}>
      {/* Render radio button icon based on the checked state */}
      <View
        ref={ref}
        style={[
          styles.radioButtonIcon,
          labelStyle,
          {
            backgroundColor: checked ? themeColor.primary : themeColor.background,
            borderColor: checked ? themeColor.primary : themeColor.border,
          },
        ]}
      >
        {/* Render dot icon when the radio button is checked */}
        {checked && <View style={styles.dotIcon} />}
      </View>
      <Text style={[styles.radioButtonLabel, { color: themeColor.text }]}>{label}</Text>
    </TouchableOpacity>
  );
}

/**
 * ProgressBar component
 * Props:
 *   - total: number (required) - Maximum value
 *   - value: number (required) - Current value
 *   - color: string (optional) - Progress bar color
 *   - barColor: string (optional) - Progress track color
 */
export function ProgressBar({
  s,
  refer,
  total,
  value,
  width = 100,
  height = 10,
  style = true,
  color,
  barColor,
}) {
  const themeColor = useContext(themeContext);
  const Style = style && {
    width: '100%',
    height: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ECECEC',
    borderRadius: 20,
    overflow: 'hidden',
  };
  const labelStyle = applyStyles(Style, s);
  const progressColor = color || themeColor.primary || 'grey';
  const trackColor = barColor || themeColor.border || 'lightgrey';
  const totalValue = total || 100;
  const Value = value || 50;

  // Calculate the progress value based on the current and maximum values
  const calculatedProgress = parseInt(Value) / parseInt(totalValue);

  const calculateProgressWidth = calculatedProgress * width;

  return (
    <View style={[labelStyle, { width, backgroundColor: trackColor }]}>
      <View
        ref={refer}
        style={[
          {
            height,
            width: calculateProgressWidth,
            backgroundColor: progressColor,
          },
        ]}
      />
    </View>
  );
}

/**
 * Avatar component
 * Props:
 *   - source: object (required) - Image source object for the avatar image
 *   - size: number (optional) - Avatar size in pixels (default: 50)
 */
export function Avatar({ s, ref, source, size }) {
  const avatarSize = size || 50;
  const labelStyle = applyStyles(styles.label, s);

  return (
    <View
      ref={ref}
      style={[styles.avatarContainer, labelStyle, { width: avatarSize, height: avatarSize }]}
    >
      <Image
        source={source}
        style={[styles.avatarImage, { width: avatarSize, height: avatarSize }]}
      />
    </View>
  );
}

/**
 * Divider component
 * Props:
 *   - color: string (optional) - Divider color
 */
export function Divider({ s, ref, color }) {
  const themeColor = useContext(themeContext);
  const dividerColor = color || themeColor.border || 'grey';
  const labelStyle = applyStyles(styles.label, s);

  return <View ref={ref} style={[styles.divider, labelStyle, { backgroundColor: dividerColor }]} />;
}

/**
 * Badge component
 * Props:
 *   - label: string (required) - Badge label
 *   - backgroundColor: string (optional) - Badge background color
 *   - textColor: string (optional) - Badge text color
 */
export function Badge({ s, ref, label, backgroundColor, textColor }) {
  const themeColor = useContext(themeContext);
  const badgeBackgroundColor = backgroundColor || themeColor.primary || 'lightgrey';
  const badgeTextColor = textColor || themeColor.text || 'grey';
  const labelStyle = applyStyles(styles.label, s);

  return (
    <View
      ref={ref}
      style={[styles.badgeContainer, labelStyle, { backgroundColor: badgeBackgroundColor }]}
    >
      <Text style={[styles.badgeText, { color: badgeTextColor }]}>{label}</Text>
    </View>
  );
}

/**
 * AvatarBadge component
 * Props:
 *   - source: object (required) - Image source object for the avatar image
 *   - size: number (optional) - Avatar size in pixels (default: 50)
 *   - badgeLabel: string (optional) - Badge label
 *   - badgeBackgroundColor: string (optional) - Badge background color
 *   - badgeTextColor: string (optional) - Badge text color
 */
export function AvatarBadge({
  s,
  ref,
  source,
  size,
  badgeLabel,
  badgeBackgroundColor,
  badgeTextColor,
}) {
  const avatarSize = size || 50;
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);

  return (
    <View
      ref={ref}
      style={[styles.avatarContainer, labelStyle, { width: avatarSize, height: avatarSize }]}
    >
      <Image
        source={source}
        style={[styles.avatarImage, { width: avatarSize, height: avatarSize }]}
      />
      {badgeLabel && (
        <Badge
          label={badgeLabel}
          backgroundColor={badgeBackgroundColor || themeColor.primary}
          textColor={badgeTextColor || themeColor.text}
        />
      )}
    </View>
  );
}

/**
 * Tag component
 * Props:
 *   - label: string (required) - Tag label
 *   - backgroundColor: string (optional) - Tag background color
 *   - textColor: string (optional) - Tag text color
 */
export function Tag({ s, ref, label, backgroundColor, textColor }) {
  const themeColor = useContext(themeContext);
  const tagBackgroundColor = backgroundColor || themeColor.background || 'lightgrey';
  const tagTextColor = textColor || themeColor.text || 'grey';
  const labelStyle = applyStyles(styles.label, s);

  return (
    <View
      ref={ref}
      style={[styles.tagContainer, labelStyle, { backgroundColor: tagBackgroundColor }]}
    >
      <Text style={[styles.tagText, { color: tagTextColor }]}>{label}</Text>
    </View>
  );
}

/**
 * Chip component
 * Props:
 *   - label: string (required) - Chip label
 *   - onPress: function (optional) - Callback function for chip press event
 *   - backgroundColor: string (optional) - Chip background color
 *   - textColor: string (optional) - Chip text color
 */
export function Chip({ s, ref, label, onPress, backgroundColor, textColor }) {
  const themeColor = useContext(themeContext);
  const chipBackgroundColor = backgroundColor || themeColor.background || 'lightgrey';
  const chipTextColor = textColor || themeColor.text || 'grey';
  const labelStyle = applyStyles(styles.label, s);

  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      style={[styles.chipContainer, labelStyle, { backgroundColor: chipBackgroundColor }]}
    >
      <Text style={[styles.chipText, { color: chipTextColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

/**
 * AvatarChip component
 * Props:
 *   - source: object (required) - Image source object for the avatar image
 *   - label: string (required) - Chip label
 *   - onPress: function (optional) - Callback function for chip press event
 *   - avatarSize: number (optional) - Avatar size in pixels (default: 30)
 *   - chipBackgroundColor: string (optional) - Chip background color
 *   - chipTextColor: string (optional) - Chip text color
 */
export function AvatarChip({
  s,
  ref,
  source,
  label,
  onPress,
  avatarSize,
  chipBackgroundColor,
  chipTextColor,
}) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);

  return (
    <TouchableOpacity ref={ref} onPress={onPress} style={[styles.avatarChipContainer, labelStyle]}>
      <AvatarBadge
        source={source}
        size={avatarSize || 30}
        badgeLabel={label}
        badgeBackgroundColor={chipBackgroundColor || themeColor.primary}
        badgeTextColor={chipTextColor || themeColor.text}
      />
    </TouchableOpacity>
  );
}

/**
 * ListSeparator component
 * Props:
 *   - color: string (optional) - Separator color
 */
export function ListSeparator({ ref, color }) {
  const themeColor = useContext(themeContext);
  const separatorColor = color || themeColor.border || 'grey';

  return <View ref={ref} style={[styles.listSeparator, { backgroundColor: separatorColor }]} />;
}

/**
 * TabBar component
 * Props:
 *   - tabs: array (required) - Array of tab objects { label: string, onPress: function }
 *   - activeTab: number (optional) - Index of the active tab
 *   - tabBarColor: string (optional) - Tab bar color
 *   - tabColor: string (optional) - Tab color
 *   - activeTabColor: string (optional) - Active tab color
 */
export function TabBar({ ref, tabs, activeTab, tabBarColor, tabColor, activeTabColor }) {
  const themeColor = useContext(themeContext);
  const tabBackgroundColor = tabBarColor || themeColor.background || 'lightgrey';
  const tabTextColor = tabColor || themeColor.text || 'grey';
  const activeTabTextColor = activeTabColor || themeColor.primary || 'darkgrey';

  return (
    <View ref={ref} style={[styles.tabBarContainer, { backgroundColor: tabBackgroundColor }]}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, index === activeTab && { borderBottomColor: activeTabTextColor }]}
          onPress={tab.onPress}
        >
          <Text
            style={[
              styles.tabText,
              index === activeTab ? { color: activeTabTextColor } : { color: tabTextColor },
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

/**
 * Modal component
 * Props:
 *   - visible: boolean (required) - Indicates if the modal is visible
 *   - onClose: function (required) - Callback function for modal close event
 *   - children: ReactNode (required) - Content of the modal
 *   - backgroundColor: string (optional) - Modal background color
 */
export function Modal({ s, ref, visible, onClose, children, backgroundColor }) {
  if (!visible) {
    return null;
  }

  const themeColor = useContext(themeContext);
  const modalBackgroundColor = backgroundColor || themeColor.background || 'lightgrey';

  return (
    <View ref={ref} style={[styles.modalContainer, { backgroundColor: modalBackgroundColor }]}>
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose} />
      <View style={styles.modalContent}>{children}</View>
    </View>
  );
}

/**
 * IconButton component
 * Props:
 *   - icon: object (required) - FontAwesome icon name for the icon
 *   - onPress: function (required) - Callback function for button press event
 *   - color: string (optional) - Icon color
 *   - background: string (optional) - background color
 *   - size: integer (optional) - Size number
 *   - circle: boolean (optional) - Icon circle or sequare
 */
export function IconButton({ s, ref, icon, onPress, color, backgroundColor, size, circle }) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);
  const iconColor = color || themeColor.text || 'grey';
  const iconsize = size || 24;
  const iconName = icon || 'heart';
  const background = backgroundColor || themeColor.background || 'lightgrey';
  const radius = circle ? 50 : 0 || 0;

  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      style={[styles.iconButton, labelStyle, { backgroundColor: background, borderRadius: radius }]}
    >
      <FontAwesome name={iconName} style={styles.icon} size={iconsize} color={iconColor} />
    </TouchableOpacity>
  );
}

/**
 * Carousel component
 * Props:
 *   - items: array (required) - List of carousel items
 *   - renderItem: function (required) - Render function for each carousel item
 *   - containerStyle: object (optional) - Additional styles for the carousel container
 */
export function Carousel({ ref, items, renderItem, containerStyle }) {
  return (
    <View ref={ref} style={[styles.carouselContainer, containerStyle]}>
      {items.map(renderItem)}
    </View>
  );
}

/**
 * Photo component
 * Props:
 *   - s: object (optional) - Additional styles to be applied to the container
 *   - ref: object (optional) - Reference to the component
 *   - source: object (required) - Image source object for the hero image
 *   - style: boolean (optional) - Turn off or on the default styling
 *   - color: string (optional) - Background color for the image
 *   - placeholderColor: string (optional) - Placeholder background color when no valid source image is provided
 */
export function Photo({ s, ref, source, style = true, color, placeholderColor }) {
  const isRequireSource = typeof source === 'number'; // Check if source is a require source

  const hasValidSource = source ? true : false;
  const defaultStyle = style
    ? {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 5,
      }
    : null;
  const labelStyle = applyStyles(defaultStyle, s);
  const backgroundColor = placeholderColor || 'lightgrey';

  const imageSource = isRequireSource ? source : { uri: source }
  
  return hasValidSource ? (
    <Image
      ref={ref}
      source={imageSource}
      style={[labelStyle, { backgroundColor: color || null }]}
    />
  ) : (
    <View ref={ref} style={[labelStyle, { backgroundColor: backgroundColor }]} />
  );
}

/**
 * HeroImage component
 * Props:
 *   - source: object (required) - Image source object for the hero image
 *   - title: string (optional) - Title or caption for the hero image
 *   - placeholderColor: string (optional) - Placeholder background color when no valid source image is provided
 */
export function HeroImage({ s, ref, source, title, placeholderColor }) {
  const hasValidSource = source && source.uri;
  const labelStyle = applyStyles(styles.label, s);
  const backgroundColor = placeholderColor || 'lightgrey';

  return (
    <View ref={ref} style={[styles.heroImageContainer, labelStyle]}>
      {hasValidSource ? (
        <Image source={source} style={styles.heroImage} />
      ) : (
        <View style={[styles.heroImagePlaceholder, { backgroundColor }]} />
      )}
      {title && <Text style={styles.heroImageTitle}>{title}</Text>}
    </View>
  );
}

/**
 * TermsAndConditions component
 * Props:
 *   - onPress: function (required) - Callback function for terms and conditions button press event
 *   - textColor: string (optional) - Text color for the terms and conditions button
 */
export function TermsAndConditions({ s, ref, onPress, textColor }) {
  const themeColor = useContext(themeContext);
  const labelStyle = applyStyles(styles.label, s);
  const buttonTextColor = textColor || themeColor.primary || 'grey';

  return (
    <TouchableOpacity ref={ref} onPress={onPress}>
      <Text style={[styles.termsAndConditionsText, labelStyle, { color: buttonTextColor }]}>
        I agree to the Terms and Conditions
      </Text>
    </TouchableOpacity>
  );
}

/**
 * Skeleton component
 * Props:
 *   - width: number (optional) - Width of the skeleton component
 *   - height: number (optional) - Height of the skeleton component
 *   - borderRadius: number (optional) - Border radius of the skeleton component
 *   - duration: number (optional) - Duration of the shimmer animation in milliseconds
 *   - backgroundColor: string (optional) - Background color of the skeleton component
 *   - shimmerColor: string (optional) - Color of the shimmer effect
 */
export function Skeleton({
  width = 100,
  height = 10,
  borderRadius = 0,
  duration = 1000,
  backgroundColor = '#E5E5E5',
  shimmerColor = '#F2F2F2',
}) {
  const translateValue = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.timing(translateValue, {
        toValue: width,
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    shimmerAnimation.start();

    return () => {
      shimmerAnimation.stop();
    };
  }, [duration, translateValue, width]);

  const shimmerTranslate = translateValue.interpolate({
    inputRange: [-width, width],
    outputRange: [-width, width],
  });

  return (
    <View style={[styles.container, { width, height, borderRadius, backgroundColor }]}>
      <Animated.View
        style={[
          styles.shimmer,
          { transform: [{ translateX: shimmerTranslate }], backgroundColor: shimmerColor },
        ]}
      />
    </View>
  );
}

/**
 * SkeletonProfile component
 */
export function SkeletonProfile() {
  const translateValue = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.timing(translateValue, {
        toValue: 100,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    shimmerAnimation.start();

    return () => {
      shimmerAnimation.stop();
    };
  }, [translateValue]);

  const shimmerTranslate = translateValue.interpolate({
    inputRange: [-100, 100],
    outputRange: [-100, 100],
  });

  return (
    <View style={styles.ProfileSkeletonContainer}>
      <View style={styles.profileHeader}>
        <Animated.View
          style={[styles.PSavatar, { transform: [{ translateX: shimmerTranslate }] }]}
        />
        <View style={styles.userInfo}>
          <Animated.View
            style={[
              styles.shimmerText,
              { width: '80%', transform: [{ translateX: shimmerTranslate }] },
            ]}
          />
          <Animated.View
            style={[
              styles.shimmerText,
              { width: '60%', transform: [{ translateX: shimmerTranslate }] },
            ]}
          />
        </View>
      </View>
      <View style={styles.PSseparator} />
      <View style={styles.profileContent}>
        <Animated.View
          style={[
            styles.shimmerText,
            { width: '100%', transform: [{ translateX: shimmerTranslate }] },
          ]}
        />
        <Animated.View
          style={[
            styles.shimmerText,
            { width: '70%', transform: [{ translateX: shimmerTranslate }] },
          ]}
        />
        <Animated.View
          style={[
            styles.shimmerText,
            { width: '80%', transform: [{ translateX: shimmerTranslate }] },
          ]}
        />
      </View>
    </View>
  );
}

/**
 * EmptyScreenSkeleton component
 */
export function EmptyScreenSkeleton() {
  const translateValue = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.timing(translateValue, {
        toValue: 100,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    shimmerAnimation.start();

    return () => {
      shimmerAnimation.stop();
    };
  }, [translateValue]);

  const shimmerTranslate = translateValue.interpolate({
    inputRange: [-100, 100],
    outputRange: [-100, 100],
  });

  return (
    <View style={styles.EScontainer}>
      <View style={styles.EScontent}>
        <Animated.View
          style={[styles.shimmerBlock, { transform: [{ translateX: shimmerTranslate }] }]}
        />
        <Animated.View
          style={[styles.shimmerBlock, { transform: [{ translateX: shimmerTranslate }] }]}
        />
        <Animated.View
          style={[styles.shimmerBlock, { transform: [{ translateX: shimmerTranslate }] }]}
        />
        <Animated.View
          style={[styles.shimmerBlock, { transform: [{ translateX: shimmerTranslate }] }]}
        />
      </View>
    </View>
  );
}

/**
 * ActivityIndicator component
 * Props:
 *   - color: string (optional) - Background color of the skeleton component
 */
export function CustomActivityIndicator({ color }) {
  const rotateValue = new Animated.Value(0);
  const DotColor = color || 'grey';
  const startAnimation = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  startAnimation();

  return (
    <View style={styles.AScontainer}>
      <Animated.View
        style={[styles.activityIndicator, { transform: [{ rotate: rotateInterpolation }] }]}
      >
        <View style={[styles.ASdot, { backgroundColor: DotColor }]} />
        <View style={[styles.ASdot, { backgroundColor: DotColor }]} />
        <View style={[styles.ASdot, { backgroundColor: DotColor }]} />
      </Animated.View>
    </View>
  );
}

/**
 * Bettaga ActivityIndicator component
 */
export function BettagaActivityIndicator() {
  const translateY = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -40,
          duration: 600,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 600,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={styles.Bettagacontainer}>
      <Animated.View
        style={[
          styles.Bettagacard,
          { transform: [{ translateY }] },
          { backgroundColor: '#FFD700' }, // Customize the colors as desired
        ]}
      />
      <Animated.View
        style={[
          styles.Bettagacard,
          { transform: [{ translateY }] },
          { backgroundColor: '#FF8C00' },
        ]}
      />
      <Animated.View
        style={[
          styles.Bettagacard,
          { transform: [{ translateY }] },
          { backgroundColor: '#FF4500' },
        ]}
      />
      <Animated.View
        style={[
          styles.Bettagacard,
          { transform: [{ translateY }] },
          { backgroundColor: '#FF1493' },
        ]}
      />
    </View>
  );
}

const styles = {
  // Style
  Div: {
    // width: '100%'
  },
  Box: {},
  text: {},
  // Bettaga
  Bettagacontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bettagacard: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  // Typography
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    fontStyle: 'normal',
    letterSpacing: 0,
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  //
  AScontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ASdot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  // Skeletons
  EScontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  EScontent: {
    width: '80%',
    height: 120,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerBlock: {
    width: '90%',
    height: 10,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  ProfileSkeletonContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    elevation: 2,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  PSavatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E5E5E5',
  },
  userInfo: {
    marginLeft: 16,
  },
  shimmerText: {
    marginBottom: 8,
    height: 14,
    backgroundColor: '#E5E5E5',
  },
  PSseparator: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 16,
  },
  profileContent: {
    marginBottom: 16,
  },
  container: {
    overflow: 'hidden',
  },
  shimmer: {
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  modalContainer: {
    zIndex: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'absolute',
    alignSelf: 'center',
  },
  alertBox: {
    padding: 20,
    borderRadius: 5,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertMessage: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    marginBottom: 10,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderRadius: 5,
    width: width * 0.8,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
  },
  toastContainer: {
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  toastText: {
    fontWeight: 'bold',
  },
  // Existing styles...
  checkBoxLabel: {
    marginLeft: 10,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonIcon: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotIcon: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  avatarImage: {
    resizeMode: 'cover',
  },
  divider: {
    height: 1,
    width: '100%',
  },
  // Existing styles...
  badgeContainer: {
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  tagContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    fontSize: 14,
  },
  chipContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    fontSize: 14,
  },
  avatarChipContainer: {
    marginRight: 10,
  },
  listSeparator: {
    height: 1,
    width: '100%',
  },
  //
  iconButton: {
    padding: 10,
  },
  iconFont: {},
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Existing styles...
  bigActionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 16,
    width: '100%',
  },
  bigActionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heroImageContainer: {
    alignItems: 'center',
  },
  heroImage: {
    width: width * 0.8,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  heroImagePlaceholder: {
    width: width * 0.8,
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  heroImageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsAndConditionsText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
};
