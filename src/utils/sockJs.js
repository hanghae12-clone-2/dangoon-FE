import Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

export default class SockJs {
  constructor(url, addMessage) {
    this.sockJS = new SockJS(url);
    this.stompClient = Stomp.over(this.sockJS);
    this.addMessage = addMessage;
  }

  async connect(roomId) {
    this.stompClient.connect(
      {},
      () => {
        this.stompClient.subscribe(`/topic/chat/room/${roomId}`, data => {
          const jsonData = JSON.parse(data.body);
          this.addMessage(jsonData);
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

  async unsubscribe(id) {
    this.stompClient.unsubscribe(id);
  }

  async disconnect() {
    this.stompClient.disconnect();
  }

  send(roomId, sender, message, image) {
    this.stompClient.send(
      '/app/chat/message',
      {},
      JSON.stringify({
        type: 'TALK',
        roomId: roomId,
        sender: sender,
        message: message,
        image,
      })
    );
  }
}
