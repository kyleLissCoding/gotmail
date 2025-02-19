interface EmailNotification {
  id: string;
  subject: string;
  sender: string;
  timestamp: number;
}

class BackgroundService {
  private notifications: EmailNotification[] = [];

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    chrome.runtime.onInstalled.addListener(() => {
      console.log('GotMail Assistant installed');
    });

    // Listen for messages from popup
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.handleMessage(message, sender, sendResponse);
    });
  }

  private handleMessage(
    message: any,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void
  ): void {
    // Handle different message types
    switch (message.type) {
      case 'GET_NOTIFICATIONS':
        sendResponse(this.notifications);
        break;
      default:
        console.log('Unknown message type:', message.type);
    }
  }
}

// Initialize background service
new BackgroundService(); 