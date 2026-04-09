import * as React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FollowingScreen from './Following';
import ForYouScreen from './ForYou';
import CommentScreen from './Comment';

const Tab = createBottomTabNavigator();

// --- Màn hình Home (Xử lý chuyển Following/For You và Modal Comment) ---
function HomeScreen({ navigation }) {
  const [tab, setTab] = React.useState('forYou');
  const [isCommentVisible, setCommentVisible] = React.useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      
      {/* 1. TOP TAB CUSTOM */}
      <View style={styles.topTabContainer}>
        <TouchableOpacity onPress={() => setTab('following')}>
          <Text style={[styles.topTabText, tab === 'following' && styles.activeTabText]}>
            Following
          </Text>
          {tab === 'following' && <View style={styles.indicator} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTab('forYou')}>
          <Text style={[styles.topTabText, tab === 'forYou' && styles.activeTabText]}>
            For You
          </Text>
          {tab === 'forYou' && <View style={styles.indicator} />}
        </TouchableOpacity>
      </View>

      {/* 2. HIỂN THỊ NỘI DUNG VIDEO */}
      {tab === 'following' ? (
        <FollowingScreen onOpenComment={() => setCommentVisible(true)} />
      ) : (
        <ForYouScreen onOpenComment={() => setCommentVisible(true)} />
      )}

      {/* 3. MODAL COMMENT (Hiện đè lên như ảnh mẫu) */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCommentVisible}
        onRequestClose={() => setCommentVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={{ flex: 1 }} 
            onPress={() => setCommentVisible(false)} 
          />
          <View style={styles.modalContent}>
            <View style={styles.dragIndicator} />
            <CommentScreen 
              navigation={navigation} 
              onClose={() => setCommentVisible(false)} 
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const Empty = () => <View style={{ flex: 1, backgroundColor: 'black' }} />;

// --- Root App ---
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { 
            backgroundColor: 'black', 
            height: 60, 
            borderTopWidth: 0 
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;
            if (route.name === 'Home') icon = require('./assets/home.png');
            else if (route.name === 'Discover') icon = require('./assets/kinh.png');
            else if (route.name === 'Inbox') icon = require('./assets/thu.png');
            else if (route.name === 'Profile') icon = require('./assets/user.png');

            if (route.name === 'Add') {
              return <Image source={require('./assets/cong.png')} style={{ width: 45, height: 30 }} />;
            }

            return (
              <Image 
                source={icon} 
                style={{ width: 26, height: 26, tintColor: focused ? 'white' : 'gray' }} 
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={Empty} />
        <Tab.Screen name="Add" component={Empty} />
        <Tab.Screen name="Inbox" component={Empty} listeners={{
          tabPress: (e) => {
            // Có thể dùng để điều hướng hoặc xử lý riêng
          },
        }} />
        <Tab.Screen name="Profile" component={Empty} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  topTabContainer: {
    position: 'absolute',
    top: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 10,
  },
  topTabText: {
    fontSize: 17,
    fontWeight: '700',
    color: 'gray',
    marginHorizontal: 15,
  },
  activeTabText: { color: 'white' },
  indicator: {
    backgroundColor: 'white',
    height: 2,
    width: 30,
    alignSelf: 'center',
    marginTop: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '75%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#dbdbdb',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
});