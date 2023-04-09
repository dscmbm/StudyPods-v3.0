import requests
import bs4
import pandas as pd
from bs4 import BeautifulSoup
import csv
import re
import io
import webbrowser
def customURL():
    job = input("Enter the job post that you want to apply for:\n").strip()
    location= input("Enter the desired location:\n").strip()
    job = job.replace(" ","+")
    FinalURL = "https://in.indeed.com/jobs?q="+job+"&l="+location
    return FinalURL
URL = customURL()
print("The generated URL is: ",URL)
#conducting a request of the stated URL above:
page = requests.get(URL)
#specifying a desired format of "page" using the html parser - this allows python to read the various components of the page, rather than treating it as one long string.
soup = BeautifulSoup(page.text, "html.parser")
#printing soup in a more structured tree format that makes for easier reading
# print(soup.prettify())
def cleanhtml(desc_list):
    output = ""
    for i in desc_list:
        cleanr = re.compile('<.*?>')
        cleantext = re.sub(cleanr, '', i)
        output = " "+cleantext
        return output.strip()
def input_not_type_hidden(tag):
    print(tag.name == 'span' and tag.get('class') != 'label')
    return tag.name == 'span' and tag.get('class') != 'label'
def extract_job_title_from_result(soup):
    row =[7]
    jobs =[]
    i = 1
# The function will target specific html elements of the fetched html document to scrape the required data.
# In our case, the document contains 15 entries of job profiles in single html document so to scrape data through every job section, we
# iterate same logic used for scraping one job profile section multiple times using for loop.
if (soup.find_all(name="div", attrs={"class":"bad_query"}) or soup.find_all(name="div", attrs={"class":"invalid_location"})):
    print("Invalid Query! Please enter correct job profile and location.")
    webbrowser.open_new_tab(r"C:\Users\meswa\Desktop\indeed final\colorliberror-404-11\index.html")
    return [[]]
for div in soup.find_all(name="div", attrs={"class":"slider_container"}):
    if(i==1):
        print("***************************************************")
# print job profile number
print("job profile number:",i)
i = i + 1
# finding all h2 tags in html document.inside h2 tag there is a span tag which contains name of the job profile.
for a in div.find_all(name="h2"):
    SpanVar = a.find('span', class_=lambda x: x != 'label')
# checking if the value of the variable is none or not.because in few job profiles the fields are left empty
# so in that case where value is none, the code will throw error
# this step is used throughout the entire code
if(SpanVar==None):
    Final_job = "Empty job title"
    print(Final_job)
else:
    Final_job=SpanVar.text
    print(Final_job)
    SpanVar = ""
# for company name
# storing all the data inside variable so that we can append all that data into list later
ys = div.find(name="span",attrs={"class":"companyName"})
if(ys==None):
    Final_company = "Empty job Company Name"
    print(Final_company)
else:
    Final_company = ys.text
    print(Final_company)
    az = div.find(name="div",attrs={"class":"companyLocation"})
if(az==None):
    Final_location = "Empty job location"
    print(Final_location)
else:
    Final_location = az.text
    print(Final_location)
    rating = div.find(name="span",attrs={"aria-hidden":"true"})
if(rating==None):
    Final_rating ="Empty job rating"
    print(Final_rating)
else:
    Final_rating =rating.text
    print(Final_rating)
# emptying list to append description of next job profile during next iteration
desc_list = []
try:
    description = div.find(name="ul",attrs={"style":"list-styletype:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;"})
except:
    SyntaxError
try:
    for point in description.find_all('li'):
if(point==None):
    desc_list.append("Empty job description")
    print("Empty job description")
else:
    print(point.text)
desc_list.append(point.text)
except:
    SyntaxError
    print("The description:",desc_list)
    date_updated = div.find(name="span",attrs={"class":"date"})
if(date_updated==None):
    Final_date = "Empty job date posting"
    print(Final_date)
else:
    Final_date = date_updated.text
    print(Final_date)
    print("************************************************")
    Final_desc =cleanhtml(desc_list)
# to print out the names of the columns.('if' block will be executed only once
if(i==2):
    row.extend(("Profile","Company","location","rating","description","date"))
    jobs.append(row)
    row = []
# appending all the data inside row list
row.extend((Final_job,Final_company,Final_location,Final_rating,Final_desc,Final_date))
# emptying the list to add new rows on every iteration
desc_list =[]
# final list
jobs.append(row)
row = []
return(jobs) 
finalData = extract_job_title_from_result(soup)
print(finalData)
# file = open(r'C:\Users\meswa\Desktop\Indeedscrape.csv','w+',newline='')
# enter your own path
with io.open(r'C:\Users\meswa\Desktop\indeed final\Indeedscrape.csv', "w",
encoding="utf-8") as file:
write = csv.writer(file)
write.writerows(finalData)
# to read csv file named "samplee"
a = pd.read_csv(r"C:\Users\meswa\Desktop\indeed final\Indeedscrape.csv")
# to save as html file
# named as "indexindeed.html"
a.to_html(r"C:\Users\meswa\Desktop\indeed final\indexindeed.html")
# assign it to a
# variable (string)
# html_file = a.to_html()
webbrowser.open_new_tab(r"C:\Users\meswa\Desktop\indeed final\indexindeed.html")