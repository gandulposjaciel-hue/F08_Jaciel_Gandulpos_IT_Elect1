import React, { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function CommentSection() {
  const [comments, setComments] = useState([
    { id: "1", text: "gwapaha oii!" },
    { id: "2", text: "hoy imo utang" },
  ]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim().length === 0) return;
    setComments([...comments, { id: Date.now().toString(), text: newComment }]);
    setNewComment("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.commentBox}>
      <Text style={styles.commentText}>{item.text}</Text>
      <TouchableOpacity style={styles.replyBtn}>
        <Text style={styles.replyText}>Reply</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={comments} keyExtractor={(item) => item.id} renderItem={renderItem} />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={addComment}>
          <Text style={styles.sendText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  commentBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
  },
  commentText: { fontSize: 16, color: "#333", flex: 1 },
  replyBtn: { paddingLeft: 10 },
  replyText: { color: "#007bff", fontWeight: "500" },
  inputRow: {
    flexDirection: "row",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  input: {
    flex: 0.98,
    borderWidth: 0.98,
    borderColor: "#ccc",
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  sendBtn: {
    marginLeft: 10,
    marginBottom:20,
    backgroundColor: "pink",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 20,
  },
  sendText: { color: "#fff", fontWeight: "600" },
});