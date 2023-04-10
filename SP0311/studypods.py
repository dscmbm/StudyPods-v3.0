"""from tkinter  import *
import os
import mysql.connector
from PIL import Image,ImageTk,ImageOps
from sqlalchemy import BLOB, INTEGER, VARCHAR
import tkinter.messagebox
from tkinter import filedialog
import csv
import base64
import mnistjup
import subprocess

root=Tk()
root.geometry("2000x2000")
root.title("Digit Recognition")
root.config(bg="light grey")

def browse_file():
    file_path=filedialog.askopenfilename()
    image=Image.open(file_path)
    image_resized=image.resize((200,200))
    image=ImageTk.PhotoImage(image_resized)
    label_image=Label(root,image=image)
    label_image.image=image
    label_image.place(x=800,y=250)
    againsize=(28,28)
    image_resized=ImageOps.fit(image_resized,againsize,Image.ANTIALIAS)
    image_resized=image_resized.convert('L')
    pixels=image_resized.load()

    with open('pixel_data.csv','w',newline='') as file:
        writer=csv.writer(file)
        writer.writerow(['l'])
        for x in range(image_resized.width):
            for y in range(image_resized.height):
                l=pixels[x,y]
                writer.writerow([l])


    
    print("Image uploaded successfully")
    label.config(text="Here's my predicted outcome!!!",font=("Comic Sans MS",20))



def run_another_file():
    subprocess.call("mnistjup.py")


img=Image.open('studypodimg.webp')
img=img.resize((1500,1500),Image.ANTIALIAS)
bg = ImageTk.PhotoImage(img)
label = Label(root, image=bg)
label.place(x = 0,y = 0)
label=Label(root,text="")
label.place(x=800,y=600)


label_widget1 = Label(root, text="Predicted value",font=("Comic Sans MS",50, "bold"),bg="white")
label_widget1.place(x=800,y=100)
text_box=Entry(root,textvariable=int,font=("times new roman", 70), bg='light grey')
text_box.place(x=1100,y=300)
Button(text="Upload The Digit", command=browse_file,font=("times new roman", 20), bg='light grey').place(x=900, y=700)

Button(text="Predict", command=run_another_file,font=("times new roman", 20), bg='light grey').place(x=850, y=500)



root.mainloop()"""
from tkinter  import *
import os
import mysql.connector
from PIL import Image,ImageTk,ImageOps
from sqlalchemy import BLOB, INTEGER, VARCHAR
import tkinter.messagebox
from tkinter import filedialog
import csv
import base64
import subprocess

root=Tk()
root.geometry("2000x2000")
root.title("Digit Recognition")
root.config(bg="light grey")

def browse_file():
    file_path=filedialog.askopenfilename()
    image=Image.open(file_path)
    image_resized=image.resize((200,200))
    image=ImageTk.PhotoImage(image_resized)
    label_image=Label(root,image=image)
    label_image.image=image
    label_image.place(x=800,y=200)
    againsize=(28,28)
    image_resized=ImageOps.fit(image_resized,againsize,Image.ANTIALIAS)
    image_resized=image_resized.convert('L')
    pixels=image_resized.load()

    with open('pixel_data.csv','w',newline='') as file:
        writer=csv.writer(file)
        writer.writerow(['l'])

        for x in range(image_resized.width):
            for y in range(image_resized.height):
                l=pixels[x,y]
                writer.writerow([l])

    
    print("Image uploaded successfully")
    label.config(text="Click on the predict button!!!",font=("Comic Sans MS",20))


def run_another_file():
   #open('digit.csv','w').close()
    subprocess.Popen(['python', 'mnistjup.py'], stdout=subprocess.PIPE)
    with open('digit.csv', 'r') as csvfile:
        
        csv_reader = csv.DictReader(csvfile)
        
        for row in csv_reader:
            value = row['digit'][0]
            break
        #print("value : ",value)
        
        text_box.delete(0,END)
        text_box.insert(0,value)
    

img=Image.open('studypodimg.webp')
img=img.resize((1500,1500),Image.ANTIALIAS)
bg = ImageTk.PhotoImage(img)
label = Label(root, image=bg)
label.place(x = 0,y = 0)
label=Label(root,text="")
label.place(x=850,y=530)


label_widget1 = Label(root, text="Predicted value",font=("Comic Sans MS",50, "bold"),bg="white")
label_widget1.place(x=800,y=90)




text_box=Entry(root,textvariable=int,font=("times new roman", 70), bg='light grey')
text_box.place(x=1300,y=250)

Button(text="Predict", command=run_another_file,font=("times new roman", 20), bg='light grey').place(x=1050, y=600)
Button(text="Upload The Digit", command=browse_file,font=("times new roman", 20), bg='light grey').place(x=1000, y=450)



root.mainloop()