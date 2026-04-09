import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function ForYou({ onOpenComment }) {
  return (
    <ImageBackground source={require('./assets/foryou.png')} style={styles.container}>
      
      {/* RIGHT ICON */}
      <View style={styles.rightButtons}>
        
        <View style={styles.avatarContainer}>
          <Image source={require('./assets/avt2.png')} style={styles.avatar} />
          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.iconWrapper}>
          <Image source={require('./assets/tim.png')} style={styles.iconImg} />
          <Text style={styles.statsText}>328.7K</Text>
        </TouchableOpacity>

        {/* ✅ FIX COMMENT */}
        <TouchableOpacity style={styles.iconWrapper} onPress={onOpenComment}>
          <Image source={require('./assets/cmt.png')} style={styles.iconImg} />
          <Text style={styles.statsText}>578</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <Image source={require('./assets/share.png')} style={styles.iconImg} />
          <Text style={styles.statsText}>Share</Text>
        </TouchableOpacity>

        <Image source={require('./assets/nhac1.png')} style={styles.music} />
      </View>

      {/* TEXT */}
      <View style={styles.bottomInfo}>
        <Text style={styles.username}>@craig_love</Text>

        <Text style={styles.caption}>
          The most satisfying job #fyp #satisfying #roadmarking
        </Text>

        <View style={styles.musicRow}>
          <Text style={styles.musicText}>Roddy Ricch - The Box</Text>
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  rightButtons: {
    position: 'absolute',
    right: 10,
    bottom: 15,
    alignItems: 'center'
  },

  avatarContainer: { marginBottom: 20, alignItems: 'center' },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'white'
  },

  plus: {
    position: 'absolute',
    bottom: -6,
    backgroundColor: '#ff0050',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },

  plusText: { color: 'white', fontSize: 12 },

  iconWrapper: { alignItems: 'center', marginBottom: 18 },

  iconImg: { width: 32, height: 32 },

  statsText: { color: 'white', fontSize: 12, marginTop: 3 },

  music: { width: 38, height: 38, marginTop: 8 },

  bottomInfo: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    width: '75%'
  },

  username: { color: 'white', fontWeight: 'bold', fontSize: 15 },

  caption: { color: 'white', marginVertical: 5 },

  musicRow: { flexDirection: 'row' },

  musicText: { color: 'white', fontSize: 13 }
});