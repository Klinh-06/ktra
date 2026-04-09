import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
// ✅ Import Ionicons để tránh lỗi "Can't find variable: Ionicons"
import { Ionicons } from '@expo/vector-icons';

export default function Following({ onOpenComment }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/follow.png')} 
        style={styles.background}
      >
        
        {/* CỘT ICON BÊN PHẢI */}
        <View style={styles.rightButtons}>
          
          {/* Avatar User */}
          <View style={styles.avatarContainer}>
            <Image source={require('./assets/avt1.png')} style={styles.avatar} />
            <View style={styles.plusIcon}>
              <Ionicons name="add" size={14} color="white" />
            </View>
          </View>

          {/* Nút Like */}
          <TouchableOpacity style={styles.iconWrapper}>
            <Image source={require('./assets/tim.png')} style={styles.iconImg} />
            <Text style={styles.statsText}>1.5M</Text>
          </TouchableOpacity>

          {/* ✅ NÚT COMMENT: Mở Modal khi bấm */}
          <TouchableOpacity style={styles.iconWrapper} onPress={onOpenComment}>
            <Image source={require('./assets/cmt.png')} style={styles.iconImg} />
            <Text style={styles.statsText}>12.8K</Text>
          </TouchableOpacity>

          {/* Nút Share */}
          <TouchableOpacity style={styles.iconWrapper}>
            <Image source={require('./assets/share.png')} style={styles.iconImg} />
            <Text style={styles.statsText}>Share</Text>
          </TouchableOpacity>

          {/* Đĩa nhạc xoay (Ảnh nhac1.png) */}
          <View style={styles.musicDiscContainer}>
             <Image source={require('./assets/nhac1.png')} style={styles.musicDisc} />
          </View>
        </View>

        {/* THÔNG TIN BÊN DƯỚI (Caption) */}
        <View style={styles.bottomInfo}>
          <Text style={styles.username}>@khanh_linh_2005</Text>
          <Text style={styles.caption} numberOfLines={2}>
            Giao diện Following hoàn thiện cho bài thi. #ReactNative #TikTokUI #2026
          </Text>
          
          <View style={styles.musicRow}>
            <Ionicons name="musical-notes" size={16} color="white" />
            <Text style={styles.musicText}> Original Sound - Linh Dev</Text>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    flex: 1,
  },
  rightButtons: {
    position: 'absolute',
    right: 10,
    bottom: 30, // Chỉnh lại để không bị đè bởi Bottom Tab
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 25,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
  },
  plusIcon: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: '#fe2c55',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 18,
  },
  iconImg: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  statsText: {
    color: 'white',
    fontSize: 12,
    marginTop: 3,
    fontWeight: '600',
  },
  musicDiscContainer: {
    marginTop: 10,
  },
  musicDisc: {
    width: 45,
    height: 45,
  },
  bottomInfo: {
    position: 'absolute',
    bottom: 25,
    left: 15,
    width: '70%',
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  caption: {
    color: 'white',
    fontSize: 14,
    lineHeight: 18,
  },
  musicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  musicText: {
    color: 'white',
    fontSize: 13,
    marginLeft: 5,
  },
});