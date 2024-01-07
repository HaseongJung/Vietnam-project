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

def setWebdriver():
    options = Options()
    options.add_argument('user-agent=' + user_agent)
    # options.add_argument('--start-maximized') #브라우저가 최대화된 상태로 실행됩니다.
    options.add_argument('headless') #headless모드 브라우저가 뜨지 않고 실행됩니다.
    # options.add_argument('--window-size= x, y') #실행되는 브라우저 크기를 지정할 수 있습니다.
    # options.add_argument('--start-fullscreen') #브라우저가 풀스크린 모드(F11)로 실행됩니다.
    # options.add_argument('--blink-settings=imagesEnabled=false') #브라우저에서 이미지 로딩을 하지 않습니다.
    options.add_argument('--mute-audio') #브라우저에 음소거 옵션을 적용합니다.
    options.add_argument('incognito') #시크릿 모드의 브라우저가 실행됩니다.
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

    return driver

def createDataset():
    dataset = pd.DataFrame({
        "name": [],
        "category": [],
        "description": [],
        "time": [],
        "URL": [],
        "priceLow": [],
        "priceHigh": [],
        "reviews": [],
        "adress": [],
        "rating": [],
        "TEL": [],
        "images": []
    })
    
    return dataset

def setRestaurantPages(url: str):
    url = url   
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # 200번대 코드가 아니면 코드가 멈춤
    print("Response successful!")
    html = response.text
    soup = BeautifulSoup(html, "html.parser")

    restraurant_pages = []
    total_restraurants = int(soup.find_all('span', class_="b")[1].text)
    main_pages = total_restraurants//30 if total_restraurants%30==0 else total_restraurants//30+1
    for i in tqdm(range(main_pages-1), desc="Set restaurant pages"):
        if i > 0:
            current_url = url[:48] + f'oa{i*30}' + url[47:]
            # print(f'current_url: {current_url}')
            response = requests.get(current_url, headers=headers)
            response.raise_for_status()
            html = response.text
            soup = BeautifulSoup(html, "html.parser")

        for restraurant_page in soup.find_all('div', class_="biGQs _P fiohW alXOW NwcxK GzNcM ytVPx UTQMg RnEEZ ngXxk"):
            restraurant_pages.append("https://www.tripadvisor.com/" + restraurant_page.find('a')['href'])
            # print(restraurant_page.find('a')['href'])
        time.sleep
        # print(f'Total restraurant pages: {len(restraurant_pages)}')
        
    print(f'Total restraurant pages: {len(restraurant_pages)}')
    
    return restraurant_pages

def getTime(driver):
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'NehmB')))
        time.sleep(3)
        element = driver.find_element(By.CLASS_NAME, 'NehmB')
        element.click()

        time_list = [] 
        WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "RiEuX.f")))
        time_elements = driver.find_elements(By.CLASS_NAME, "RiEuX.f")
        for time_element in time_elements:
            time_list.append(time_element.text.replace('\n', ':'))
    except:
        time_list = None

    return time_list

def getDescription(driver):
    try:
        WebDriverWait(driver, 3).until(
                EC.presence_of_element_located((By.LINK_TEXT, "View all details")))
        element = driver.find_element(By.LINK_TEXT, "View all details")
        element.click()
        WebDriverWait(driver, 3).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "#BODY_BLOCK_JQUERY_REFLOW > div.VZmgo.D.X0.X1.Za > div > div.TocEc._Z.S2.H2._f > div > div > div.kwVln > div > div:nth-child(1) > div > div.jmnaM")))
        element = driver.find_element(By.CSS_SELECTOR, "#BODY_BLOCK_JQUERY_REFLOW > div.VZmgo.D.X0.X1.Za > div > div.TocEc._Z.S2.H2._f > div > div > div.kwVln > div > div:nth-child(1) > div > div.jmnaM")
        description = element.text
        webdriver.ActionChains(driver).send_keys(Keys.ESCAPE).perform()
    except:
        webdriver.ActionChains(driver).send_keys(Keys.ESCAPE).perform()
        description = None

    return description

def getImages(driver):
    images = []
    try:
        time.sleep(2)
        WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "#taplc_resp_rr_photo_mosaic_0 > div > div.photos_and_contact_links_container.ui_column.is-12 > div.photo_mosaic_and_all_photos_banner > div.mosaic_photos > div:nth-child(2) > div.see_all_count_wrap > span > span.details")))
        element = driver.find_element(By.CSS_SELECTOR, "#taplc_resp_rr_photo_mosaic_0 > div > div.photos_and_contact_links_container.ui_column.is-12 > div.photo_mosaic_and_all_photos_banner > div.mosaic_photos > div:nth-child(2) > div.see_all_count_wrap > span > span.details")
        element.click()
        WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "fillSquare")))
        elements = driver.find_elements(By.CLASS_NAME, "fillSquare")
        # print(elements)
        for element in elements:
            # print(element.find_element(By.TAG_NAME, "img"))
            img_element = element.find_element(By.TAG_NAME, "img")
            img_src = img_element.get_attribute("src")
            if img_src != None:
                images.append(img_src)
    except:
        images = None

    return images

def getCategory(soup):
    try:
        category = ''
        for x in soup.find('span', class_="DsyBj DxyfE"):
            if '$' not in x.text:
                category += f'{x.text}, '
        category = category[:-2]
    except:
        category = None

    return (category)

def getReviews(soup, url):
    try:
        total_reviews = int(soup.find_all('span', class_="count")[0].text[1:-1].replace(',', ''));
        # print(f'Total_reviews: {total_reviews}')
        review_pages = total_reviews//15 if total_reviews%15 == 0 else total_reviews//15 + 1;    
        # print(f'Review pages: {review_pages}')
        review_list = []
        for i in tqdm(range(0, review_pages), desc='Review crwaling...'):
            if i > 1:
                url_list = url.split('-Reviews-')
                current_url = url_list[0] + f'-Reviews-or{15*i}-' + url_list[1]
                # print(f'current_url: {current_url}')
                response = requests.get(current_url, headers=headers)
                response.raise_for_status()
                html = response.text
                soup = BeautifulSoup(html, "html.parser") 

            reviews = soup.find_all('p', class_="partial_entry");
            for review in reviews:
                review_list.append(review.text)
            #     print(review.text)
            # print(f'Reviews: {len(review_list)}')

            time.sleep(rd.uniform(0.1, 0.5))
    except:
        review_list = None

    return review_list

def buildDataset(driver, dataset, pages: list):
    cnt = 0
    for restaurant_page in tqdm(pages, desc="Restaurants"):
        response = requests.get(restaurant_page, headers=headers)
        response.raise_for_status()
        html = response.text
        soup = BeautifulSoup(html, "html.parser")

        # url
        url = restaurant_page;    print(f'URL: {url}')
        # Using selenium
        driver.get(url)

        # time
        time_list = getTime(driver);    print(f'Times: {time_list}')
        # description
        description = getDescription(driver);   print(f'Description: {description}')
        # images
        images = getImages(driver)
        try:
            print(f'Images: {len(images)} {images}')
        except:
            print(f'Images: None')
        # using request
        # name 
        try:
            name = soup.find('h1', class_="HjBfq").text;    print(f'Name: {name}')
        except:
            name = None
        # category
        category = getCategory(soup);   print(f'Category: {category}');
        # adress
        try:
            adress = soup.find_all('a', class_="AYHFM")[1].text;   print(f'Adress: {adress}')
        except:
            adress = None
        # rating
        try:
            rating = float(soup.find('span', class_="ZDEqb").text);    print(f'Rating: {rating}')
        except:
            rating = np.NaN
        # price
        try:
            priceLow = soup.find('div', class_="SrqKb").text.split(' - ')[0] 
            priceHigh = soup.find('div', class_="SrqKb").text.split(' - ')[1]
        except:
            priceLow = None; priceHigh = None
        print (f'PriceLow: {priceLow}, PriceHigh: {priceHigh}')
        # reviews (only english)
        review_list = getReviews(soup, url)
        try:
            print(f'Reviews: {len(review_list)}')
        except:
            print(f'Reviews: None')
        # call
        try:
            tel = soup.find('span', class_="AYHFM").text
        except:
            tel = None; 
        print (f'TEL : {tel}')
        
        print()
        time.sleep(rd.uniform(0.5, 1.5))
        dataset.loc[cnt] = [name, category, description, time_list, url, priceLow, priceHigh, review_list, adress, rating, tel, images]
        cnt += 1 
        
    return dataset 

if __name__ == "__main__":
    # set webdriver
    driver = setWebdriver()

    # create dataset
    dataset = createDataset()

    # set pages
    url = "https://www.tripadvisor.com/Restaurants-g298085-Da_Nang.html"
    restraurant_pages = setRestaurantPages(url)

    # start crawling
    dataset = buildDataset(driver, dataset, restraurant_pages)

    # save dataset
    dataset.to_csv('dataset3.csv')
    print(f'Dataset build complete!\n')
    dataset