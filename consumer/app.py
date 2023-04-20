from kafka import KafkaConsumer

consumer = KafkaConsumer(
    'test',
    bootstrap_servers = "broker:9092",
    max_partition_fetch_bytes = 20971520,
    fetch_max_bytes = 20971520
)

for msg in consumer:
    print(msg.value)