import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PaymentView({
  setLoading,
  setStatus,
  setProgress,
  setTitleUrl,
  setPaid,
  amount,
  description,
}) {
  // Available data to be corrected.
  const callbackURL = 'https://moyasar.com/thanks'; // This should be a thank you message and an API endpoint that gets the URL call and do something about it.
  const currency = 'SAR';

  const paymentFormHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Moyasar Styles -->
  <link rel="stylesheet" href="https://cdn.moyasar.com/mpf/1.7.3/moyasar.css" />

  <!-- Moyasar Scripts -->
  <title>Checkout</title>
  <link rel="stylesheet" href="{{ site.libs.css_lib }}">
  <script src="https://polyfill.io/v3/polyfill.min.js?features=fetch"></script>
  <script src="https://cdn.moyasar.com/mpf/1.7.3/moyasar.js"></script>
    <script src="{{ site.libs.js_lib }}"></script>
</head>
<body style="margin: 2rem;">
    <div class="mysr-form"></div>
    <script>
    Moyasar.init({
        element: '.mysr-form',
        amount: '${amount}',
        currency: '${currency}',
        description: '${description}',
        publishable_api_key: 'pk_test_hfHcrsgpPMgBnsUi7xGaaLmxgdMRXAvmuatUZ7FD',
        callback_url: '${callbackURL}',
        methods: ['creditcard', 'applepay'],
        country_code: 'SA',
        apple_pay: {
            country: 'SA',
            label: 'Awesome Cookie Store',
            validate_merchant_url: 'https://api.moyasar.com/v1/applepay/initiate',
        },
        on_completed: function (payment) {
            return new Promise(function (resolve, reject) {
                window.ReactNativeWebView.postMessage(JSON.stringify(payment));
                resolve();
            });
        }
    })
    </script>
</body>
</html>
`;

  const handleError = () => {
    console.log('Something went wrong in the payment URL');
  };
  const handleError404 = () => {
    console.log('ERROR 404 Page not found');
  };

  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: paymentFormHtml, baseUrl: 'https://bettagah-570df.web.app/' }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onMessage={(event) => {
        const data = event.nativeEvent.data;
        const payment = JSON.parse(event.nativeEvent.data);
        const paymentId = payment.id;
        console.log('PAYMENT ID:', paymentId, payment, data);

        // // Check if payment status is "initiated"
        // if (payment.status === 'initiated') {
        //   console.log('Payment is not complete yet.');
        //   setStatus('initiated');
        // }

        // // Payment is complete, check callback URL
        // if (payment.callback_url === callbackURL) {
        //   console.log('PAYMENT IS TRUE CALLED BACK!');
        // }

        // if (data.startsWith('https://moyasar.com/thanks')) {
        //   // Parse the query parameters from the return URL
        //   const url = new URL(data);
        //   const paymentId = url.searchParams.get('id');
        //   const status = url.searchParams.get('status');
        //   const message = url.searchParams.get('message');

        //   // Handle the payment result
        //   console.log('Payment result:', paymentId, status, message);
        // }
      }}
      onNavigationStateChange={(state) => {
        const url = state.url;
        const regex = /status=([^&]*)/;
        const match = regex.exec(url);
        console.log('PAYMENT STATUS:', state.url, state);
        setLoading(state.loading);
        setTitleUrl(state.title);
        if (match) {
          const status = match[1];
          console.log('MATCH STATUS:', status);
          // Check if payment status is paid
          if (status == 'paid') {
            setPaid(true);
            setStatus('paid');
            setProgress('paid');
          }
          if (status == 'initiated') {
            setPaid(true);
            setStatus('initiated');
            setProgress('initiated');
          }
        } else {
          console.log('- - -');
        }
      }}
      onError={handleError}
      onHttpError={handleError404}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1000,
  },
});
