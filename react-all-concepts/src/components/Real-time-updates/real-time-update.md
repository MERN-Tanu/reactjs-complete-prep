Real Time Updates

1. API polling
   - Long Polling
2. Server side events
3. websockets

# Real-Time Data Updates in React: Polling vs Long Polling vs WebSockets

## 1. Introduction

Modern web applications often need **real-time or near real-time updates**, such as:

* Chat applications
* Notifications
* Live dashboards
* Stock price updates

In React, there are three main approaches to achieve this:

* API Polling (Short Polling)
* Long Polling
* WebSockets

---

## 2. API Polling (Short Polling)

### Definition

API Polling is a technique where the client repeatedly sends requests to the server at fixed intervals to check for updates. (every time we will make new api call)

### How It Works

1. Client sends request to server
2. Server responds immediately
3. Client waits for a fixed interval (1sec,2sec...)
4. Process repeats

### React Example

```js
import { useEffect, useState } from "react";

function PollingExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/data")
        .then(res => res.json())
        .then(data => setData(data));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
```

### Advantages

* Simple to implement
* Works with any backend
* No special protocols required

### Disadvantages

* Inefficient (requests even when no data changes)
* Higher server load
* Not truly real-time (depends on interval)

---

## 3. Long Polling

### Definition

Long Polling is an improved version of polling where the server holds the request open until new data is available.

### How It Works

1. Client sends request
2. Server keeps connection open
3. When new data is available, server responds
4. Client immediately sends a new request

### React Example

```js
import { useEffect, useState } from "react";

function LongPollingExample() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch("/api/long-poll");
    const data = await res.json();
    setData(data);

    fetchData(); // Immediately request again
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
```

### Advantages

* More efficient than polling
* Near real-time updates
* Works over standard HTTP

### Disadvantages

* Still incurs HTTP overhead
* Can be complex to manage at scale
* Risk of connection timeouts

---

## 4. WebSockets

### Definition

WebSockets provide a persistent, bidirectional communication channel between client and server.

### How It Works

1. Client establishes a WebSocket connection
2. Connection stays open
3. Server pushes updates instantly
4. Client receives updates without repeated requests

### React Example (Native WebSocket)

```js
import { useEffect, useState } from "react";

function WebSocketExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setData(data);
    };

    return () => socket.close();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
```

### React Example (Using Socket.IO)

```js
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function SocketIOExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("update", (data) => {
      setData(data);
    });

    return () => socket.disconnect();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
```

### Advantages

* True real-time communication
* Efficient after connection setup
* Supports bidirectional communication

### Disadvantages

* More complex to implement
* Requires WebSocket-supported backend
* Scaling requires additional setup

---

## 5. Comparison Table

| Feature       | Polling       | Long Polling      | WebSockets |
| ------------- | ------------- | ----------------- | ---------- |
| Real-time     | ❌ No          | ⚠️ Near Real-time | ✅ Yes      |
| Efficiency    | ❌ Low         | ⚠️ Medium         | ✅ High     |
| Complexity    | ✅ Easy        | ⚠️ Medium         | ❌ High     |
| Server Load   | ❌ High        | ⚠️ Medium         | ✅ Low      |
| Communication | Request-based | Request-based     | Persistent |

---

## 6. When to Use What

### Use Polling When:

* Data changes infrequently
* Simplicity is preferred
* Real-time is not critical

### Use Long Polling When:

* Need near real-time updates
* WebSockets are not available
* Moderate scalability is acceptable

### Use WebSockets When:

* Building chat apps
* Live notifications
* Real-time dashboards
* Multiplayer or collaborative apps

---

## 7. Conclusion

* **Polling** is simple but inefficient
* **Long Polling** improves efficiency but still relies on HTTP
* **WebSockets** provide the best real-time experience but require more setup

### Rule of Thumb:

* Simple → Polling
* Better → Long Polling
* Best (Real-Time) → WebSockets

---


Polling
	•	One way (half duplex)
	•	API calls are a lot
	•	Expensive
	•	Easy compatible
	•	Near real-time (interval)

⸻

WebSockets
	•	Two way (duplex)
	•	Once connection made
	•	Not that expensive
	•	Not that compatible
	•	Real-time (Live Chat App, Google Docs)

Polling
	•	One way (half duplex)
	•	API calls are a lot
	•	Expensive
	•	Easy compatible
	•	Near real-time (interval)

Use cases:
	•	Dashboards
	•	Gmail
	•	Uber location
	•	YouTube live streams

⸻

WebSockets
	•	Two way (duplex)
	•	Once connection made
	•	Not that expensive
	•	Not that compatible
	•	Real-time

Use cases:
	•	Live Chat App
	•	Multiplayer Games
	•	Online editing (Google Docs)

⸻