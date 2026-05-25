import pickle

features = pickle.load(open("Models/features.pkl", "rb"))

print(features)
print(len(features))