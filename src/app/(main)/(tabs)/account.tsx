import { Typography } from "@/src/components/ui/display";
import { RowNav } from "@/src/components/ui/navigations";
import AppBottomSheet from "@/src/components/ui/overlay/AppBottomSheet/AppBottomSheet";
import { radius } from "@/src/constants";
import { useTheme, useUserPreferences } from "@/src/hooks";
import type BottomSheetType from "@gorhom/bottom-sheet";
import { useRef } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: colors.background.base,
    },
    header: {
      alignItems: "center",
      paddingTop: 12,
      paddingHorizontal: 20,
    },
    headerTitle: {
      fontWeight: "700",
      color: colors.foreground.primary,
    },
    content: {
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 24,
    },
    profileRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 24,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: radius.full,
      marginRight: 14,
      backgroundColor: colors.background.overlay,
    },
    profileText: {
      justifyContent: "center",
    },
    profileName: {
      fontWeight: "700",
      color: colors.foreground.primary,
    },
    profileEmail: {
      marginTop: 2,
      color: colors.foreground.secondary,
    },
    sectionTitle: {
      fontWeight: "700",
      marginTop: 8,
      marginBottom: 12,
      color: colors.foreground.primary,
    },
  });

  return { styles, colors };
};

export default function Account() {
  const { styles } = useStyles();
  const { theme, setTheme, language, setLanguage } = useUserPreferences();
  const sheetRef = useRef<BottomSheetType>(null);

  const isDark = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const isArabic = language === "ar";

  const handleToggleLanguage = () => {
    setLanguage(isArabic ? "en" : "ar");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Typography
          variant="normalBold"
          style={styles.headerTitle}
          textTransform="none"
        >
          Account
        </Typography>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile */}
        <TouchableOpacity style={styles.profileRow} activeOpacity={0.7}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.avatar}
          />
          <View style={styles.profileText}>
            <Typography variant="mediumBold" style={styles.profileName}>
              Jonathan Smith
            </Typography>
            <Typography variant="smallRegular">
              jonathan@kimzshop.com
            </Typography>
          </View>
        </TouchableOpacity>

        {/* Account */}
        <Typography variant="mediumBold" style={styles.sectionTitle}>
          Account
        </Typography>
        <RowNav
          variant="default"
          title="Edit Profile"
          icon="user"
          trailing="chevron"
          onPress={() => {}}
        />
        <RowNav
          variant="default"
          title="Change Password"
          icon="lock"
          trailing="chevron"
          onPress={() => {}}
        />

        {/* Shopping */}
        <Typography variant="mediumBold" style={styles.sectionTitle}>
          Shopping
        </Typography>
        <RowNav
          variant="default"
          title="Address"
          icon="map-pin"
          trailing="chevron"
          onPress={() => {}}
        />
        <RowNav
          variant="default"
          title="Payment Methods"
          icon="credit-card"
          trailing="chevron"
          onPress={() => {}}
        />
        <RowNav
          variant="default"
          title="Stores You Follow"
          icon="shopping-cart"
          trailing="chevron"
          onPress={() => {}}
        />
        <RowNav
          variant="default"
          title="My Orders"
          icon="truck"
          trailing="chevron"
          onPress={() => {}}
        />

        {/* Preferences */}
        <Typography variant="mediumBold" style={styles.sectionTitle}>
          Preferences
        </Typography>
        <RowNav
          variant="default"
          title="Notifications"
          icon="bell"
          trailing="chevron"
          onPress={() => {}}
        />
        <RowNav
          variant="default"
          title="Security"
          icon="shield"
          trailing="chevron"
          onPress={() => {}}
        />
        <RowNav
          variant="default"
          title="Language"
          icon="world"
          trailing="chevronWithValue"
          trailingValue={isArabic ? "العربية" : "English"}
          onPress={handleToggleLanguage}
        />
        <RowNav
          variant="default"
          title="Theme"
          icon="palette"
          trailing="chevronWithValue"
          trailingValue={isDark ? "Dark" : "Light"}
          onPress={handleToggleTheme}
        />

        {/* Support */}
        <Typography variant="mediumBold" style={styles.sectionTitle}>
          Support
        </Typography>
        <RowNav
          variant="default"
          title="Help & Support"
          icon="help"
          trailing="chevron"
          onPress={() => {}}
        />
        <RowNav
          variant="default"
          title="Legal and Policies"
          icon="file-text"
          trailing="chevron"
          onPress={() => {}}
        />
        <RowNav
          variant="danger"
          title="Logout"
          icon="logout"
          trailing="chevron"
          onPress={() => sheetRef.current?.expand()}
        />
      </ScrollView>

      {/* Delete-account confirmation sheet */}
      <AppBottomSheet
        ref={sheetRef}
        title="Logout of All Devices"
        description="This action can't be undone."
      >
        <AppBottomSheet.Content>
          {/* your buttons / static content */}
        </AppBottomSheet.Content>
      </AppBottomSheet>
    </SafeAreaView>
  );
}
