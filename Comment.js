import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Dữ liệu 7 bình luận chuẩn mẫu TikTok
const COMMENTS = [
  { 
    id: '1', 
    user: 'karennne', 
    text: 'Trời ơi, video cuốn quá Linh ơi! 🔥', 
    time: '2h',
    likes: '15.4K',
    avatar: require('./assets/avt1.png')
  },
  { 
    id: '2', 
    user: 'martini_ron', 
    text: 'Nhạc này tên gì vậy ạ? Nghe chill quá.', 
    time: '5h',
    likes: '1.2K',
    avatar: require('./assets/avt2.png')
  },
  { 
    id: '3', 
    user: 'linh_dev_2005', 
    text: 'Giao diện mượt đấy, 10 điểm không có nhưng! 💯', 
    time: '1d',
    likes: '850',
    avatar: require('./assets/avt1.png')
  },
  { 
    id: '4', 
    user: 'ducanh_đanh', 
    text: 'Video xịn quá, ủng hộ bạn hết mình luôn! 👏', 
    time: '3d',
    likes: '2.1K',
    avatar: require('./assets/avt2.png')
  },
  { 
    id: '5', 
    user: 'user_99', 
    text: 'Làm thêm nhiều clip như này nữa nha bạn ơi.', 
    time: '1w',
    likes: '150',
    avatar: require('./assets/avt1.png')
  },
  { 
    id: '6', 
    user: 'tech_lover', 
    text: 'React Native đỉnh thật sự, layout này chuẩn TikTok rồi.', 
    time: '1w',
    likes: '45',
    avatar: require('./assets/avt2.png')
  },
  { 
    id: '7', 
    user: 'foodie_hn', 
    text: 'Thích cái cách bạn edit video ghê, mượt xỉu.', 
    time: '2w',
    likes: '12',
    avatar: require('./assets/avt1.png')
  },
];

export default function Comment({ onClose }) {
  const renderItem = ({ item }) => (
    <View style={styles.commentItem}>
      <Image source={item.avatar} style={styles.commentAvatar} />
      <View style={styles.commentContent}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.commentText}>
          {item.text} <Text style={styles.timeText}>{item.time}</Text>
        </Text>
      </View>
      <View style={styles.likeSection}>
        <Ionicons name="heart-outline" size={14} color="#ccc" />
        <Text style={styles.likeCount}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Header: Hiển thị tổng số comment và nút đóng */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>1,243 comments</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Danh sách cuộn 7 bình luận */}
      <FlatList
        data={COMMENTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Thanh Input dưới cùng */}
      <View style={styles.inputContainer}>
        <Image source={require('./assets/avt1.png')} style={styles.inputAvatar} />
        <TextInput 
          placeholder="Add comment..." 
          style={styles.input}
          placeholderTextColor="#999"
        />
        <View style={styles.inputIcons}>
          <Text style={styles.atIcon}>@</Text>
          <Ionicons name="happy-outline" size={24} color="black" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 13,
    color: '#000',
  },
  listContent: {
    paddingBottom: 20,
  },
  commentItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'flex-start',
  },
  commentAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  userName: {
    fontSize: 13,
    color: '#8a8a8a',
    fontWeight: '600',
    marginBottom: 2,
  },
  commentText: {
    fontSize: 14,
    color: '#111',
    lineHeight: 18,
  },
  timeText: {
    color: '#999',
    fontSize: 12,
    marginLeft: 5,
  },
  likeSection: {
    alignItems: 'center',
    marginLeft: 10,
    width: 40,
  },
  likeCount: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
    backgroundColor: 'white',
  },
  inputAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 38,
    backgroundColor: '#f1f1f2',
    borderRadius: 19,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  inputIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  atIcon: {
    fontSize: 18,
    marginRight: 12,
    fontWeight: '600',
  }
});