import React from "react";
import { Tabs } from "expo-router";
import { Svg, Path } from "react-native-svg";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M7.551 4.022L2.7 8.268c-.416.364-.137 1.01.436 1.01.35 0 .634.263.634.586v2.703c0 2.325 0 3.488.782 4.21.783.723 2.041.723 4.559.723h1.78c2.518 0 3.776 0 4.558-.722.783-.723.783-1.885.783-4.21V9.863c0-.323.284-.585.634-.585.573 0 .852-.647.436-1.011l-4.852-4.246C11.289 3.007 10.709 2.5 10 2.5c-.71 0-1.29.507-2.449 1.522z"
                fill="#0072C6"
              />
              <Path d="M10 13.333h.008H10z" fill="#fff" />
              <Path
                d="M10 13.333h.008"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "All Products",
          tabBarIcon: ({ color }) => (
            <Svg
              width={21}
              height={20}
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M13.833 4.167c0-.777 0-1.165.127-1.471.169-.409.493-.733.902-.902.306-.127.694-.127 1.471-.127.777 0 1.165 0 1.471.127.409.169.733.493.902.902.127.306.127.694.127 1.47V7.5c0 .777 0 1.165-.127 1.471-.169.409-.494.733-.902.902-.306.127-.694.127-1.471.127-.777 0-1.165 0-1.471-.127a1.667 1.667 0 01-.902-.902c-.127-.306-.127-.694-.127-1.47V4.166zM13.833 15.833c0-.776 0-1.165.127-1.47.169-.41.493-.734.902-.903.306-.127.694-.127 1.471-.127.777 0 1.165 0 1.471.127.409.17.733.494.902.902.127.306.127.695.127 1.471 0 .777 0 1.165-.127 1.471-.169.409-.494.733-.902.902-.306.127-.694.127-1.471.127-.777 0-1.165 0-1.471-.127a1.667 1.667 0 01-.902-.902c-.127-.306-.127-.694-.127-1.47zM2.167 13.333c0-1.571 0-2.357.488-2.845S3.93 10 5.5 10h1.667c1.571 0 2.357 0 2.845.488s.488 1.274.488 2.845V15c0 1.571 0 2.357-.488 2.845s-1.274.488-2.845.488H5.5c-1.571 0-2.357 0-2.845-.488S2.167 16.571 2.167 15v-1.667zM2.167 4.167c0-.777 0-1.165.127-1.471.169-.409.493-.733.902-.902.306-.127.694-.127 1.471-.127H8c.777 0 1.165 0 1.471.127.409.169.733.493.902.902.127.306.127.694.127 1.47 0 .777 0 1.166-.127 1.472-.169.408-.493.733-.902.902-.306.127-.694.127-1.47.127H4.666c-.777 0-1.165 0-1.471-.127a1.667 1.667 0 01-.902-.902c-.127-.306-.127-.695-.127-1.471z"
                stroke="#555"
                strokeWidth={1.5}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M3.617 14.065L2.648 8.28c-.157-.941-.236-1.412.006-1.721.243-.309.692-.309 1.588-.309h11.516c.896 0 1.345 0 1.588.309.242.31.163.78.006 1.72l-.97 5.786c-.341 2.04-.512 3.06-1.189 3.664-.676.604-1.649.604-3.593.604H8.4c-1.944 0-2.917 0-3.593-.604-.677-.604-.848-1.624-1.19-3.664z"
                stroke="#555"
                strokeWidth={1.5}
              />
              <Path
                d="M5.833 6.25v-.417a4.167 4.167 0 018.333 0v.417M3.75 14.583h12.5"
                stroke="#555"
                strokeWidth={1.5}
              />
            </Svg>
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "My Orders",
          tabBarIcon: ({ color }) => (
            <Svg
              width={21}
              height={20}
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12.167 7.5H15.5M12.167 10.417h2.5"
                stroke="#555"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              <Path
                d="M14.667 2.5H6.334a4.167 4.167 0 00-4.167 4.167v6.666A4.167 4.167 0 006.334 17.5h8.333a4.167 4.167 0 004.167-4.167V6.667A4.167 4.167 0 0014.667 2.5z"
                stroke="#555"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
              <Path
                d="M4.667 13.333c1.007-2.15 4.76-2.292 5.833 0"
                stroke="#555"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M9.25 7.5a1.667 1.667 0 11-3.333 0 1.667 1.667 0 013.333 0z"
                stroke="#555"
                strokeWidth={1.5}
              />
            </Svg>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Svg
              width={21}
              height={20}
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12.167 7.5H15.5M12.167 10.417h2.5"
                stroke="#555"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              <Path
                d="M14.667 2.5H6.334a4.167 4.167 0 00-4.167 4.167v6.666A4.167 4.167 0 006.334 17.5h8.333a4.167 4.167 0 004.167-4.167V6.667A4.167 4.167 0 0014.667 2.5z"
                stroke="#555"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
              <Path
                d="M4.667 13.333c1.007-2.15 4.76-2.292 5.833 0"
                stroke="#555"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M9.25 7.5a1.667 1.667 0 11-3.333 0 1.667 1.667 0 013.333 0z"
                stroke="#555"
                strokeWidth={1.5}
              />
            </Svg>
          ),
        }}
      />

      <Tabs.Screen name="api" options={{ href: null }} />
      <Tabs.Screen name="components/ProductListItem" options={{ href: null }} />
    </Tabs>
    
  );
}
