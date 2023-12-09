import * as StoreReview from 'expo-store-review';
import { Linking, Platform } from 'react-native';
import { ANDROID_PACKAGE_NAME, ITUNES_ITEM_NAME } from '../keys/app_store_id';

export const triggerAppReview = async () => {
    try {
        // Check if the platform has the capabilities to use StoreReview.requestReview()
        const isAvailable = await StoreReview.isAvailableAsync();

        if (isAvailable) {
            // Check if StoreReview can direct the user to some kind of store review flow
            const hasAction = await StoreReview.hasAction();

            if (hasAction) {
                // Request a review from the user
                await StoreReview.requestReview();
                // const wait = StoreReview.storeUrl('')
            } else {
                // Fallback: Redirect the user to the store review page
                const androidPackageName = ANDROID_PACKAGE_NAME
                const itunesItemId = ITUNES_ITEM_NAME 

                if (Platform.OS === 'android') {
                    const url = `market://details?id=${androidPackageName}`;
                    Linking.openURL(url);
                } else if (Platform.OS === 'ios') {
                    const url = `itms-apps://itunes.apple.com/app/viewContentsUserReviews?id=${itunesItemId}`;
                    Linking.openURL(url);
                                } else {
                    // Handle for other platforms or web
                    console.log('App review not supported on this platform');
                    throw new Error('App review not supported on this platform');

                }
            }
        } else {
            // Handle when StoreReview is not available on the platform
            console.log('Store review not available on this platform');
            throw new Error('Store review not available on this platform');
        }
    } catch (error) {
        // Handle any errors that occur during the review process
        console.error('Error triggering app review:', error);
        throw new Error('App review process failed');
    }
};
