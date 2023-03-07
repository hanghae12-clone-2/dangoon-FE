import Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

// let sockJS = new SockJS('http://13.209.11.12/ws/chat/');
// let stompClient = Stomp.over(sockJS);

export default class SockJs {
  constructor(url) {
    this.sockJS = new SockJS(url);
    this.stompClient = Stomp.over(this.sockJS);
  }

  async connect(roomId, addMessage) {
    this.stompClient.connect(
      {},
      () => {
        this.stompClient.subscribe(`/topic/chat/room/${roomId}`, data => {
          const newMessage = JSON.parse(data.body);
          addMessage(newMessage);
        });
      },
      () => {
        const reload = window.confirm(
          '서버가 불안정 합니다. 새로고침 하시겠습니까?'
        );
        reload && window.location.reload();
      }
    );
  }

  async disconnect() {
    this.stompClient.disconnect();
  }

  send(roomId, sender, message) {
    console.log(roomId, sender, message);
    this.stompClient.send(
      '/app/chat/message',
      {},
      JSON.stringify({
        type: 'TALK',
        roomId: roomId,
        sender: sender,
        message: message,
      })
    );
  }
}

/**
useEffect(() => {
  stompClient.connect({}, () => {
    stompClient.subscribe(
      '/topic/chat/room/79d8f51f-7a6a-4bd5-9649-cbbda78075ca',
      data => {
        console.log(data);
        const newMessage = JSON.parse(data.body);
        console.log(newMessage);
        addMessage(newMessage.message);
        console.log(contents);
      }
    );
  });
}, [contentCnt]);

const handleEnter = (username, content) => {
  console.log(username, content);
  const newMessage = { username, content };
  stompClient.send(
    '/app/chat/message',
    {},
    JSON.stringify({
      type: 'TALK',
      roomId: '79d8f51f-7a6a-4bd5-9649-cbbda78075ca',
      sender: username,
      message: message,
    })
  );
  setMessage('');
  setContentCnt(state => state + 1);
  // addMessage(content);
};

const addMessage = message => {
  setContents(prev => [...prev, message]);
};
 */
