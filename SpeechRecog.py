import speech_recognition

r = sr.Recognizer()
test = sr.AudioFile('harvard.wav')
with test as source:
    audio = r.record('source')

print(type(audio))
r.recognize_google(audio)

