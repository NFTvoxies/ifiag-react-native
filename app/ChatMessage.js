import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatMessage = ({ message, isOwnMessage, sender }) => {
  return (
    <View style={[styles.messageContainer, isOwnMessage && styles.ownMessage]}>
      <View style={styles.senderContainer}>
        {!isOwnMessage && <Text style={styles.senderText}>{sender}: </Text>}
      </View>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  ownMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  senderContainer: {
    flex: 1,
  },
  senderText: {
    color: '#666',
  },
  messageText: {
    color: '#333',
  },
});

export default ChatMessage;