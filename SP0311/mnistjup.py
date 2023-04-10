#!/usr/bin/env python
# coding: utf-8

# In[1]:

import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


# In[ ]:





# In[2]:


import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split


# In[3]:


train =pd.read_csv("D:\mnist\mnist_train.csv")
test=pd.read_csv("D:\mnist\mnist_test.csv")


# In[4]:


train.shape


# In[5]:


train.columns


# In[6]:


train.head(10)


# In[7]:


train_Y=train.iloc[:,0]
train_X=train.drop(['label'],axis=1)

test_Y=test.iloc[:,0]
test_X=test.drop(['label'],axis=1)


# In[8]:


train_X.shape


# In[9]:


plt.rcParams["figure.figsize"] = [7,5]
plt.rcParams["figure.autolayout"] = True
for i in range (9):
    plt.subplot(3,3,i+1)
    digit = train_X.iloc[i, 0:]
    digit = digit.values.reshape(28,28)
    plt.imshow(digit, cmap='gray')
    


# In[10]:


#for i in range (9):
    #print(train_Y[i])


# In[11]:


train.head()


# In[12]:


train_X.iloc[0].dtype


# In[13]:


#displating the count of values
import seaborn as sns
sns.countplot(train_Y)


# In[14]:


train_X_2d = train_X.values.reshape(-1, 28, 28)


# In[15]:


#displaying digit from train_X

def plot_digit(digit, dem = 28, font_size = 12):
    max_ax = font_size * dem #size of each pixel(text) * no. of pixels
    
    fig = plt.figure(figsize=(8,8))
    plt.xlim([0, max_ax])
    plt.ylim([0, max_ax])
    plt.axis('off')
    black = '#000000' 
    
    for idx in range(dem):
        for jdx in range(dem):

            t = plt.text(idx * font_size, max_ax - jdx*font_size, digit[jdx][idx], fontsize = font_size, color = black)#x,y,text
            c = digit[jdx][idx] / 255.
            t.set_bbox(dict(facecolor=(c,c,c), alpha = 0.5, edgecolor = 'black'))
            
    plt.show()
    
#max_Ax-jdx* font size is done because in matplotlib the bottom left corner is set as 0


# In[16]:


import random
rand_number = random.randint(0, len(train_Y))
#print(train_Y[rand_number])
#plot_digit(train_X_2d[rand_number])


# In[17]:


import matplotlib.pyplot as plt

fig = plt.figure(figsize=(2,2))
t = plt.text(0, 0, "bottom left",fontsize=5)
plt.setp(t, bbox={"facecolor": "red", "edgecolor": "white", "alpha": 0.5})

#333plt.show()


# In[18]:


# Data Normalization [0, 1]
train_X = train_X /255
test_X = test_X / 255


# In[19]:


# one-hot encoding for target column
from keras.utils import to_categorical
train_Y_cat = to_categorical(train_Y)
#print(train_Y[2])
#print(train_Y_cat[2])


# In[20]:


X1_train, X1_test, y1_train, y1_test = train_test_split(train_X,train_Y,train_size=0.85,random_state=42)
X1_train.shape, X1_test.shape, y1_train.shape, y1_test.shape


# In[21]:

"""
#with no hidden layers
model = keras.Sequential([
    keras.layers.Dense(10, input_shape=(784,), activation='softmax') #softmax coz multiclass -> input-> 1d array
])


model.compile(optimizer='adam',loss='sparse_categorical_crossentropy',metrics=['accuracy'])


model.fit(X1_train,y1_train,epochs=5) #cei-< optimizer

"""
# In[22]:


#
#score=model.evaluate(X1_test,y1_test)


# In[ ]:


#print(type(score))
#print(len(score))
#score


# In[ ]:


#print('Test loss: {}%'.format(score[0] * 100))
#print('Test score: {}%'.format(score[1] * 100))

#print("MLP Error: %.2f%%" % (100 - score[1] * 100))


# In[ ]:



model3 = keras.Sequential([
    keras.layers.Dense(400, input_shape=(784,), activation='relu'),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10, activation='sigmoid') #softmax coz multiclass -> input-> 1d array
])


model3.compile(optimizer='adam',loss='sparse_categorical_crossentropy',metrics=['accuracy'])


model3.fit(X1_train,y1_train,epochs=7)


# In[ ]:


score=model3.evaluate(X1_test,y1_test)


# In[ ]:


#this shows the model might overfight coz of more hidden layers


# In[ ]:

"""
model2 = keras.Sequential([
    keras.layers.Dense(512, input_shape=(784,), activation='relu'),
    keras.layers.Dense(256,activation='relu'),
    #keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10, activation='softmax') #softmax coz multiclass -> input-> 1d array
])


model2.compile(optimizer='adam',loss='sparse_categorical_crossentropy',metrics=['accuracy'])


model2.fit(X1_train,y1_train,epochs=6)


# In[131]:


score=model2.evaluate(X1_test,y1_test)


# In[104]:


model4 = keras.Sequential([
    keras.layers.Dense(400, input_shape=(784,), activation='relu'),
    keras.layers.Dense(10, activation='sigmoid') #softmax coz multiclass -> input-> 1d array
])


model4.compile(optimizer='adam',loss='sparse_categorical_crossentropy',metrics=['accuracy'])




model4.fit(X1_train,y1_train,epochs=5)


# In[105]:


score=model4.evaluate(X1_test,y1_test)


# In[ ]:


#considering model3


# In[106]:


y_predict=model2.predict(X1_test)


# In[37]:


y_predict[1]


# In[38]:


np.argmax(y_predict[1])


# In[39]:


y1_test.iloc[1]


# In[40]:


arr=[np.argmax(i) for i in y_predict]
arr[:10]


# In[41]:


y1_test[:10]


# In[42]:


X1_train.shape[0]


# In[26]:


xCon_train = X1_train.values.reshape(X1_train.shape[0], 28, 28, 1)
xCon_test = X1_test.values.reshape(X1_test.shape[0], 28, 28, 1)

# Define the model architecture
model5 = tf.keras.models.Sequential([
  tf.keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(28, 28, 1)),
  tf.keras.layers.MaxPooling2D((2,2)),
  tf.keras.layers.Flatten(),
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dense(10, activation='softmax')
])

# Compile the model
model5.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
model5.fit(xCon_train, y1_train, epochs=5)


# In[44]:


xCon_test= X1_test.values.reshape(X1_test.shape[0], 28, 28, 1)
score=model5.evaluate(xCon_test,y1_test)


# In[132]:
"""

x=pd.read_csv('pixel_data.csv',index_col=False)
x=x.T
# In[ ]:





# In[ ]:





# In[137]:


x=x/255


# In[144]:

#print(x.shape)
y_predict=model3.predict(x)


# In[145]:


y_predict


# In[146]:


y=np.argmax(y_predict)

os.remove("digit.csv")
digit=pd.DataFrame({'digit': y},index=[0])
digit.columns=['digit']


digit.to_csv("digit.csv")
#print(y)


# In[44]:


t=train_Y.value_counts().index
#t


# In[ ]:




