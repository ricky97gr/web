import { send } from "process";
import React, { useEffect } from "react";
import { json } from "stream/consumers";

export const MyWebSocket = ({ url, parentMessage, updateParentMessage }) => {
  const ws = new WebSocket("ws://localhost:8800/normalUser/ws");


  const receiveMessage = (data) => {
    console.log(data)
  }
  const start = () => {
    console.log("start successfully")
  }
  const stop = () => {
    ws && ws.close()
  }
  const sendMessage = (e) => {
    ws.send(JSON.stringify(e))
  }

  useEffect(() => {
    ws.onmessage = receiveMessage
    ws.onopen = start
    return () => {
      stop()
    }
  })

  return (sendMessage)
}