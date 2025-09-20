import React, { useState } from "react";
import { SafeAreaView, View, FlatList, TextInput, TouchableOpacity, Text } from "react-native";
import ChatBubble from "./ChatBubble";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello", sender: "bot" },
    { id: "2", text: "Hi !", sender: "me" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim().length === 0) return;
    const newMessage = { id: Date.now().toString(), text: input, sender: "me" };
    setMessages([newMessage, ...messages]);
    setInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "orange" }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble text={item.text} isMe={item.sender === "me"} />
        )}
        inverted
        contentContainerStyle={{ padding: 10 }}
      />

      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            paddingHorizontal: 15,
          }}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            marginLeft: 10,
            backgroundColor: "#0078fe",
            paddingHorizontal: 20,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}