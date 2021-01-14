import hashlib

encoded_message = hashlib.md5(b'Hello!! Welcome to AIM!!')
converted = encoded_message.hexdigest()
print(converted)