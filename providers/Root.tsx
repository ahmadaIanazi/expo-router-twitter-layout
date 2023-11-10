// import React, { ReactNode } from 'react';
// import AuthProvider from './AuthProvider';
// import Development from './Development';
// import FirebaseProvider from './FirebaseProvider';
// import Hooks from './Hooks';
// import ThemeProvider from './ThemeProvider';
// import QueryProvider from './QueryProvider';
// import ImportsProvider from './ImportsProvider';
// import AnalyticsProvider from './AnalyticsProvider';
// import UpdateProvider from './UpdateProvider';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// // import { BottomsProvider } from 'bottoms';
// // import Layout from '@/app/(bottoms)';


// interface RootProviderProps {
//   children: ReactNode;
// }

// export default function RootProvider({ children }: RootProviderProps): React.JSX.Element {
//   return (
//     <>
//       <Development>
//         <UpdateProvider>
//           <ImportsProvider>
//             <FirebaseProvider>
//               <AuthProvider>
//                 <Hooks>
//                   {/* <QueryProvider> */}
//                   <AnalyticsProvider>
//                     <ThemeProvider>
//                       <SafeAreaProvider>
//                         {/* <BottomsProvider config={Layout}> */}
//                           <>{children}</>
//                         {/* </BottomsProvider> */}
//                       </SafeAreaProvider>
//                     </ThemeProvider>
//                   </AnalyticsProvider>
//                   {/* </QueryProvider> */}
//                 </Hooks>
//               </AuthProvider>
//             </FirebaseProvider>
//           </ImportsProvider>
//         </UpdateProvider>
//       </Development>
//     </>
//   );
// }
