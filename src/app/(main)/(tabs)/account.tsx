import { RowNav } from "@/src/components/ui/navigations";
import { useTheme } from "@/src/hooks";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
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
      fontSize: 20,
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
      width: 64,
      height: 64,
      borderRadius: 32,
      marginRight: 14,
      backgroundColor: colors.background.overlay,
    },
    profileText: {
      justifyContent: "center",
    },
    profileName: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.foreground.primary,
    },
    profileEmail: {
      fontSize: 14,
      marginTop: 2,
      color: colors.foreground.secondary,
    },
    sectionTitle: {
      fontSize: 17,
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

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
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
            <Text style={styles.profileName}>Jonathan Smith</Text>
            <Text style={styles.profileEmail}>jonathan@kimzshop.com</Text>
          </View>
        </TouchableOpacity>

        {/* Account */}
        <Text style={styles.sectionTitle}>Account</Text>
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
        <Text style={styles.sectionTitle}>Shopping</Text>
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
        <Text style={styles.sectionTitle}>Preferences</Text>
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
          trailingValue="English"
          onPress={() => {}}
        />
        <RowNav
          variant="default"
          title="Theme"
          icon="palette"
          trailing="chevronWithValue"
          trailingValue="Light"
          onPress={() => {}}
        />

        {/* Support */}
        <Text style={styles.sectionTitle}>Support</Text>
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
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
