import numpy as np 
import pandas as pd 	
import matplotlib.pyplot as plt 
import math
from sklearn.metrics import (
    accuracy_score,
    f1_score,
)

#load dataset
df=pd.read_csv("adult.csv",names=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"])
print(df.head())

df.replace(' ?',np.NaN,inplace=True)
df.dropna(inplace=True)

#seperate input and output from given dataset
inputs=df.drop([df.columns[-1]],axis=1)
outputs=df[df.columns[-1]]
print(inputs.head())
print(outputs.head())

#Probability of <=50k and >50k
temp=[]
unique_outputs=np.unique(outputs)
cntyes=0
for i in df.index:
    if outputs[i]==unique_outputs[0]:
       cntyes+=1       
       temp.append(inputs["B"][i])
print("P(<=50K) = ",cntyes/len(outputs))
print("P(>50K) = ",(len(outputs)-cntyes)/len(outputs))
      
#likelihood table for all features
def likelihood(col_name):
    unique=np.unique(inputs[col_name])
    cnt=np.zeros(len(unique),dtype=int)
    cnt_yes=np.zeros(len(unique),dtype=int)
    cnt_no=np.zeros(len(unique),dtype=int)
    for i in range(len(inputs[col_name])):
        for j in range(len(unique)):
            if inputs[col_name][i]==unique[j]:
               cnt[j]+=1
               break
        if outputs[i]==unique_outputs[0]:
               cnt_yes[j]+=1
    cnt_no=(cnt-cnt_yes)/(len(outputs)-cntyes)
    cnt_yes=cnt_yes/cntyes
    temp=pd.DataFrame(data=[cnt_yes,cnt_no,cnt/len(outputs)],columns=unique,index=["<=50K",">50K","Total"])
    return temp

#calculate posterior like P(Female|YES) or P(Female|NO) or P(Female) 
def posterior(col_name,value,yesno):
    t=likelihood(col_name)
    if yesno=="YES":
        yesno=0
    elif yesno=="NO":
        yesno=1
    else:
        yesno=2
    return t.iloc[:,list(np.unique(inputs[col_name])).index(value)][yesno]

def posterior_YES(query):
    ans=posterior("B",query["B"],"YES")
    ans*=posterior("F",query["F"],"YES")
    ans*=posterior("G",query["G"],"YES")
    ans*=posterior("H",query["H"],"YES")
    ans*=posterior("I",query["I"],"YES")
    ans*=posterior("J",query["J"],"YES")
    ans*=cntyes/len(outputs)
    ans/=posterior("B",query["B"],"")
    ans/=posterior("F",query["F"],"")
    ans/=posterior("G",query["G"],"")
    ans/=posterior("H",query["H"],"")
    ans/=posterior("I",query["I"],"")
    ans/=posterior("J",query["J"],"")
    return ans

def posterior_NO(query):
    ans=posterior("B",query["B"],"NO")
    ans*=posterior("F",query["F"],"NO")
    ans*=posterior("G",query["G"],"NO")
    ans*=posterior("H",query["H"],"NO")
    ans*=posterior("I",query["I"],"NO")
    ans*=posterior("J",query["J"],"NO")
    ans*=(len(outputs)-cntyes)/len(outputs)
    ans/=posterior("B",query["B"],"")
    ans/=posterior("F",query["F"],"")
    ans/=posterior("G",query["G"],"")
    ans/=posterior("H",query["H"],"")
    ans/=posterior("I",query["I"],"")
    ans/=posterior("J",query["J"],"")
    return ans

def plot(col):
    x=np.unique(inputs[col])
    temp=pd.DataFrame(columns=[0,1],index=x)
    temp.replace(np.NaN,0,inplace=True)
    for i in df.index:
        if outputs[i]==" <=50K":
            temp[0][inputs[col][i]]+=1
        else:
            temp[1][inputs[col][i]]+=1
    x=np.arange(len(temp.index))
    plt.bar(x,temp[0],color='b',width=0.33,label="<=50K")
    plt.bar(x+0.33,temp[1],color='g',width=0.33,label=">50K")
    plt.xticks(x,temp.index)
    plt.legend(loc='upper right')
    plt.xlabel(col)
    plt.ylabel("Total number of people")
    plt.savefig("col_"+col)
    plt.show()

"""
P(y=Yes|x) = P(Yes|Rainy,Mild,Normal,t)
         P(Rainy,Mild,Normal,t|Yes) * P(Yes)
       = ___________________________________
                P(Rainy,Mild,Normal,t)
         P(Rainy|Yes)*P(Mild|Yes)*P(Normal|Yes)*P(t|Yes)*P(Yes)
       = ______________________________________________________
                    P(Rainy)*P(Mild)*P(Normal)*P(t)
"""

"""
pred=[]
for i in range(1):
    query = inputs.iloc[0]
    if posterior_YES(query)>posterior_NO(query):
        pred.append(" <=50K")
    else:
        pred.append(" >50K")
    print(i,pred[i],outputs[i])
"""

"""
store = pd.DataFrame(data=pred)
store.to_csv("Prediction.csv",mode='a',index=None,header=False)
temp=pd.read_csv("Prediction.csv")
accuracy = accuracy_score(temp, outputs.iloc[0:4000])
f1 = f1_score(temp, outputs.iloc[0:4000], average="weighted")
print("Accuracy:", accuracy)
print("F1 Score:", f1)
"""


    
