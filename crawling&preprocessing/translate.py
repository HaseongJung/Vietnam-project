import pandas as pd
import numpy as np

from googletrans import Translator
options = ['text', 'file']

from tqdm import tqdm
tqdm.pandas() # tqdm 전용 pandas

import time
import random as rd


def translate(text, desc: str):
    translator = Translator()
    time.sleep(rd.uniform(5.5, 7.5))
    if pd.isnull(text):
        return np.NaN
    else:
        return translator.translate(text, dest=desc).text
    
def main():
    df = pd.read_csv("./translatedDataset.csv")
    df.drop(axis=1, columns=['Unnamed: 0'], inplace=True)
    print(df)

    # Make a new column for each language
    ## category
    df.insert(2, "categoryEg", df['category'])
    df.insert(3, "categoryKo", df['category'])
    df.insert(4, "categoryVi", df['category'])
    df.drop(axis=1, columns=['category'], inplace=True)

    # ## description
    df.insert(5, "descriptionEg", df['description'])
    df.insert(6, "descriptionKo", df['description'])
    df.insert(7, "descriptionVi", df['description'])
    df.drop(axis=1, columns=['description'], inplace=True)

    ## adress
    df.insert(12, "addressEg", df['adress'])
    df.insert(13, "addressKo", df['adress'])
    df.insert(14, "addressVi", df['adress'])
    df.drop(axis=1, columns=['adress'], inplace=True)
    print("------------------------------After Insert------------------------------")
    print(df.columns)

    # test
    temp = pd.DataFrame({'text': ['Hello', 'World', 'Python', 'Pandas', 'Numpy', np.NaN]})
    test = temp['text'].progress_apply(translate, desc='ko')
    print("------------------------------Test------------------------------")
    print(f'Original: {temp}')  
    print(f'Translated: {test}')

    # # translate category
    df["categoryKo"] = df["categoryKo"].progress_apply(translate, desc='ko')
    df["categoryVi"] = df["categoryVi"].progress_apply(translate, desc='vi')

    # # translate description
    df["descriptionKo"] = df["descriptionKo"].progress_apply(translate, desc='ko')
    df["descriptionVi"] = df["descriptionVi"].progress_apply(translate, desc='vi')

    # translate address
    df["addressKo"] = df["addressKo"].progress_apply(translate, desc='ko')
    df["addressVi"] = df["addressVi"].progress_apply(translate, desc='vi')

    print(df)

    df.to_csv("./translatedDataset2.csv")

if __name__ == "__main__":
    main()
