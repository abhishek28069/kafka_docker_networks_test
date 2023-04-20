const Kafka = require("node-rdkafka")

const publishMessage = (content)=>{
  const stream = Kafka.Producer.createWriteStream({
  "metadata.broker.list": "broker:9092",
  "message.max.bytes": 20971520
}, {}, {topic: "test"})
  const success = stream.write(Buffer.from(content))
  if(success){
    console.log("messaged successfully")
  }
  else{
    console.log("message failed")
  } 
}


setInterval(()=>publishMessage("hi"), 3000)