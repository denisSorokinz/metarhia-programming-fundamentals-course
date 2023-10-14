class ChatRoom {
  messages = ["hello"];
}

const mixPubSub = (obj, events = {}) =>
  Object.assign(obj, {
    on(eventName, cb) {
      const callbacks = events[eventName] || [];
      events[eventName] = callbacks;
      callbacks.push(cb);
    },
    emit(eventName, ...data) {
      if (!events[eventName] || events[eventName].length === 0) return;

      events[eventName].forEach((cb) => cb(...data));
    },
  });

const c1 = new ChatRoom();

const c1WithPubSub = mixPubSub(c1);

c1WithPubSub.on("send-message", (msg) => {
  console.log(`captured msg: ${msg}`);
  c1WithPubSub.messages.push(msg);
});

c1WithPubSub.emit("send-message", "test");

console.dir(c1WithPubSub);
