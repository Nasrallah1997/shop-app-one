import { RowNav } from "@/src/components/ui/navigations";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ---------------------------------------------------------------------------
// Theme — light & dark
// ---------------------------------------------------------------------------
const themes = {
  light: {
    background: "#FFFFFF",
    card: "#FFFFFF",
    border: "#ECECEC",
    textPrimary: "#1A1A1A",
    textSecondary: "#8A8A8E",
    accent: "#1E88FF",
    danger: "#FF3B30",
  },
  dark: {
    background: "#0E0E10",
    card: "#1C1C1E",
    border: "#2C2C2E",
    textPrimary: "#F5F5F5",
    textSecondary: "#9A9A9E",
    accent: "#3B9DFF",
    danger: "#FF453A",
  },
};

export default function Account() {
  const scheme = useColorScheme();
  const c = scheme === "dark" ? themes.dark : themes.light;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: c.textPrimary }]}>
          Account
        </Text>
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
            <Text style={[styles.profileName, { color: c.textPrimary }]}>
              Jonathan Smith
            </Text>
            <Text style={[styles.profileEmail, { color: c.textSecondary }]}>
              jonathan@kimzshop.com
            </Text>
          </View>
        </TouchableOpacity>

        {/* Account */}
        <Text style={[styles.sectionTitle, { color: c.textPrimary }]}>
          Account
        </Text>
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
        <Text style={[styles.sectionTitle, { color: c.textPrimary }]}>
          Shopping
        </Text>
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
        <Text style={[styles.sectionTitle, { color: c.textPrimary }]}>
          Preferences
        </Text>

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
        <Text style={[styles.sectionTitle, { color: c.textPrimary }]}>
          Support
        </Text>

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

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
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
  },
  profileText: {
    justifyContent: "center",
  },
  profileName: {
    fontSize: 17,
    fontWeight: "700",
  },
  profileEmail: {
    fontSize: 14,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
    width: 20,
    textAlign: "center",
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: "600",
  },
  rowValue: {
    fontSize: 14,
    marginRight: 6,
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -8,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
});
