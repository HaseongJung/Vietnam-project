import time
import random as rd
import pandas as pd
import numpy as np
from tqdm import tqdm

import requests # 페이지를 요청하는 기능 
from bs4 import BeautifulSoup # 파이썬으로 HTML을 다루는 기능
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
# driver = webdriver.Chrome(ChromeDriverManager().install())

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

user_agent = "Mozilla/5.0 (Linux; Android 9; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.83 Mobile Safari/537.36"
headers = {
    "User-Agent": user_agent
}


def setRestaurantPages(url: str):
    url = url
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # 200번대 코드가 아니면 코드가 멈춤
    print("response successful!")
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    restraurant_pages = []
    for restraurant_page in soup.find_all('div', class_="biGQs _P fiohW alXOW NwcxK GzNcM ytVPx UTQMg RnEEZ ngXxk"):
        restraurant_pages.append("https://www.tripadvisor.com/" + restraurant_page.find('a')['href'])
    # print(restraurant_pages)
    print(f'total restraurant pages: {len(restraurant_pages)}')
    
    return restraurant_pages

def createDataset():
    dataset = pd.DataFrame({
        "name": [],
        "category": [],
        "description": [],
        "category": [],
        "opneingTime": [],
        "closingTime": [],
        "URL": [],
        "priceLow": [],
        "priceHigh": [],
        "reviews": [],
    })
    
    return dataset

def setWebdriver():
    driver = webdriver.Chrome(ChromeDriverManager().install())
    options = Options()
    options.add_argument('user-agent=' + user_agent)
    # options.add_argument('headless') #headless모드 브라우저가 뜨지 않고 실행됩니다.
    # options.add_argument('--window-size= x, y') #실행되는 브라우저 크기를 지정할 수 있습니다.
    # options.add_argument('--start-maximized') #브라우저가 최대화된 상태로 실행됩니다.
    # options.add_argument('--start-fullscreen') #브라우저가 풀스크린 모드(F11)로 실행됩니다.
    # options.add_argument('--blink-settings=imagesEnabled=false') #브라우저에서 이미지 로딩을 하지 않습니다.
    options.add_argument('--mute-audio') #브라우저에 음소거 옵션을 적용합니다.
    options.add_argument('incognito') #시크릿 모드의 브라우저가 실행됩니다.
    driver.set_window_size(1920, 1080)

    return driver

def buildDataset(dataset: str, pages: list):
    for restaurant_page in tqdm(pages, desc="restaurants..."):
        response = requests.get(restaurant_page, headers=headers)
        response.raise_for_status()
        html = response.text
        soup = BeautifulSoup(html, "html.parser")

        # name 
        name = soup.find('h1', class_="HjBfq").text;    print(f'name: {name}')

        # category
        category = ''
        for x in soup.find('span', class_="DsyBj DxyfE"):
            if '$' not in x.text:
                category += f'{x.text}, '
        category = category[:-2]
        print(f'category: {category}')

        # adress
        adress = soup.find('a', class_="AYHFM").text;   print(f'adress: {adress}')

        # rating
        rating = soup.find('span', class_="ZDEqb").text;    print(f'rating: {rating}')

        # time
        openingTime = soup.find('span', class_="mMkhr").text[11:19];    print(f'openingTime: {openingTime}')
        closingTime = soup.find('span', class_="mMkhr").text[22:30];    print(f'closingTime: {closingTime}')

        url = restaurant_page;    print(f'url: {url}')

        # price
        try:
            priceLow = soup.find('div', class_="SrqKb").text.split(' - ')[0] 
            priceHigh = soup.find('div', class_="SrqKb").text.split(' - ')[1]
        except:
            priceLow = np.NaN; priceHigh = np.NaN
        print (f'priceLow: {priceLow}, priceHigh: {priceHigh}')

        # reviews, only english reviews
        total_reviews = int(soup.find('span', class_="count").text[1:-1].replace(',', ''));    print(f'total_reviews: {total_reviews}')
        review_pages = total_reviews // 15 if total_reviews%15 == 0 else total_reviews//15 + 1;    print(f'review_pages: {review_pages}')
        for i in tqdm(range(1, review_pages), desc='review pages...'):
            if i > 1:
                url_list = url.split('-Reviews')
                url_list.insert(1, f'-or{i*15}')
                current_url = ''.join(url_list)
                # print(f'current_url: {current_url}')
                response = requests.get(current_url, headers=headers)
                response.raise_for_status()
                html = response.text
                soup = BeautifulSoup(html, "html.parser")

            review = []
            reviews = soup.find_all('p', class_="partial_entry");
            for review in reviews:
                review.append(review.text)
            #     print(review.text)

            time.sleep(rd.uniform(0.1, 0.5))

        # description
        driver.get(url)
        try:
            WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, "#component_52 > div.hILIJ > div > div:nth-child(2) > div > div > div.gmbZC > a")))
            element = driver.find_element(By.CSS_SELECTOR, "#component_52 > div.hILIJ > div > div:nth-child(2) > div > div > div.gmbZC > a")
            element.click()
            WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, "#BODY_BLOCK_JQUERY_REFLOW > div.VZmgo.D.X0.X1.Za > div > div.TocEc._Z.S2.H2._f > div > div > div.kwVln > div > div:nth-child(1) > div > div.jmnaM")))
            element = driver.find_element(By.CSS_SELECTOR, "#BODY_BLOCK_JQUERY_REFLOW > div.VZmgo.D.X0.X1.Za > div > div.TocEc._Z.S2.H2._f > div > div > div.kwVln > div > div:nth-child(1) > div > div.jmnaM")
            description = element.text
            print(description)
        except:
            description = np.NaN
        print(f'description: {description}\n')
        
        
        time.sleep(rd.uniform(1, 2))
        dataset["name"] = [name]
        dataset["category"] = [category]
        dataset["adress"] = [adress]
        dataset["rating"] = [rating]
        dataset["opneingTime"] = [openingTime]
        dataset["closingTime"] = [closingTime]
        dataset["URL"] = [url]
        dataset["priceLow"] = [priceLow]
        dataset["priceHigh"] = [priceHigh]
        dataset["reviews"] = [reviews]
        dataset
        
    return dataset 

if __name__ == "__main__":
    # set restaurant pages
    url = "https://www.tripadvisor.com/Restaurants-g298085-Da_Nang.html"
    restraurant_pages = setRestaurantPages(url)

    # create dataset
    dataset = createDataset()

    # set webdriver
    driver = setWebdriver()

    # start crawling
    dataset = buildDataset(dataset, restraurant_pages)

    # save dataset
    dataset.to_csv('test.csv')