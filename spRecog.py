import numpy as np
import speech_recognition as sr

recog = sr.Recognizer()
test = sr.AudioFile('tanner.wav')
with test as source:
    audio = recog.record(source)
    #recog.adjust_for_ambient_noise(audio)

print(type(audio))
print(recog.recognize_google(audio))

