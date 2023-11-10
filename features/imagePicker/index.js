import * as ImagePicker from 'expo-image-picker';

export const imagePicker = async () => {
  try {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      return {
        permission: false,
        canceled: false,
        error: 'Error accessing image library',
        result: null,
      };
    }

    const pickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: false,
    };

    const result = await ImagePicker.launchImageLibraryAsync(pickerOptions);

    const canceled = result.canceled;
    const error = null; // No error for now
    const formattedResult = !result.canceled ? result : null;

    return { permission: true, canceled, error, result: formattedResult };
  } catch (error) {
    return {
      permission: true,
      canceled: false,
      error: 'Error accessing image library',
      result: null,
    };
  }
};


/**
 * const YourComponent = () => {
  const [error, setError] = useState(null);

  const { canceled, error: imageError, result: imageResult } = imagePicker();

  if (canceled) {
    // Handle the canceled case
  } else if (imageError) {
    // Handle the error case
    setError(imageError);
  } else if (imageResult) {
    // Handle the successful result case
    // Your validation and setImageValidated logic
  }

  // ... rest of your component code
};

 */